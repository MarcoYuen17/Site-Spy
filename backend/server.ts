import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';

import rootRoutes from './routes/rootRoutes.js';
import pageRoutes from './routes/page.routes.js';
import accountRoutes from './routes/account.routes.js';

const PORT: string = process.env.PORT || '8001';

export const app = express();
app.use(express.json());
app.use('/', rootRoutes);
app.use('/page', pageRoutes);
app.use('/account', accountRoutes);

app.listen(PORT, async () => {
    console.log(`Server listening on localhost:${PORT}`);

    await mongoose.connect(process.env.MONGODB_URI || '');
    console.log('Connected to MongoDB Atlas');
});