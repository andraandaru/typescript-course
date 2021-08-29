// export class User {
//   public name: string

//   constructor(name: string) {
//     this.name = name
//   }
// }

// alternative bikin class
export class User {
  constructor(public name: string, public age: number) {}

  setName(value: string): void {
    this.name = value
  }

  getName = (): string => {
    return this.name
  }
}

/*
public = bisa diakses di semua class / dari luar class
protected = hanya bisa diakses dari class tersebut dan kelas turunannya
private = hanya bisa diakses dari class itu sendiri
*/

// Inheritance

class Admin extends User {
  read: boolean = true
  write: boolean = true
  phone: string
  private _email: string = ""
  static getRoleName: string = "Admin"

  constructor(phone: string, name: string, age: number) {
    super(name, age)
    this.phone = phone
  }

  static getNameRole() {
    return `Hey!`
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    }
  }

  set email(value: string) {
    if (value.length < 3) {
      this._email = "Email salah"
    } else {
      this._email = value
    }
  }

  get email(): string {
    return this._email
  }
}

let admin = Admin.getRoleName
console.log(admin)

let adminFunc = Admin.getNameRole()
console.log(adminFunc)
