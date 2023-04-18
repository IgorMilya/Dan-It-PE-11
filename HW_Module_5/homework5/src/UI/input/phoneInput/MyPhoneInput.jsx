import PhoneInput from "react-phone-input-2";
import cn from "classnames";
import s from "./MyPhoneInput.module.scss";

export const MyPhoneInput = ({errors, touched, handleBlur, values, setFieldValue}) => {
  const numbErr = errors.phoneNumber
  const numbTou = touched.phoneNumber

  const handleChange = (value) => setFieldValue('phoneNumber', value);

  return (
    <>
      <PhoneInput
        inputClass={cn(s.phoneInput, numbTou && numbErr && s.error)}
        inputStyle={{borderBottom: "1px solid #a0a4a8"}}
        buttonClass={s.dropdown}
        country={'ua'}
        specialLabel={''}
        enableSearch={true}
        onChange={handleChange}
        inputProps={{
          name: "phoneNumber",
          onBlur: handleBlur
        }}
        value={values.phoneNumber}
      />

      {numbTou && numbErr ? (
        <p className={s.errorText}>{numbErr}</p>
      ) : null}
    </>
  )
}

