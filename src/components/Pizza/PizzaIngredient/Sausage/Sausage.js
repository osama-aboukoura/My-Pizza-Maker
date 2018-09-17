import React from 'react';
import classes from './Sausage.css'
import Aux from '../../../../hoc/Aux/Aux';

const sausage = (props) => (
    <Aux>
        {props.side === "left" ?
            <Aux>
                <div className={[classes.sausage, classes.sausage1].join(' ')}></div>
                <div className={[classes.sausage, classes.sausage2].join(' ')}></div>
            </Aux>
            :
            <Aux>
                <div className={[classes.sausage, classes.sausage3].join(' ')}></div>
                <div className={[classes.sausage, classes.sausage4].join(' ')}></div>
            </Aux>
        }
    </Aux>
);

export default sausage;