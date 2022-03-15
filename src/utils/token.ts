import jwt from "jsonwebtoken";

export interface IPayload {
  sub: string;
}

export const generateAccessToken = (payload: IPayload) => {
  return jwt.sign(payload, process.env.JWT_SECRET || "", { expiresIn: "10m" });
};

export const generateRefreshToken = (payload: IPayload) => {
  return jwt.sign(payload, process.env.REFRESH_SECRET || "", {
    expiresIn: "7d",
  });
};
