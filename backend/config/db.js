import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect(' enter Your mongo Db connection key here ')
        .then(() => console.log("DB Connected"));
}
