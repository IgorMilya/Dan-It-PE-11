import Modal from "../../UI/modal";
import Button from "../../UI/button";
import {useContext} from "react";
import {ContextStore} from "../../context";

const ModalWrapper = () => {
  const {
    cardData, isFirstOpened, isSecondOpened, closeFirstModal, closeSecondModal, addCartProduct, minusNumber,
    removeAllCartProduct
  } = useContext(ContextStore)

  const addProductCart = (item) => {
    addCartProduct({...item, isChecked: true})
    closeFirstModal()
  }

  const removeAllProductsCart = (data) => {
    const {id, totalPrice} = data
    removeAllCartProduct(id)
    minusNumber(totalPrice)
    closeSecondModal()
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
      onClick={() => closeFirstModal()}
      className={'modal-button'}
    />
  </>)

  const actionsRemoveFromCart = (<>
    <Button
      backgroundColor={"darkblue"}
      text={"Ok"}
      onClick={() => removeAllProductsCart(cardData)}
      className={'modal-button'}
    />
    <Button
      backgroundColor={"darkblue"}
      text={"Cancel"}
      onClick={() => closeSecondModal()}
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
        closeButton={() => closeFirstModal()}
        actions={actionsAddToCart}
      />

      <Modal
        isOpened={isSecondOpened}
        backgroundModal={'secondModal'}
        backgroundHeader={'secondHeader'}
        header={'Do u wanna delete this product?'}
        subText={'Are you sure you wanna delete it?'}
        closeButton={() => closeSecondModal()}
        actions={actionsRemoveFromCart}
      />
    </>
  )
}

export default ModalWrapper