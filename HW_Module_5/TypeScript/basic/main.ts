const bool: boolean = true
const num: number = 12
const str: string = "Hi"
const n: null = null
const u: undefined = undefined

const greetUser = (): void => {
  // alert("smth")
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
  getPass() {
    return `${this.name}${this.age}`
  }
}


const user2: { name: string, age: number } = {
  name: "Ihor",
  age: 18
}

interface IUser3 {
  readonly name: string,
  age?: number,

  [propName: string]: any;
}

const ihor: IUser3 = {
  name: "sad",
  age: 18,
  nickName: "das",
  JustTest: 312
}

const getter = (data: any): any => data

const setter = <T>(data: T): T => data

setter<number>(12)


interface IUser4 {
  name: string;
}

const user4: Readonly<IUser4> = {
  name: "ihor"
}


interface IProps {
  a?: number,
  b?: string
}

const obj: IProps = {a: 1}

const obj2: Required<IProps> = {a: 1, b: ""}


interface IPageInfo {
  title: string,
  age: number,
  cart: Array<any>
}

type Page = "home" | "about" | "contact"

const x2: Record<Page, IPageInfo> = {
  about: {title: "das", age: 18, cart: [2, "a"]},
  home: {title: "okj", age: 20, cart: [1, "as"]},
  contact: {title: "lpo", age: 21, cart: [12, "das"]}
}

interface ITodo {
  title: string,
  description: string,
  completed: boolean
}

type TodoStr = "title" | "completed"
type TodoPreview = Pick<ITodo, TodoStr>

const todo: TodoPreview = {
  title: "Clean room",
  completed: false
}


interface ITod1 {
  title: string,
  description: string,
  completed: boolean
}

type TodoPrev = Omit<ITod1, "description">

const todo1: TodoPrev = {
  title: "Clean room",
  completed: false
}

interface IPass {
  name: string,
  age?: number
}

const array: Array<string | number> = []

const arr2: string[][] = []
arr2.push(["asd"])

type MyArr = string | number
const arr3: MyArr[] = []
arr3.push(1)

const arr4: [string, number, boolean] = ["", 2, true]
const arr5: [string, string, number][] = [["sar", "das", 1]]


const newObj = {a: 1, b: 2, c: "asd"}

interface IPerson {
  name: string
}

interface IPerson {
  age: string
}

interface IAccount {
  email: string,
  login: string,
  active: boolean
}

interface IDeveloper extends IPerson, IAccount {
  skill: string[],
  level?: string
}


type Person1 = {
  name: string
  age: number
}

type MyAccount = {
  email: string,
  login: string,
  active: boolean
}

type Developers = Person1 & MyAccount;


const devArray: Developers[] = [];

const data: Developers = {name:"dsa", active:false, age:213, email:"", login:" "}

devArray.push(data)









