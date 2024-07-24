import { HydratedDocument } from "mongoose";
import Profile, { IProfile } from "../models/profile";

export async function createProfile(username: string, name: string, phoneNum: string) {
  const newProfile: HydratedDocument<IProfile> = new Profile({
    username: username,
    name: name,
    phoneNum: phoneNum
  });
  
  try {
    await newProfile.save();
  } catch (e) {
    if (e.code === 11000) {
      throw new Error("DUPLICATE_USERNAME");
    }
    throw(e);
  }
}