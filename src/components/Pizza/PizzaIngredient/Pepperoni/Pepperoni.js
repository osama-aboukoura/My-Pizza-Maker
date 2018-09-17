import React from 'react';
import classes from './Pepperoni.css'
import Aux from '../../../../hoc/Aux/Aux';

const pepperoni = (props) => (
    <Aux>
        {props.side === "left" ?
            <Aux>
                <div className={[classes.pepperoni, classes.pepperoni1].join(' ')}></div>
                <div className={[classes.pepperoni, classes.pepperoni2].join(' ')}></div>
            </Aux>
            :
            <Aux>
                <div className={[classes.pepperoni, classes.pepperoni3].join(' ')}></div>
                <div className={[classes.pepperoni, classes.pepperoni4].join(' ')}></div>
            </Aux>
        }
    </Aux>
);

export default pepperoni;