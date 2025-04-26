import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  stars:{
    type:Number,
    required:true,
    min: 1,
    max: 5,
  },
  comments: {
    type: String,
    required: true, 
  },
  ipAddress: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);
export default Feedback;