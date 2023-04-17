import cn from "classnames"
import s from './Button.module.scss'


const Button = (props) => {
  const {onClick, text, backgroundColor, className} = props
  return (
    <>
      <button className={cn(s.button, s[backgroundColor], s[className])} onClick={onClick}>
        {text}
      </button>
    </>
  )
}

export default Button