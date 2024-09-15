import mongoose from 'mongoose';

// MongoDB connection string (replace with your actual password and database name)
const mongoURI = 'mongodb+srv://nafizchawdhury56:makeduaforhung69420@cluster0.03he8.mongodb.net/sample_mflix?retryWrites=true&w=majority';

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
        return mongoose.connection.db; // Return the connected db
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    }
};