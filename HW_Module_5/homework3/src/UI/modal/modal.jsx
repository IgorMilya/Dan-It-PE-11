import React from "react";
import s from "./Modal.module.scss"
import cn from "classnames";

const Modal = (props) => {
        const {header, closeButton, actions, isOpened, backgroundModal, backgroundHeader, subText} = props

        return (
            (isOpened &&
                <div className={s.modalWrapper}>
                    <div className={s.darkWindow} onClick={closeButton}/>
                    <div className={cn(s.modal, s[backgroundModal])}>
                        <div className={cn(s.header, s[backgroundHeader])}>
                            <h1 className={s.title}>{header}</h1>
                            <div className={s.cross} onClick={closeButton}></div>
                        </div>
                        <div className={s.textBox}>
                            <p className={cn(s.text, s.subtext)}>{subText}</p>
                            {actions}
                        </div>
                    </div>
                </div>
            )
        )
}

export default Modal