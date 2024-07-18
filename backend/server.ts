import 'dotenv/config'
import express from 'express';

import rootRoutes from './routes/rootRoutes.js';
import pageRoutes from './routes/page.routes.js';

const PORT: string = process.env.PORT || '8001';

export const app = express();
app.use('/', rootRoutes);
app.use('/page', pageRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`);
});