// user.model.ts

export class Etudiant {
  id: number;
  username: string;
  password: string;
  role!: string;
  name: string;
  lastname: string;
  phone: string;
  isPresent: boolean;
  group: string;
  fillier: string;
  numberOfAbsences: number; // New field

  constructor(
    id: number,
    username: string,
    password: string,
    role: string,
    name: string,
    lastname: string,
    phone: string,
    isPresent: boolean,
    group: string,
    fillier: string,
    numberOfAbsences: number 
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.name = name;
    this.lastname = lastname;
    this.phone = phone;
    this.isPresent = isPresent;
    this.role = role;
    this.group = group;
    this.fillier = fillier;
    this.numberOfAbsences = numberOfAbsences; 
  }
}
