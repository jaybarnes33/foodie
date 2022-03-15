import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
import { getTokenCookie, setTokenCookie } from "@/utils/auth-cookie";
import { generateAccessToken, generateRefreshToken } from "@/utils/token";

interface IData {
  accessToken: string;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IData | string>
) => {
  if (req.method === "POST") {
    try {
      // If refresh-token is sent from the front-end,
      // it means user signed in for one-time authentication
      const oneTime = Boolean(req.body.token);

      const refreshToken = req.body.token || getTokenCookie(req);
      if (!refreshToken) return res.status(401).end("Invalid Token");

      const payload: any = verify(
        refreshToken,
        process.env.REFRESH_SECRET || ""
      );
      if (!payload) return res.status(403).end("Invalid Token");

      const accessToken = generateAccessToken({ sub: payload.sub });
      !oneTime &&
        setTokenCookie(res, generateRefreshToken({ sub: payload.sub }));

      res.json({ accessToken });
    } catch (err) {
      res.status(500).end("Something went wrong");
    }
  }
};

export default handler;
