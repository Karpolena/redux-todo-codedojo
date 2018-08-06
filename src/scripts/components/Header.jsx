import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stats from './stats';
import Stopwatch from './stopwatch';

function Header ({ todos }) {
   
        return (        
            <header className="header main__item">
                <Stats todos={todos}/>
                <h1>Redux Todo</h1>
                <Stopwatch />
            </header>
        );
    
}

Header.propTypes = {
    todos: PropTypes.array
}

export default Header;