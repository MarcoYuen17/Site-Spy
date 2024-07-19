import { Schema, model } from "mongoose";

interface IProfile {
  username: string;
  name: string;
  phoneNum: string;
}

const profileSchema = new Schema<IProfile>({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phoneNum: { type: String, required: true }
});

const Profile = model('Profile', profileSchema);
export default Profile;