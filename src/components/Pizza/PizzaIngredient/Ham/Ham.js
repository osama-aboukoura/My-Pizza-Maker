import React from 'react';
import classes from './Ham.css'
import Aux from '../../../../hoc/Aux/Aux';

const ham = (props) => (
    <Aux>
        {props.side === "left" ?
            <Aux>
                <div className={[classes.ham, classes.ham1].join(' ')}></div>
                <div className={[classes.ham, classes.ham2].join(' ')}></div>
            </Aux>
            :
            <Aux>
                <div className={[classes.ham, classes.ham3].join(' ')}></div>
                <div className={[classes.ham, classes.ham4].join(' ')}></div>
            </Aux>
        }
    </Aux>
);

export default ham;