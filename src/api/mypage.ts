import { instanceWithToken } from ".";
const prefix = "/api";

const MyPage = {
  async v1GetUser(userId: string) {
    try {
      const res = await instanceWithToken.get(`${prefix}/members/${userId}`);
      return res.data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1UpdateNickname(userId: string, nickname: string) {
    try {
      const res = await instanceWithToken.put(
        `${prefix}/members/nickname/${userId}`,
        { nickname },
      );
      return res.data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1UpdateDesc(userId: string, description: string) {
    try {
      const res = await instanceWithToken.put(
        `${prefix}/members/memberDetail/${userId}`,
        { details: description },
      );
      return res.data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1UpdatePassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ) {
    try {
      const res = await instanceWithToken.put(
        `${prefix}/members/password/${userId}`,
        { currentPassword, newPassword },
      );
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1DeleteAccount(userId: string) {
    try {
      const res = await instanceWithToken.delete(`${prefix}/members/${userId}`);
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1UpdateProfile(userId: string, data: FormData) {
    try {
      const url = `${prefix}/members/profileImages/${userId}`;
      const res = await instanceWithToken.put(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1GetReceivedReivew(
    userId: string,
    page: number,
    size: number,
    sort: string,
  ) {
    try {
      const res = await instanceWithToken.get(
        `${prefix}/members/reviews/${userId}`,
        {
          params: {
            page,
            size,
            sort,
          },
        },
      );
      return res.data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default MyPage;
