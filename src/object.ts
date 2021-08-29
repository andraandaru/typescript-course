// Object

type User = {
  name: string
  age: number
}

let user: User = {
  name: "Andra",
  age: 21,
}

// object menjadi immutable

user = {
  // alamat: "Bandung" => Error
  name: "Bandung",
  age: 22,
}
