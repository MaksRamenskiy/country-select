import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';

class Highlighter extends React.Component {
    constructor() {
        super();
        this.count = 0;
    }

    renderPlainElement(textFragment) {
        this.count++;
        return React.DOM.span({className: 'segment', 'key': this.count}, textFragment);
    }

    renderHighlightElement(textFragment) {
        this.count++;
        return React.DOM.span({className: 'highlight', 'key': this.count}, textFragment);
    }

    renderHighlighter() {
        const text = this.props.children;
        const regex = new RegExp('' + this.props.filter + '', 'gi');
        const segments = text.split(regex);
        const matches = text.match(regex);
        const textElements = [];

        segments.forEach((segment, index) => {
            textElements.push(this.renderPlainElement(segment));
            if (segments.length === index + 1) {return}
            textElements.push(this.renderHighlightElement(matches[index]));
        });

        return textElements;
    }

    render() {
        const b = block('select');
        const text = this.props.filter ? this.renderHighlighter() : this.props.children;

        return <div className={b('option-text')}>{text}</div>
    }
}

Highlighter.propTypes = {
    text: PropTypes.string,
    filter: PropTypes.string
}

export default Highlighter;