import React from 'react';
import classes from './Sauce.css'
import Aux from '../../../../hoc/Aux/Aux';

const bbqSauce = (props) => (
    <Aux>
        {props.side === "left" ?
            <div className={[classes.SauceLeft, classes.BbqSauce].join(' ')}></div>
            :
            <div className={[classes.SauceRight, classes.BbqSauce].join(' ')}></div>
        }
    </Aux>
);

export default bbqSauce;