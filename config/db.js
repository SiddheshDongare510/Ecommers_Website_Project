import mongoose from 'mongoose';
import colors from 'colors';
//dotenv.config();
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(`mongodb+srv://ecommersweb:SidDon5100@ecommersweb.bq4dw69.mongodb.net/?retryWrites=true&w=majority`);
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white);
    }
};

export default connectDB;