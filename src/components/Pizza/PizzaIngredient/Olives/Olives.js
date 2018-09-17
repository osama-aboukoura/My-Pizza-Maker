import React from 'react';
import classes from './Olives.css'
import Aux from '../../../../hoc/Aux/Aux';

const olives = (props) => (
    <Aux>
        {props.side === "left" ?
            <Aux>
                <div className={[classes.olives, classes.olives1].join(' ')}></div>
                <div className={[classes.olives, classes.olives2].join(' ')}></div>
                <div className={[classes.olives, classes.olives3].join(' ')}></div>
                <div className={[classes.olives, classes.olives4].join(' ')}></div>
                <div className={[classes.olives, classes.olives5].join(' ')}></div>
            </Aux>
            :
            <Aux>
                <div className={[classes.olives, classes.olives6].join(' ')}></div>
                <div className={[classes.olives, classes.olives7].join(' ')}></div>
                <div className={[classes.olives, classes.olives8].join(' ')}></div>
                <div className={[classes.olives, classes.olives9].join(' ')}></div>
                <div className={[classes.olives, classes.olives10].join(' ')}></div>
            </Aux>
        }
    </Aux>
);

export default olives;