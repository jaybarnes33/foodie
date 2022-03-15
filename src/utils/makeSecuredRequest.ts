import axios, { AxiosRequestConfig } from "axios";
import jwtDecode from "jwt-decode";
import { getAccessToken, setAccessToken } from "../misc/token";

export const getNewToken = async () => {
  const expiredToken = sessionStorage.getItem("token");

  const { data } = await axios.post("/api/users/refresh-token", {
    token: expiredToken,
    headers: {
      withCredentials: true,
    },
  });

  setAccessToken(data.accessToken);

  return data.accessToken;
};

const makeSecuredRequest = async (
  url: string,
  method: AxiosRequestConfig["method"] = "GET",
  body?: Record<string, any>
) => {
  let token = getAccessToken();

  // Fetch new token if token is undefined
  if (!token) {
    token = await getNewToken();
  } else {
    const { exp }: any = jwtDecode(token);

    if (Date.now() >= exp * 1000) {
      token = await getNewToken();
    }
  }

  const { data } = await axios({
    method,
    data: body,
    url,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export default makeSecuredRequest;
