export enum ParcelStatus {
  REQUESTED = "Requested",
  APPROVED = "Approved",
  PICKED = "Picked",
  DISPATCHED = "Dispatched",
  IN_TRANSIT = "In-Transit",
  RESCHEDULED = "Rescheduled",
  DELIVERED = "Delivered",
  RETURNED = "Returned",
  CANCELLED = "Cancelled",
  BLOCKED = "Blocked",
  FLAGGED = "Flagged",
}

export enum ParcelType {
  DOCUMENT = "document",
  PACKAGE = "package",
  FRAGILE = "fragile",
  ELECTRONICS = "electronics",
}

export enum ShippingType {
  STANDARD = "standard",
  EXPRESS = "express",
  SAME_DAY = "same_day",
  OVERNIGHT = "overnight",
}

export interface IParcel {
  _id: string;
  trackingId: string;
  type: ParcelType;
  shippingType: ShippingType;
  weight: number;
  weightUnit: string;
  fee: number;
  couponCode: string;
  estimatedDelivery: Date | null;
  currentStatus: ParcelStatus;
  currentLocation: string | null;
  isPaid: boolean;
  sender: Sender;
  receiver: Receiver;
  pickupAddress: string;
  deliveryAddress: string;
  statusLog: StatusLog[];
  deliveredAt: Date | null;
  cancelledAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deliveryPersonnel?: string[];
  deliveryPersonnelId?: string; // just for form
  isBlocked?: boolean;
}

export interface Sender {
  _id?: string;
  name: string;
  email: string;
  phone: string;
}

export interface Receiver {
  _id?: string;
  name: string;
  email: string;
  phone: string;
}

export interface StatusLog {
  status: string;
  location: string;
  note: string;
  updatedBy: UpdatedBy;
  createdAt: string;
  updatedAt: string;
}

export interface UpdatedBy {
  name: string;
  role: string;
}

export interface IParcelParams {
  searchTerm?: string;
  page: number;
  limit: number;
  sort?: string;
  currentStatus?: string[];
}
