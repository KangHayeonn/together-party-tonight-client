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
      return res.data;
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
      return res.data;
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

  async v1GetMyReview(page: number, size: number, sort: string) {
    try {
      const res = await instanceWithToken.get(`${prefix}/members/myReviews`, {
        params: {
          page,
          size,
          sort,
        },
      });
      return res.data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1GetMyMeeting(
    filter: string,
    memberId: string,
    page: number,
    size: number,
  ) {
    try {
      const res = await instanceWithToken.get(
        `${prefix}/clubs/myOwned/${memberId}`,
        {
          params: {
            filter,
            page,
            size,
          },
        },
      );
      return res.data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1GetApplyMeeting(filter: string, page: number, size: number) {
    try {
      const res = await instanceWithToken.get(`${prefix}/clubs/myApplied`, {
        params: {
          filter,
          page,
          size,
        },
      });
      return res.data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1AddReview(formData: FormData) {
    try {
      const res = await instanceWithToken.post(`${prefix}/reviews`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1UpdateReview(formData: FormData) {
    try {
      const res = await instanceWithToken.put(`${prefix}/reviews`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1DeleteReview(reviewId: number) {
    try {
      const res = await instanceWithToken.delete(
        `${prefix}/reviews/${reviewId}`,
      );
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1GetReviewDetail(reviewId: number) {
    try {
      const res = await instanceWithToken.get(`${prefix}/reviews/${reviewId}`);
      return res.data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1GetApplicationList(clubId: number) {
    try {
      const res = await instanceWithToken.get(
        `${prefix}/clubs/applicationList`,
        { params: { clubId } },
      );
      return res.data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1ApproveMember(clubSignupId: number, approve: boolean) {
    try {
      const res = await instanceWithToken.post(`${prefix}/clubs/approve`, {
        approve,
        clubSignupId,
      });
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1KickoutMember(clubSignupId: number) {
    try {
      const res = await instanceWithToken.post(`${prefix}/clubs/kickout`, {
        clubSignupId,
      });
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async urlToFileObject(url: string, filename: string) {
    const response = await fetch(url);
    const blob = await response.blob();

    const fileObject = new File([blob], filename, {
      lastModified: new Date().getTime(),
      type: blob.type,
    });

    return fileObject;
  },

  async v1RequestBilling(clubId: number, price: number) {
    try {
      const res = await instanceWithToken.post(`${prefix}/billing`, {
        clubId,
        price,
      });
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1RequestBillingAccount(clubId: number) {
    try {
      const res = await instanceWithToken.post(`${prefix}/billing/club`, {
        clubId,
      });
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async v1RequestBillingPayment(billingHistoryId: number) {
    try {
      const res = await instanceWithToken.post(`${prefix}/billing/payment`, {
        billingHistoryId,
      });
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default MyPage;
