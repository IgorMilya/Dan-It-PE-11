import useMetaData from "../../hooks/useMetaData";
import {emptyCart} from "../../redux/reducers";
import {MyTextInput, MyPhoneInput} from "../../UI/input";
import {Form, Formik} from "formik";
import {initialValues, validationSchema} from "./purchaseForm.utils";
import {NumericFormat} from 'react-number-format';
import cn from "classnames";
import s from "./PurchaseForm.module.scss"
import 'react-phone-input-2/lib/bootstrap.css'

const PurchaseForm = () => {
  const {cart, dispatch} = useMetaData()

  const onSubmit = (user, {resetForm}) => {
    console.log({user, cart});
    dispatch(emptyCart())
    resetForm()
  };
  const formikProps = {
    initialValues,
    onSubmit,
    validationSchema
  }

  return (
    <>
      {!!cart.length &&
        <div className={s.formWrapper}>
          <h1 className={s.formTitle}>Purchase Form</h1>
          <Formik {...formikProps}>
            {formik =>
              <Form className={s.form}>
                <MyTextInput
                  type="text"
                  placeholder={"First Name"}
                  {...formik.getFieldProps("firstName")}
                />
                <MyTextInput
                  type="text"
                  placeholder={"Second Name"}
                  {...formik.getFieldProps("secondName")}
                />
                <label className={s.label}>
                  <NumericFormat
                    type="text"
                    className={cn(s.cartInput, formik.touched.age && formik.errors.age && s.error)}
                    placeholder={"Age"}
                    {...formik.getFieldProps("age")}
                  />
                  {formik.touched.age && formik.errors.age ? (
                    <p className={s.errorText}>{formik.errors.age}</p>
                  ) : null}
                </label>

                <label className={s.label}>
                  {/*Библиотека как в дз*/}
                  {/*<NumericFormat*/}
                  {/*  type="text"*/}
                  {/*  prefix="+38 "*/}
                  {/*  thousandsGroupStyle={"lakh"}*/}
                  {/*  thousandSeparator=" "*/}
                  {/*  allowLeadingZeros*/}
                  {/*  className={cn(s.cartInput, formik.touched.phoneNumber && formik.errors.phoneNumber && s.error)}*/}
                  {/*  placeholder={"Phone:063-23-23-123"}*/}
                  {/*  {...formik.getFieldProps("phoneNumber")}*/}
                  {/*/>*/}
                  {/*{formik.touched.phoneNumber && formik.errors.phoneNumber ? (*/}
                  {/*  <p className={s.errorText}>{formik.errors.phoneNumber}</p>*/}
                  {/*) : null}*/}

                  <MyPhoneInput {...formik}/>
                </label>

                <div className={s.address}>
                  <MyTextInput
                    type="text"
                    placeholder={"Country"}
                    {...formik.getFieldProps("address.country")}
                  />
                  <MyTextInput
                    type="text"
                    placeholder={"City"}
                    {...formik.getFieldProps("address.city")}
                  />
                </div>
                <button type={'submit'} className={s.checkout}>Checkout</button>
              </Form>}
          </Formik>
        </div>}
    </>
  )
}

export default PurchaseForm