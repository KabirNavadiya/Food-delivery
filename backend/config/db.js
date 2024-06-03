import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kabirnavadia27:kabir2607@cluster0.2r4nndm.mongodb.net/food-del')
        .then(() => console.log("DB Connected"));
}