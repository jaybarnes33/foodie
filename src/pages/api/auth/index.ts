import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongo";
import User from "@/models/User";
import { setTokenCookie } from "@/utils/auth-cookie";
import { generateAccessToken, generateRefreshToken } from "@/utils/token";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { email, password, remember } = req.body;
      await dbConnect();

      const user = await User.findOne({
        email,
      });

      if (!user) {
        return res.status(400).json({
          message: `User with email ${email} does not exist`,
          key: "email",
        });
      } else if (!(await user.matchPassword(password))) {
        return res
          .status(400)
          .json({ message: "Password is incorrect", key: "password" });
      } else {
        const accessToken = generateAccessToken({ sub: user._id });
        const refreshToken = generateRefreshToken({ sub: user._id });

        if (remember) {
          setTokenCookie(res, refreshToken);
          res.json({ accessToken, refreshToken });
        } else {
          res.json({ accessToken, refreshToken });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Something went wrong");
    }
  }
};

export default handler;
