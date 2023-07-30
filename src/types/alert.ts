export interface getAlertListType {
  isAllOrNotRead: boolean;
  lastSeq: number;
  listCount: number;
}

export interface IAlertList {
  alertContent: string;
  alertCreateDateTime: Date;
  alertId: number;
  alertReadDateTime: Date;
  alertType: string;
  checkStatue: boolean;
}
