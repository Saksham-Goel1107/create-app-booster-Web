'use client';

import { useState, useEffect, useCallback } from 'react';
import { getRatingStats } from '../actions/rating';
import { useTheme } from "../actions/DarkMode";

export default function RealTimeStars({ initialRating = 0, initialCount = 0 }) {
  const [averageRating, setAverageRating] = useState(initialRating);
  const [count, setCount] = useState(initialCount);
  const { darkMode } = useTheme();
  
  const refreshRatings = useCallback(async () => {
    try {
      console.log('Fetching new rating stats...');
      const { averageRating: newRating, count: newCount } = await getRatingStats();
      console.log('Received rating stats:', { newRating, newCount });
      setAverageRating(newRating);
      setCount(newCount);
    } catch (error) {
      console.error('Failed to refresh ratings:', error);
    }
  }, []);
  
  useEffect(() => {
    refreshRatings();
    
    const handleFeedbackSubmitted = () => {
      console.log('Feedback submitted event received');
      refreshRatings();
    };
    
    window.addEventListener('feedback-submitted', handleFeedbackSubmitted);
    
    const intervalId = setInterval(refreshRatings, 30000);
    
    return () => {
      window.removeEventListener('feedback-submitted', handleFeedbackSubmitted);
      clearInterval(intervalId);
    };
  }, [refreshRatings]);
  
  return (
    <div className="flex items-center justify-center mb-4">
      <p className="text-green-400 text-lg font-bold">
        {'⭐ '.repeat(Math.floor(averageRating))}
        {averageRating % 1 >= 0.5 ? '⭐' : ''}
        {' ' + averageRating.toFixed(1)}
      </p>
      <span className={`${darkMode ? 'text-white' : 'text-black'} ml-2`}>based on {count} reviews</span>
    </div>
  );
}