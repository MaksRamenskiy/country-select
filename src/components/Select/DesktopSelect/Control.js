import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';

class Control extends React.Component {
    inputChangeHandler = (event) => {
        const inputValue = event.target.value;

        this.setState({
            name: inputValue
        });
        this.props.onInputChange(inputValue);
    }

    render() {
        const b = block('select');
        const {value, onFocus, inputRef, isFocused, hasValue = Boolean(value.code)} = this.props;

        const isHiddenValue = isFocused && hasValue;
        const isLabelOnTop = isFocused || hasValue

        return (
            <div className={b('control')}>
                <input
                    type="text"
                    className={b('input')}
                    onFocus={onFocus}
                    ref={inputRef}
                    onChange={this.inputChangeHandler}/>
                {value &&
                    <div className={b('value', {hidden: isHiddenValue})}>{value.name}</div>}
                <div className={b('label',{onTop: isLabelOnTop})}>Выберите страну</div>
            </div>
        )
    }
}

Control.PropTypes = {
    value: PropTypes.obj,
    onFocus: PropTypes.func,
    onInputChange: PropTypes.func,
    inputRef: PropTypes.func
}

export default Control;