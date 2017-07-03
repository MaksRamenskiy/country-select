import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';

class MobileSelect extends React.Component {
    render() {
        const {options, value, onChange, optionIdKey, optionNameKey, labelText} = this.props;
        const b = block('select-mobile');

        return (
            <div className={b}>

                <div className={b('label')}>
                    {value && <div className={b('value')}>{value[optionNameKey]}</div>}
                    <div className={b('placeholder', {onTop: Boolean(value[optionNameKey])})}>{labelText}</div>
                </div>

                <select
                    className={b('native-select')}
                    onChange={e => onChange(e.target.value) }>
                    {
                        options.map((option, index) => (
                            <option key={index} value={option[optionIdKey]}>
                                {option[optionNameKey]}
                            </option>
                        ))
                    }
                </select>
            </div>
        )
    }
}

MobileSelect.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func
}

export default MobileSelect;