import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import Highlighter from './Highlighter';

class Menu extends React.Component {
    renderMenu(filterText) {
        const b = block('select');

        const options = !filterText ? this.props.options : this.props.options.filter(option => {
            return option[this.props.optionSearchKey].toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        });

        if (!options.length) return <div className={b('menu',{isEmpty: true})}>Ничего не найдено</div>

        return (
            <ul className={b('menu')}>
                {
                    options.map((option) => {
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
        const {options, filterText, direction} = this.props;

        const menu = filterText ? this.renderMenu(filterText) : this.renderMenu();

        return (
            <div className={b('menu-wrap', {direction: direction})}>
                {options.length ? menu : <div>Loading...</div>}
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