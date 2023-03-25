import {Component} from "react";
import cn from "classnames"
import s from './Button.module.scss'


class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onClick, text, backgroundColor, className} = this.props
        return (
            <>
                <button className={cn(s.button, s[backgroundColor], s[className])} onClick={onClick} >
                    {text}
                </button>
            </>
        )
    }

}

export default Button