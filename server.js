import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';



//routes import
import authRoutes from './routes/authRoutes.js';


//rest objct
const app = express();   //express() will include all the features

//configur env
dotenv.config()

//DB connection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
//routes
app.use('/api/v1/auth', authRoutes);


const port = process.env.PORT || 9000

app.listen(port,()=>{
    console.log(`Server running in ${process.env.DEV_MODE} mode on portk ${process.env.PORT}`.bgCyan.white)

} )





