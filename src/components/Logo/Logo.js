import React from 'react';

import pizzaLogo from '../../assets/images/pizza-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={pizzaLogo} alt="My Pizza" />
    </div>
);

export default logo;