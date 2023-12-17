import mongoose from 'mongoose';

declare module 'express-session' {
    interface sessionData {
        userId: mongoose.Types.ObjectId;
    }
}