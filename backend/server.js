import 'dotenv/config'
import express from 'express';

import rootRoutes from './routes/rootRoutes.js';

const PORT = process.env.PORT;

export const app = express();
app.use('/', rootRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});