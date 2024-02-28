export enum EBookingStatus {
  PENDING,
  CONFIRMED,
  SUCCESS,
}

export interface GetBookingStatusDTO {
  id: string;
  name: keyof typeof EBookingStatus;
  step: number;
}
