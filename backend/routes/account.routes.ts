import express, { Request, Response } from "express";
import { createAccount } from "../services/account.service";
import { createProfile } from "../services/profile.service";

const router = express.Router();

interface ISignupRequest {
  username: string;
  password: string;
  name: string;
  phoneNum: string;
}

router.post('/signup', async (req: Request<unknown, unknown, ISignupRequest, unknown>, res: Response) => {
  console.log(req.body);
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

export default router;