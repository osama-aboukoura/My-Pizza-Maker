import React from 'react';
import classes from './Sauce.css'
import Aux from '../../../../hoc/Aux/Aux';

const tomatoSauce = (props) => (
    <Aux>
        {props.side === "left" ?
            <div className={[classes.SauceLeft, classes.TomatoSauce].join(' ')}></div>
            :
            <div className={[classes.SauceRight, classes.TomatoSauce].join(' ')}></div>
        }
    </Aux>
);

export default tomatoSauce;