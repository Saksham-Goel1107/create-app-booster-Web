import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Feedback from '../../models/feedback';
import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request) {
  try {
    const body = await request.json();
    const { stars, comments } = body;
    
    if (!stars || stars < 1 || stars > 5) {
      return NextResponse.json(
        { error: 'Invalid rating: must be between 1 and 5' },
        { status: 400 }
      );
    }
    
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/feedback_db');
    }

    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     request.headers.get('client-ip') ||
                     'unknown';
                     
    const cookieStore = cookies();
    let userId = cookieStore.get('feedback_user_id')?.value;
    
    if (!userId) {
      userId = uuidv4();
      cookieStore.set('feedback_user_id', userId, { 
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        httpOnly: true,
        sameSite: 'strict'
      });
    }
    
    const userIdentifier = `${clientIp}:${userId}`;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const feedbackCount = await Feedback.countDocuments({
      ipAddress: userIdentifier,
      createdAt: { $gte: today, $lt: tomorrow }
    });
    
    if (feedbackCount >= 2) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Maximum 2 feedback submissions per day.' },
        { status: 429 }
      );
    }
    
    const newFeedback = new Feedback({
      stars,
      comments: comments || '',
      ipAddress: userIdentifier
    });
    
    await newFeedback.save();
    
    const response = NextResponse.json(
      { message: 'Feedback submitted successfully' },
      { status: 201 }
    );
    
    response.cookies.set('feedback_user_id', userId, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: true,
      sameSite: 'strict'
    });
    
    return response;
    
  } catch (error) {
    console.error('Error submitting feedback:', error);
    
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}