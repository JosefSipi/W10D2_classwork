import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {

}

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementByID("main");
    ReactDOM.render(<Root />, root);

});