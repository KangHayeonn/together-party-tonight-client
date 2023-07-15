import { instance } from ".";

export const logout = async (userId: string) => {
  await instance.get(`/api/members/logout/${userId}`);
};
