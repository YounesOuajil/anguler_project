// user.model.ts

export class Etudiant {
    id: number;
    username: string;
    password: string;
    role: string;
    name: string;
    lastname: string;
    phone: string;
    isPresent: boolean;
    group: string; 
    fillier: string; 
  
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
      fillier: string
    ) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.role = role;
      this.name = name;
      this.lastname = lastname;
      this.phone = phone;
      this.isPresent = isPresent;
      this.group = group;
      this.fillier = fillier;
    }
  }
  