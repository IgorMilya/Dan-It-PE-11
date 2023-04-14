import React from "react";
import Modal from "../../UI/modal";
import Button from "../../UI/button";

const ModalWrapper = (props) => {
  const {isFirstOpened, setFirstIsOpened, isSecondOpened, setSecondIsOpened, removeAllProducts, cart, cardData, setCart, addProduct} = props
  const actionsAddToCart = (<>
    <Button
      backgroundColor={"darkred"}
      text={"Ok"}
      onClick={() => {
        addProduct(
          {
            item: cardData,
            setStateProduct: setCart,
            setOpened: setFirstIsOpened,
          })

      }}
      className={'modal-button'}
    />
    <Button
      backgroundColor={"darkred"}
      text={"Cancel"}
      onClick={() => setFirstIsOpened(false)}
      className={'modal-button'}
    />
  </>)

  const actionsRemoveFromCart = (<>
    <Button
      backgroundColor={"darkblue"}
      text={"Ok"}
      onClick={() =>
        removeAllProducts({
          data: cart,
          item: cardData,
          setStateProduct: setCart,
          setOpened: setSecondIsOpened,
        })}
      className={'modal-button'}
    />
    <Button
      backgroundColor={"darkblue"}
      text={"Cancel"}
      onClick={() => setSecondIsOpened(false)}
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
        closeButton={() => setFirstIsOpened(false)}
        actions={actionsAddToCart}
      />

      <Modal
        isOpened={isSecondOpened}
        backgroundModal={'secondModal'}
        backgroundHeader={'secondHeader'}
        header={'Do u wanna delete this product?'}
        subText={'Are you sure you wanna delete it?'}
        closeButton={() => setSecondIsOpened(false)}
        actions={actionsRemoveFromCart}/>
    </>
  )
}

export default ModalWrapper