import {Slider, Typography, useTheme} from "@mui/material";
import s from "./MuiTypography.module.scss"
import React, {FC} from "react"


const MuiTypography: FC = () => {
const theme = useTheme()
  console.log(theme)

  return (
    <>
      <Typography variant={"dashNumb"} color={"text.secondary"}>Heading h6</Typography>
      <Typography variant={"dashNumb"} color={theme.palette.primary.dark}>Heading h6</Typography>
      <Typography variant={"h1"}>Heading h1</Typography>
      <Typography variant={"h2"} fontWeight={600}>Heading h2</Typography>
      <Typography variant={"h3"}>Heading h3</Typography>
      <Typography variant={"subtitle1"}>Heading h4</Typography>
      <Typography variant={"subtitle2"}>Heading h5</Typography>
      <Typography variant={"caption"}>Caption</Typography>
      <h1 className={s.first}>Own text</h1>
      <Slider
        className={s.slider}
        defaultValue={30}
      />
    </>
  )
}

export default MuiTypography