const bool: boolean = true
const num: number = 12
const str: string = "Hi"
const n: null = null
const u: undefined = undefined

const greetUser = (): void => {
  alert("smth")
}

const list: Array<number> = [1, 2, 3, 4]
const x: [string, number] = ["a", 1,]
const y: Array<any> = ["a", 1,]

enum D {
  i,
  h,
  q,
  w,
  e
}

const create = (obj: object | null): void => {
}

create({obj: 1})

type UserID = number

const id: UserID = 1;

const enum link {
  youtube = "https://youtube.come",
  facebook = "https://facebook.come",
  instagram = "https://instagram.come",
}

const arr = [link.facebook, link.instagram]

const createPassword = (name: string, age: number | string) => `${name}${age}`

createPassword("ihor", 12)
createPassword("ihor", "12")

const createPassword2 = (name: string = "Max", age: number | string = 12) => `${name}${age}`
createPassword2()


const createPassword3 = (name: string, age?: number) => `${name}${age}`
createPassword3("Jeck")


const createPassword4 = (name: string, ...skills: Array<string>) => `${name}${skills}`
createPassword4("Jeck")

const createPassword5 = (name: string, age: number | string): string => `${name}${age}`
const sum = (first: number, second: number): number => first + second
const createObj = (): object => ({})


type Person = {
  name: string,
  age: number,
  nickName?: string,
  getPass?: () => string
}

const user: Person = {
  name: "Ihor",
  age: 18,
  nickName: "Menma"
}

const admin: Person = {
  name: "Ihor",
  age: 18,
  getPass(){
    return`${this.name}${this.age}`
  }
}

const user2: { name: string, age: number } = {
  name: "Ihor",
  age: 18
}



class Admin {

  constructor() {
  }
}
















