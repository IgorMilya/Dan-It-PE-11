import PhoneInput from "react-phone-input-2";
import cn from "classnames";
import s from "./MyPhoneInput.module.scss";

export const MyPhoneInput = ({errors, touched, handleChange, handleBlur, values}) => {
  const numbErr = errors.phoneNumber
  const numbTou = touched.phoneNumber

  return (
    <>
      <PhoneInput
        inputClass={cn(s.phoneInput, numbTou && numbErr && s.error)}
        inputStyle={{borderBottom: "1px solid #a0a4a8"}}
        buttonClass={s.dropdown}
        country={'ua'}
        specialLabel={''}
        enableSearch={true}
        copyNumbersOnly={false}
        enableAreaCodeStretch={true}
        inputProps={{
          name: "phoneNumber",
          onChange: handleChange,
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

