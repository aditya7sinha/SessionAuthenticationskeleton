import express from 'express'
import { PORT, NODE_ENV, MONGO_URI} from '../config.js'
import userRoutes from './routes/user.js';
import Mongoose from 'mongoose';

(async () => {
    try {
        await Mongoose.connect(MONGO_URI, {userNewUrlParser: true});
        console.log('MongoDB connected');
             
        const app = express()
        app.disable('x-powered-by')

        app.use(express.urlencoded({ extended:true}));
        app.use(express.json());

        const apiRouter = express.Router();
        app.use('/api',  apiRouter)
        apiRouter.use('/users', userRoutes)

        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    }
    catch (err) {
        console.log(err)
    }
})();
