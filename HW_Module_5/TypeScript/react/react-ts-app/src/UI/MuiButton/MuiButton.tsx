import {FC} from "react"
import s from "./MuiButton.module.scss"
import {Stack, Button} from "@mui/material";

const MuiButton: FC = () => {

  return (

      <Stack spacing={5} direction={"row"} justifyContent={"center"}>
        <Button variant={"contained"} color={"primary"}>Text</Button>
        <Button className={s.textBtn} variant={"contained"}>Contained</Button>
        <Button variant={"outlined"}>Outlined</Button>
      </Stack>
  )
}

export default MuiButton