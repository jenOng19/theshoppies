import React from 'react';

const Input = (props) => {
    return(
        <input
            type="text"
            value = {props.value}
            onChange = {(e) => props.setSearchInput(e.target.value)}
            placeholder = 'Search Horror Movies...'
        >
        </input>
    );
};

export default Input;