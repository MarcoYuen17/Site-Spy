import express, { Request, Response } from 'express';
import { getHTMLBody } from '../services/page.service';
const router = express.Router();

router.get('/html', async (req: Request<unknown, string, unknown, {url: string}>, res: Response) => {
  try {
    const url: string = req.query.url;
    const rawHTML: string = await getHTMLBody(url);
    res.send(rawHTML);
  } catch (e) {
    const message: string = e.message as string || ''
    if (message.startsWith('Failed to parse URL')) {
      res.status(400).send('INVALID_URL');
    } else if (message === 'fetch failed') {
      res.status(400).send('DOMAIN_NOT_FOUND');
    } else {
      res.status(500).send('SERVER_ERROR');
    }
  }
});

export default router;