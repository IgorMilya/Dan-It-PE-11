import React from "react";
import useMetaData from "../../hooks/useMetaData";
import {addCartProduct, closeFirstModal, closeSecondModal, removeAllCartProduct} from "../../redux/actions";
import Modal from "../../UI/modal";
import Button from "../../UI/button";

const ModalWrapper = () => {
  const {cardData, isFirstOpened, isSecondOpened, dispatch} = useMetaData()

  const firstClosedModal = () => dispatch(closeFirstModal());
  const secondClosedModal = () => dispatch(closeSecondModal());

  const addProductCart = (item) => {
    dispatch(addCartProduct({...item, isChecked: true}))
    firstClosedModal()
  }

  const removeAllProductsCart = (id) => {
    dispatch(removeAllCartProduct(id))
    secondClosedModal()
  }

  const actionsAddToCart = (<>
    <Button
      backgroundColor={"darkred"}
      text={"Ok"}
      onClick={() => addProductCart(cardData)}
      className={'modal-button'}
    />
    <Button
      backgroundColor={"darkred"}
      text={"Cancel"}
      onClick={() => firstClosedModal()}
      className={'modal-button'}
    />
  </>)

  const actionsRemoveFromCart = (<>
    <Button
      backgroundColor={"darkblue"}
      text={"Ok"}
      onClick={() => removeAllProductsCart(cardData.id)}
      className={'modal-button'}
    />
    <Button
      backgroundColor={"darkblue"}
      text={"Cancel"}
      onClick={() => secondClosedModal()}
      className={'modal-button'}
    />
  </>)

  return (
    <>
      <Modal
        isOpened={isFirstOpened}
        backgroundModal={'firstModal'}
        backgroundHeader={'firstHeader'}
        header={'Do u wanna add this product?'}
        subText={'Are you sure you wanna add it?'}
        closeButton={() => firstClosedModal()}
        actions={actionsAddToCart}
      />

      <Modal
        isOpened={isSecondOpened}
        backgroundModal={'secondModal'}
        backgroundHeader={'secondHeader'}
        header={'Do u wanna delete this product?'}
        subText={'Are you sure you wanna delete it?'}
        closeButton={() => secondClosedModal()}
        actions={actionsRemoveFromCart}
      />
    </>
  )
}

export default ModalWrapper