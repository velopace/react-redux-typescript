import axios from "axios";
import { User } from "types";

export const getUser = async (): Promise<User | undefined> => {
  const userJsonStr = undefined; // localStorage.getItem("user");
  let user: User | undefined;

  try {
    user = JSON.parse(userJsonStr ?? "");
  } catch (e) {
    const res = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/auth/user`
    );
    if (res && res.data && res.data.id) {
      user = res.data;
      localStorage.setItem("user", JSON.stringify(user));
    }
  }

  return user;
};
