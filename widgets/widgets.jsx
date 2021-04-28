import React from 'react';
import ReactDOM from 'react-dom';

const Root = (props) => {
    return (
        <div>
            
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementByID("main");
    ReactDOM.render(<Root />, root);  
});