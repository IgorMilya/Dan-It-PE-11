import './App.css'
import React from "react";
import MuiTypography from "./components/MUI/MuiTypography";
import MuiButton from "./UI/MuiButton";
import {Box, Slider, TablePagination} from "@mui/material";

// interface ITitle {
//   title: string
// }

// typization of children: React.ReactNode
// render: React.ReactElement
// React.ComponentType - we use when we pass a component as props

// type Position = "id" | "value" | "title"
//
// // const Test = ({title}: ITitle) => <h1>{title}</h1>
// const Test: React.FC<ITitle> = ({title}) => <h1>{title}</h1>
// React.HTMLProps<HTMLInputElement>

const App: React.FC = () => {
  // const [value, setValue] = useState(0) // don't need to type, cause we have default type
  // const [cart, setCart] = useState<number[]>([])
  // const [post, setPost] = useState<number | string | undefined>(undefined)
  // const [pocco, setPocco] = useState<{name: string}>({name:"Ihor"})
  //
  // const ref = useRef<HTMLElement>(null!) //readonly
  // const ref2 = useRef<HTMLElement | null>(null) //we can modify

  // const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
  //   console.log(e.clientY, e.clientX)
  // }
  // const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => { //for input
  //   console.log(e.currentTarget)
  // }
  // const handleForm = (e: React.FormEvent<HTMLFormElement>): void => { //for button submit in form
  //   console.log(e.currentTarget)
  // }
  // const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => { //for Change
  //   console.log(e.currentTarget)
  // }
  // const style: React.CSSProperties = {display: "block", position: "absolute"}
  // const POSITION: Record<Position, string>[] = [
  //   {
  //     id: "",
  //     value: "",
  //     title: "",
  //   },
  //   {
  //     id: "",
  //     value: "",
  //     title: "",
  //   },
  //   {
  //     id: "",
  //     value: "",
  //     title: "",
  //   }
  // ]

  return (
    <>
      <MuiTypography/>
      <MuiButton/>
      <Box/>
      <TablePagination
        count={2000}
        rowsPerPage={10}
        page={1}
        component="div"
        onPageChange={() => {}}
      />
      {/*<Test title={"1"}/>*/}
      {/*<button onClick={handleClick}></button>*/}
      {/*<a href="" onClick={handleClick}></a>*/}
    </>
  )
}

export default App
