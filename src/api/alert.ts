import { instanceWithToken } from "@/api";
import { getAlertListType } from "@/types/alert";
const prefix = "/api/alert";

const Alert = {
  // 알림 리스트 요청
  async v1GetAlertList(data: getAlertListType) {
    try {
      const url = `${prefix}`;
      const result = await instanceWithToken.get(url, {
        params: data,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 알림 삭제 요청
  async v1DeleteAlert(id: number) {
    try {
      const url = `${prefix}`;
      const result = await instanceWithToken.delete(url, {
        data: {
          alertId: id,
        },
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 알림 읽음 요청
  async v1ReadAlert(alertId: number) {
    try {
      const url = `${prefix}/read`;
      const result = await instanceWithToken.get(url, { params: { alertId } });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 안 읽은 알림 수 요청
  async v1GetUnReadCount() {
    try {
      const url = `${prefix}/unreadCount`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Alert;
