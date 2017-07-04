import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import Highlighter from './Highlighter';

class Menu extends React.Component {
    renderMenu(filteredOptions) {
        const b = block('select');
        return (
            <ul className={b('menu')}>
                {
                    filteredOptions.map((option) => {
                        return (
                            <li className={b('option')}
                                onClick={this.props.onClick.bind(this, option)}
                                key={option[this.props.optionIdKey]}>
                                <Highlighter filter={this.props.filterText}>
                                    {option[this.props.optionNameKey]}
                                </Highlighter>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        const b = block('select');
        const {options, filterText, optionSearchKey} = this.props;

        const filteredOptions = options.filter(option => {
            return option[optionSearchKey].toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        });

        const filteredMenu = filteredOptions.length ? this.renderMenu(filteredOptions) : <div className={b('menu',{isEmpty: true})}>Ничего не найдено</div>

        return (
            <div className={b('menu-wrap')}>
                {options.length ? filteredMenu : <div>Loading...</div>}
            </div>
        )
    }
}

Menu.propTypes = {
    options: PropTypes.array,
    onClick: PropTypes.func,
    filterText: PropTypes.string,
    optionIdKey: PropTypes.string,
    optionNameKey: PropTypes.string,
    optionSearchKey: PropTypes.string
}

export default Menu;