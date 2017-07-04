import React from 'react';
import PropTypes from 'prop-types';
import MobileSelect from './MobileSelect/';
import DesktopSelect from './DesktopSelect/';
import block from 'bem-cn';
block.setup({
    mod: '--'
});

class Select extends React.Component {
    render() {
        const Select = this.props.native ? MobileSelect : DesktopSelect;

        return (
            <Select {...this.props}/>
        )
    }
}

Select.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func,
    optionIdKey: PropTypes.string,
    optionNameKey: PropTypes.string,
    labelText: PropTypes.string,
    value: PropTypes.object,
    native: PropTypes.bool
}

export default Select;