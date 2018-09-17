import React from 'react';
import classes from './Mushroom.css'
import Aux from '../../../../hoc/Aux/Aux';

const mushroom = (props) => (
    <Aux>
        {props.side === "left" ?
            <Aux>
                <div className={[classes.mushroom, classes.mushroom1].join(' ')}></div>
                <div className={[classes.mushroom, classes.mushroom2].join(' ')}></div>
                <div className={[classes.mushroom, classes.mushroom3].join(' ')}></div>
            </Aux>
            :
            <Aux>
                <div className={[classes.mushroom, classes.mushroom4].join(' ')}></div>
                <div className={[classes.mushroom, classes.mushroom5].join(' ')}></div>
                <div className={[classes.mushroom, classes.mushroom6].join(' ')}></div>
            </Aux>
        }
    </Aux>
);

export default mushroom;