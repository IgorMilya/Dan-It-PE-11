import {Component} from "react";
import Button from "./UI/button";
import Modal from "./UI/modal";
import s from './App.module.scss';


class App extends Component {
    state = {
        isFistOpened: false,
        isSecondOpened: false,
    }

    setFirstState() {
        this.setState({isFistOpened: !this.state.isFistOpened})
    }

    setSecondState() {
        this.setState({isSecondOpened: !this.state.isSecondOpened})
    }

    modalActions(className, firstText, secondText, fn) {
        return (
            <>
                    <Button
                        backgroundColor={className}
                        text={firstText}
                        onClick={() => fn.bind(this)()}
                        className={'modal-button'}
                    />
                    <Button
                        backgroundColor={className}
                        text={secondText}
                        onClick={() => fn.bind(this)()}
                        className={'modal-button'}
                    />
            </>
        )
    }

    render() {
        const {isFistOpened, isSecondOpened} = this.state;

        return (
            <div className={s.wrapper}>
                <Button
                    backgroundColor="darkred"
                    text={'Open first modal'}
                    onClick={() => this.setFirstState()}
                />

                <Button
                    backgroundColor="blue"
                    text={'Open second modal'}
                    onClick={() => this.setSecondState()}
                />

                <Modal
                    isOpened={isFistOpened}
                    backgroundModal={'firstModal'}
                    backgroundHeader={'firstHeader'}
                    header={'Do u wanna delete this file?'}
                    text={'Once you delete file, it won`t be possible to undo this action.'}
                    subText={'Are you sure you wanna delete it?'}
                    closeButton={() => this.setFirstState()}
                    actions={this.modalActions("darkred", "Ok", "Cancel", this.setFirstState)}
                />

                <Modal
                    isOpened={isSecondOpened}
                    backgroundModal={'secondModal'}
                    backgroundHeader={'secondHeader'}
                    header={'Hello my dear friend!'}
                    text={'If you click on this button or outside of modal your computer will crash.'}
                    subText={'Are you sure you wanna tempt fate?'}
                    closeButton={() => this.setSecondState()}
                    actions={this.modalActions("darkblue", "YES", "YES", this.setSecondState)}
                />
            </div>
        )
    }

}

export default App;
