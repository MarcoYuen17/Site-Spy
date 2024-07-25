import bcrypt from 'bcrypt';
import { HydratedDocument } from 'mongoose';
import Account, { IAccount } from '../models/account';

const SALT_ROUNDS: number = 10;

export async function createAccount(username: string, password: string) {
  const hash: string = bcrypt.hashSync(password, SALT_ROUNDS);
  const newAccount: HydratedDocument<IAccount> = new Account({
    username: username,
    password: hash
  });

  try {
    await newAccount.save();
  } catch (e) {
    if (e.code === 11000) {
      throw new Error("DUPLICATE_USERNAME");
    }
    throw(e);
  }
}

export async function login(username: string, password: string) {
  const account: IAccount | null = await Account.findOne({ username: username });

  if (!account) {
    throw new Error('INVALID_CREDENTIALS');
  }

  if (bcrypt.compareSync(password, account.password)) {
    // TODO
  } else {
    throw new Error('INVALID_CREDENTIALS');
  }
}