export interface Store {
  _id: {
    $oid: string;
  };
  name: string;
  phone: string;
  open: string;
  close: string;
  email: string;
}
