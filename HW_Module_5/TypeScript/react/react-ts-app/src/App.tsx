import './App.css'
import React from "react";

interface ITitle {
  title: string
}

type Position = "id" | "value" | "title"

// const Test = ({title}: ITitle) => <h1>{title}</h1>
const Test: React.FC<ITitle> = ({title}) => <h1>{title}</h1>

const App: React.FC = () => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    console.log(e.clientY, e.clientX)
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => { //for input
    console.log(e.currentTarget)
  }

  const handleForm = (e: React.FormEvent<HTMLFormElement>): void => { //for button submit in form
    console.log(e.currentTarget)
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => { //for Change
    console.log(e.currentTarget)
  }

  const style: React.CSSProperties = {display: "block", position: "absolute"}

  const POSITION: Record<Position, string>[] = [
    {
      id: "",
      value: "",
      title: "",
    },
    {
      id: "",
      value: "",
      title: "",
    },
    {
      id: "",
      value: "",
      title: "",
    }
  ]

  return (
    <>
      <Test title={"1"}/>
      <button onClick={handleClick}></button>
      <a href="" onClick={handleClick}></a>
    </>
  )
}
export default App
