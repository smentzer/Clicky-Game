import React, { Component } from 'react';

import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

class FadeIn extends Component {

    defaultStyle = {
        transition: `all ${this.props.duration}ms ease-in-out`,
        transitionDelay: this.props.delay || '0',
        opacity: 0,
        position: 'relative'
    };

    transitionStyles = {
        entering: {
            opacity: 0,
            [this.props.direction]: this.props.length || '50px'
        },
        entered: {
            opacity: 1,
            [this.props.direction]: '0'
        }
    };

    render(){
        return (
            <Transition in={this.props.in || true} timeout={this.props.duration} appear={true}>
                {(state) => (
                    <div style={{...this.defaultStyle,...this.transitionStyles[state] }}>
                    {this.props.children}
                    </div>
                )}
            </Transition>
        )
    }
};

FadeIn.propTypes = {
    delay:      PropTypes.string,
    direction:  PropTypes.string,
    duration:    PropTypes.number.isRequired,
    length:     PropTypes.string
};

export default FadeIn;