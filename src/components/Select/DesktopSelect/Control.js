import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';

class Control extends React.Component {
    render() {
        const b = block('select');
        const {defaultValue, onFocus, onInputChange, inputRef, isFocused, direction} = this.props;

        const isHiddenValue = isFocused && Boolean(defaultValue);
        const isLabelOnTop = isFocused || Boolean(defaultValue);

        return (
            <div className={b('control', {direction: direction})}>
                <input
                    type="text"
                    className={b('input')}
                    onFocus={onFocus}
                    ref={inputRef}
                    onChange={onInputChange}/>
                {defaultValue && <div className={b('value', {hidden: isHiddenValue})}>{defaultValue}</div>}
                <div className={b('label',{onTop: isLabelOnTop})}>Выберите страну</div>
            </div>
        )
    }
}

Control.propTypes = {
    defaultValue: PropTypes.string,
    onFocus: PropTypes.func,
    onInputChange: PropTypes.func,
    inputRef: PropTypes.func,
    isFocused: PropTypes.bool
}

export default Control;