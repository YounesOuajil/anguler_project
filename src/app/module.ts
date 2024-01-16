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
  numberOfAbsences: number;
  hour: string;
  className: string;

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
    numberOfAbsences: number,
    hour: string,
    className: string
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
    this.hour = hour;
    this.className = className;
  }
}





export class Professor {
  username: string;
  password: string;
  role: string;
  name: string;
  lastname: string;
  phone: string;
  group: string;
  fillier: string;

  constructor(username: string, password: string, role: string, name: string, lastname: string, phone: string, group: string, fillier: string) {
    this.username = username;
    this.password = password;
    this.role = role;
    this.name = name;
    this.lastname = lastname;
    this.phone = phone;
    this.group = group;
    this.fillier = fillier;
  }
}


// absence.model.ts

// absence.model.ts
export class Absence {
  id: number;
  name: string;
  lastname: string;
  phone: string;
  group: string;
  fillier: string;
  hour: string;
  className: string;
  numberOfAbsences: number;

  constructor(
    id: number,
    name: string,
    lastname: string,
    phone: string,
    group: string,
    fillier: string,
    hour: string,
    className: string,
    numberOfAbsences: number
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.phone = phone;
    this.group = group;
    this.fillier = fillier;
    this.hour = hour;
    this.className = className;
    this.numberOfAbsences = numberOfAbsences;
  }
}

