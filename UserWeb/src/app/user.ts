export interface User {
  uid: string;
  username: string;
  firstName: string;
  lastName: string;
  fullName: string;
  address: string;
  phone: string |null;
  email: string | null;
  lastLogin: Date | null;
  lastLogout: Date | null;
  isActive: boolean;
}
