import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());

app.use('/posts' , postRoutes);

const CONNECTION_URL = 'mongodb+srv://hexadevelopers:teamhexa123@cluster0.j3zox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL , { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => app.listen(PORT , () => console.log(`Server running on PORT : ${PORT}`)))
    .catch((error) => console.log(error.message));
