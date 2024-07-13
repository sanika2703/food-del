import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/FoodRoute.js"
import userRouter from "./routes/userRoute.js"
import dotenv from "dotenv"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// Load environment variables from the .env file in the uploads folder
dotenv.config({ path: './uploads/.env' });




//app config
const app = express()
const port = process.env.PORT || 4003;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

const server = app.listen(port,()=>{
    console.log(`server Started on http://localhost:${port}`)
})

//mongodb+srv://sanikadeshmukh45:270311@cluster0.nikc1wj.mongodb.net/?
// Error handling for server errors
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please use a different port.`);
        process.exit(1);
    } else if (error.code === 'ECONNRESET') {
        console.error('Connection reset by peer');
    } else {
        console.error('Server error:', error);
    }
});

// Handle uncaught exceptions and rejections
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    if (error.code === 'ECONNRESET') {
        console.error('Connection reset by peer');
    }
});

process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated');
    });
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Process terminated');
    });
});