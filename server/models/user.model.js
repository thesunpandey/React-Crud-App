import mongoose from 'mongoose'; // Import mongoose

// Define the User schema
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  lname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['Admin', 'User', 'Guest'], // Restricts the value to specific roles
    default: 'User', // Default role is User
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the User model
export default User;