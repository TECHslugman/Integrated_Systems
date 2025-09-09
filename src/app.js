import express from 'express';
import routes from './routes/routesuser.js';

const app = express();
app.use(express.json());

// Routes
app.use('/api/user', routes);


export default app;
