export interface User {
  _id: {
    $oid: string;
  };
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  address: {
    city: string;
    street: string;
    building: string;
    floor: string;
    extrainfo: string;
  };
}
