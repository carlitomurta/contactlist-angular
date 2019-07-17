interface Name {
  title: string;
  first: string;
  last: string;
}
interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
}
interface Credential {
  username: string;
  password: string;
}
interface DateOfBirth {
  date: Date;
  age: number;
}
interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
export interface Contact {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Credential;
  dob: DateOfBirth;
  phone: string;
  cell: string;
  picture: Picture;
}
