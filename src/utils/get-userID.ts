import { verify } from "jsonwebtoken";

const getUserID = (token: string) => {
  try {
    const payload: any = verify(token, process.env.JWT_SECRET || "");
    return payload.sub;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};
export default getUserID;
