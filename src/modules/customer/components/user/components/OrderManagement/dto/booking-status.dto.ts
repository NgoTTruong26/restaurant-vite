export enum EBookingStatus {
  PENDING,
  CONFIRMED,
  SUCCESS,
  CANCELLED,
}

export interface GetBookingStatusDTO {
  id: string;
  name: keyof typeof EBookingStatus;
  step: number;
}
