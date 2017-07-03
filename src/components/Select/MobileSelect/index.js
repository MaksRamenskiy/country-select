import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';

class MobileSelect extends React.Component {
    render() {
        const {options, value, onChange} = this.props;
        const b = block('select-mobile');

        return (
            <div className={b}>

                <div className={b('label')}>
                    {value && <div className={b('value')}>{value.name}</div>}
                    <div className={b('placeholder', {onTop: Boolean(value.name)})}>Выберите страну</div>
                </div>

                <select
                    className={b('native-select')}
                    onChange={e => onChange(e.target.value) }>
                    {
                        options.map((country, index) => (
                            <option key={index} value={country.code}>
                                {country.name}
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