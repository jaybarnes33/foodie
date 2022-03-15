import User from "@/models/User";
import { normalizeGoogleData } from "@/utils/dataNormalizer";
import { generateAccessToken, generateRefreshToken } from "@/utils/token";
import { NextApiRequest, NextApiResponse } from "next";

type authProvider = "GOOGLE" | "FACEBOOK" | string;
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const provider: authProvider = String(req.query.provider).toUpperCase();
  if (!provider) {
    return res.status(400).json({ message: "Authentication Provider not set" });
  }
  let userData: Record<string, any> | undefined;
  if (provider === "GOOGLE") {
    userData = await normalizeGoogleData(req.body);
  }

  const dbUser = await User.findOne({ email: userData?.email }).select(
    "+authProvider"
  );
  let accessToken: string, refreshToken: string;
  console.log(userData);
  if (!dbUser) {
    const newUser = new User({
      ...userData,
    });

    console.log(newUser);
    const savedUser = await newUser.save();
    accessToken = generateAccessToken({ sub: savedUser._id });
    refreshToken = generateRefreshToken({ sub: savedUser._id });
    return res.status(201).json({ accessToken, refreshToken });
  }
  if (dbUser.authProvider !== userData?.authProvider) {
    return res.status(409).json({
      message: "User with this email is associated with a different provider",
    });
  }

  accessToken = generateAccessToken({ sub: dbUser._id });
  refreshToken = generateRefreshToken({ sub: dbUser._id });
  return res.status(200).json({ accessToken, refreshToken });
};

export default handler;
