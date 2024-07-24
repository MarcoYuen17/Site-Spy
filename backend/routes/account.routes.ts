import express, { Request, Response } from "express";
import { createAccount, login } from "../services/account.service";
import { createProfile } from "../services/profile.service";

const router = express.Router();

interface ISignupRequest {
  username: string;
  password: string;
  name: string;
  phoneNum: string;
}

router.post('/signup', async (req: Request<unknown, unknown, ISignupRequest, unknown>, res: Response) => {
  try {
    const {username, password, name, phoneNum} = req.body;
    await Promise.all([createAccount(username, password), createProfile(username, name, phoneNum)]);

    res.status(200).send('Account and user successfully created');
  } catch (e) {
    if (e.message === 'DUPLICATE_USERNAME') {
      res.status(400).send('DUPLICATE_USERNAME');
    } else {
      res.status(500).send('SERVER_ERROR');
    }
  }
});

interface ILoginRequest {
  username: string;
  password: string;
}

router.post('/login', async (req: Request<unknown, unknown, ILoginRequest, unknown>, res: Response) => {
  try {
    const {username, password} = req.body;
    await login(username, password);

    res.status(200).send('Login successful');
  } catch (e) {
    if (e.message === 'INVALID_CREDENTIALS') {
      res.status(400).send('INVALID_CREDENTIALS');
    } else {
      res.status(500).send('SERVER_ERROR')
    }
  }
});

export default router;