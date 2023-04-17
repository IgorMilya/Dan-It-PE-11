import {useField} from "formik";
import s from "./MyTextInput.module.scss"
import cn from "classnames";

const MyTextInput = ({...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={s.label}>
        <input className={cn(s.cartInput, meta.touched && meta.error && s.error)} {...field} {...props} />
        {meta.touched && meta.error ? (
          <p className={s.errorText}>{meta.error}</p>
        ) : null}
      </label>
    </>
  );
}

export default MyTextInput