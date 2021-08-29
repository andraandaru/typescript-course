// tipe data pada return function

const getName = (): string => {
  return "Hello, my name is Andra"
  // return 123 => error
}

console.log(getName())

const getAgg = (): number => {
  return 123
}

const printName = (): void => {
  console.log("Print Name")
  // return "ASD" => Error
}

// printName()

// argument types

const multiply = (num1: number, num2: number): number => {
  return num1 * num2
}

const result = multiply(2, 5)
console.log(result)

// function as type
// type Age = number
// let age: Age = 123

type Tambah = (num1: number, num2: number) => number

const Add: Tambah = (num1: number, num2: number): number => {
  return num1 + num2
}

// default param
const fullName = (first: string, last: string = "Andaru"): string => {
  return first + " " + last
}

console.log(fullName("Andra"))

// optional parameter
const getUmur = (val1: string, val2?: string): string => {
  return val1 + " " + val2
}

console.log(getUmur("A"))
