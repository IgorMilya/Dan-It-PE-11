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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

const data: Developers = {name: "dsa", active: false, age: 213, email: "", login: " "}

devArray.push(data)

type F1 = (num: number) => string
const f1: F1 = (num) => {
  return String(num)
}
f1(1)


const f2 = (num: number): string => {
  return String(num)
}

const f3 = (cb: () => string): string => {
  return String(num)
}

const createPoint = (x = 0, y = 0): [number, number] => {
  return [x, y]
}
createPoint(10)


const f4 = (...nums: number[]): string => {
  return nums.join("-")
}

interface IPrintable {
  label: string
}

const printReport = (obj: IPrintable): void => {
  console.log(obj.label)
}

const drink = {
  label: 'pepsi',
  price: 90
}

const phone = {
  label: "IPhone",
  price: 1000
}

printReport(drink)
printReport(phone)
printReport({label: "dfas"})

interface ICard {
  suit: string,
  numb: number
}

const pickCard = (x: number | ICard[]): number | ICard => {
  return Number(x)
}
pickCard([{suit: "", numb: 12}])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////generic

type TypeFactory<X> = X
type MyType = TypeFactory<string>

interface IValueContainer<Value> {
  value: Value
}

type StringContainer = IValueContainer<string>

const xy: StringContainer = {
  value: ""
}

const printAnything = <T>(arr: T[]): void => {
  console.log(arr)
}
printAnything<number>([12])

interface Lengthwise {
  length: number
}

const printLen = <T extends Lengthwise>(arg: T): number => {
  return arg.length
}
printLen([""])


interface ISumB {
  (a: number, b: string): string
}

type SumB = (a: number, b: string) => string

const sumb: ISumB = (a, b) => {
  return b
}

type UniqueId = string

interface IUser {
  name: UniqueId
}


type State = [number, (n: number) => void]
const s: State = [123, n => {
}]

interface IUserM {
  name: string,
  age?: number
}

type Nullable<T> = T | null | undefined
const userM: Nullable<IUserM> = null

/////////////////////////////////
interface IUserData {
  name: string,
  age: number
}

const user0: IUserData = <IUserData>{}

// const element = <HTMLInputElement>document.querySelector("#root")
// const {value} = element

type ErrorMessage = string | string[] | Error
const apiError: ErrorMessage = JSON.parse(JSON.stringify(["a", "s"]))
const formattedMessage = (<string[]>apiError).map(e => e.toUpperCase())


const test = {
  name: "User",
  age: 20
} as const

type U = typeof test

////////////////////////////////////////////////////////////////////////////////////////////////////////////////Generic

const identity = <T>(arg: T): T => {
  return arg
}

identity("")
identity(1)

//1
interface IUserI {
  name: string,
  age: number
}

interface IMessage {
  id: number,
  text: string
}

// interface UserState {
//   loading: boolean,
//   error: Error | null,
//   data: IUserI
// }

// interface MessageState {
//   loading: boolean,
//   error: Error | null,
//   data: IMessage
// }

interface IState<T> {
  loading: boolean,
  error: Error | null,
  data: T
}

type UserState = IState<IUserI>
type MessageState = IState<IMessage>

const messageState: MessageState = {
  loading: false,
  error: null,
  data: {id: 1, text: ""}
}

const userState: UserState = {
  loading: false,
  error: null,
  data: {age: 12, name: ""}
}
//2
const getRandomElement = <T>(items: T[]): T => {
  const randomIndex = Math.floor(Math.random() * items.length)

  return items[randomIndex]
}

const el1 = getRandomElement([1, 2, 9, 6])
const el2 = getRandomElement(["1", "2", "4"])
//3

const merge = <U, S>(ob1: U, ob2: S): U & S => {
  return {...ob1, ...ob2}
}

const r1 = merge({b: 2}, {a: 1})
const r2 = merge({b: 2, c: ""}, {a: 1})
//4

const fakeRequest = async () => {
  return 2
}

const b: Promise<number> = fakeRequest()

type Obj = Record<string, { title: string }>

const i: Obj = {
  lol: {title: ""}
}
//5

const getValue = <T extends object, U extends keyof T>(obj: T, props: U) => {
  return obj[props]
}
const p1 = getValue({name: ""}, "name")
//6

const getKey = <T extends object, U extends keyof T>(obj: T, value: T[U]): U | null => {
  const key = (Object.keys(obj) as U[]).find(k => obj[k] === value)

  return key || null
}
const key = getKey({name: "Ihor"}, "Ihor")
//7

// React.FC
type FunctionalComponent<T extends object = object> = (props: T & { children: any }) => any;

const component: FunctionalComponent<{ name: string, age: number }> = ({age, name, children}) => {
}
// const component: FunctionalComponent = ({children}) => {}

//1
interface IUser123 {
  name: string,
  age: number
}

type UserKeys = keyof IUser123
// type UserKeys = "name" | "age"
let props: UserKeys
props = "age"
//2

const message2 = {
  id: 1,
  text: "JavaScript"
}

type MessageType = typeof message2
type MessageKeys = keyof MessageType

const userMessage: MessageType = {
  id: 123,
  text: "da"
}
//3

const formData = {
  firstName: "John",
  lastName: "Doe",
  age: 30
}

// interface IValidationResult {
//   firstName: boolean;
//   lastName: boolean;
//   age: boolean;
// }

// type IValidationResult = {
//   [key in keyof typeof formData]: boolean
// }

declare function validateD<T>(data: T): { [key in keyof T]: boolean }

const rq = validateD(formData)
///////////////////////////////
//1
// T === string . In TypeScript should be like that:
type Test<T> = T extends string ? true : false
type R = Test<"">

//2

interface IUser21 {
  id: string;
}

interface IMessage21 {
  id: number;
}

type ConditionId<T> = T extends { id: string } ? string : number

const getId21 = <T extends { id: any }>(obj: T): ConditionId<T> => {
  return obj.id
}

const r21 = getId21({} as IUser21)
const r22 = getId21({} as IMessage21)
//3

type NotFalsy<T = null> = T extends (null | undefined | false | 0) ? never : T
let k: NotFalsy
//4

type Filter<T, U> = T extends U ? never : T
type RT = Filter<"a" | "b" | "c", "b">
type RE = Exclude<"a" | "b" | "c", "b">
//5

type TryInfer<T extends object> = T extends infer RS ? RS : never;
type RS = TryInfer<{ a: 1, b: 2 }>
//6















