import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import Menu from './Menu';
import Control from './Control.js';
import onClickOutside from 'react-onclickoutside';


class DesktopSelect extends React.Component {
    state = {
        options: this.props.options,
        isFocused: false,
        isOpened: false,
        filterText: ''
    }

    handleInputFocus = () => {
        this.setState({
            isFocused: true,
            isOpened: true
        })
    }

    handleChange = (option) => {
        this.props.onChange(option.code);
        this.searchInput.value = '';
        this.setState({
            isOpened: false,
            isFocused: false,
            filterText: ''
        });
    }

    handleInputChange = (inputValue) => {
        this.setState({
            filterText: inputValue
        });
    }

    handleClickOutside() {
        this.searchInput.value = '';
        this.setState({
            isFocused: false,
            isOpened: false,
            filterText: ''
        })
    }

    render() {
        const b = block('select');

        return (
            <div className={b}>
                <Control
                    isFocused={this.state.isFocused}
                    onFocus={this.handleInputFocus}
                    onInputChange={this.handleInputChange}
                    inputRef={(el) => {this.searchInput = el}}
                    value={this.props.value}/>
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
    onChange: PropTypes.func
}

export default onClickOutside(DesktopSelect);