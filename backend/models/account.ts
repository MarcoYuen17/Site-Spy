import { Schema, model } from "mongoose";

interface IAccount {
  username: string;
  salt: string;
  password: string;
}

const accountSchema = new Schema<IAccount>({
  username: { type: String, required: true, unique: true },
  salt: { type: String, required: true },
  password: { type: String, required: true }
});

const Account = model<IAccount>('Account', accountSchema);
export default Account;