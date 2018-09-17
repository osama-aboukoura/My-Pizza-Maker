import React from 'react';
import classes from './Onions.css'
import Aux from '../../../../hoc/Aux/Aux';

const onions = (props) => (
    <Aux>
        {props.side === "left" ?
            <Aux>
                <div className={[classes.onion, classes.onion1].join(' ')}></div>
                <div className={[classes.onion, classes.onion2].join(' ')}></div>
                <div className={[classes.onion, classes.onion3].join(' ')}></div>
            </Aux>
            :
            <Aux>
                <div className={[classes.onion, classes.onion4].join(' ')}></div>
                <div className={[classes.onion, classes.onion5].join(' ')}></div>
                <div className={[classes.onion, classes.onion6].join(' ')}></div>
            </Aux>
        }
    </Aux>
);

export default onions;