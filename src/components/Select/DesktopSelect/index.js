import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import Menu from './Menu';
import Control from './Control.js';
import onClickOutside from 'react-onclickoutside';


class DesktopSelect extends React.Component {
    state = {
        isFocused: false,
        isOpened: false,
        filterText: '',
        defaultValue: ''
    }

    handleInputFocus = () => {
        this.setState({
            isFocused: true,
            isOpened: true
        })
    }

    handleChange = (option) => {
        const optionIdKey = this.props.optionIdKey;
        const optionNameKey = this.props.optionNameKey;

        this.setState({
            isOpened: false,
            isFocused: false,
            filterText: '',
            defaultValue: option[optionNameKey]
        });

        this.input.value = '';
        this.props.onChange(option[optionIdKey]);
    }

    handleInputChange = (event) => {
        const inputValue = event.target.value;

        this.setState({
            filterText: inputValue
        });
    }

    handleClickOutside() {
        this.setState({
            isFocused: false,
            isOpened: false,
            filterText: ''
        });

        this.input.value = '';
    }

    render() {
        const b = block('select');

        return (
            <div className={b}>
                <Control
                    isFocused={this.state.isFocused}
                    onFocus={this.handleInputFocus}
                    onInputChange={this.handleInputChange}
                    inputRef={(input) => {this.input = input}}
                    defaultValue={this.state.defaultValue}/>
                {this.state.isOpened &&
                <Menu
                    options={this.props.options}
                    onClick={this.handleChange}
                    filterText={this.state.filterText} />}
            </div>
        )
    }
}

DesktopSelect.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func,
    optionIdKey: PropTypes.string,
    optionNameKey: PropTypes.string,
    labelText: PropTypes.string,
    value: PropTypes.object,
}

export default onClickOutside(DesktopSelect);