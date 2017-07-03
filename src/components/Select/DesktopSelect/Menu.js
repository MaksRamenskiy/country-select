import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';

class Menu extends React.Component {
    clickHandler(option) {
        this.props.onClick(option);
    }

    renderMenu(filteredOptions) {
        const b = block('select');
        return (
            <ul className={b('menu')}>
                {
                    filteredOptions
                        .map((option) => {
                            return (
                                <li className={b('option')}
                                    onClick={this.clickHandler.bind(this, option)}
                                    key={option.code}>
                                    {option.name}
                                </li>
                            )
                        })
                }
            </ul>
        )
    }

    render() {
        const b = block('select');
        const {options, filterText} = this.props;
        const filteredOptions = options.filter(option => {
            return option.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        });

        return (
            <div className={b('menu-wrap')}>
                {filteredOptions.length
                    ? this.renderMenu(filteredOptions)
                    : <div className={b('menu',{isEmpty: true})}>Ничего не найдено</div>
                }
            </div>
        )
    }
}

Menu.propTypes = {
    options: PropTypes.array,
    onClick: PropTypes.func,
    filterText: PropTypes.string
}

export default Menu;