'use server';

import mongoose from 'mongoose';
import Feedback from '../models/feedback';

export async function getRatingStats() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/feedback_db');
    }
    
    const count = await Feedback.countDocuments({});
    
    const result = await Feedback.aggregate([
      {
        $group: {
          _id: null,
          averageRating: { $avg: '$stars' }
        }
      }
    ]);
    
    const averageRating = result.length > 0 
      ? Math.round(result[0].averageRating * 10) / 10
      : 0;
      
    return { averageRating, count };
    
  } catch (error) {
    console.error('Error fetching rating stats:', error);
    return { averageRating: 0, count: 0 };
  }
}