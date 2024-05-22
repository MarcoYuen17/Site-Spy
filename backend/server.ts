import 'dotenv/config'
import express from 'express';

import rootRoutes from './routes/rootRoutes.js';

const PORT: string = process.env.PORT || '8001';

export const app = express();
app.use('/', rootRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`);
});