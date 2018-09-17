import React from 'react';
import classes from './Cheese.css'
import Aux from '../../../../hoc/Aux/Aux';

const cheese = (props) => (
    <Aux>
        {props.side === "left" ?
            <Aux>
                <div className={classes.cheeseLeft}>
                    <div className={[classes.cheeseHole, classes.cheeseHole1].join(' ')}></div>
                    <div className={[classes.cheeseHole, classes.cheeseHole2].join(' ')}></div>
                    <div className={[classes.cheeseHole, classes.cheeseHole3].join(' ')}></div>
                </div>
            </Aux>
            :
            <Aux>
                <div className={classes.cheeseRight}>
                    <div className={[classes.cheeseHole, classes.cheeseHole4].join(' ')}></div>
                    <div className={[classes.cheeseHole, classes.cheeseHole5].join(' ')}></div>
                    <div className={[classes.cheeseHole, classes.cheeseHole6].join(' ')}></div>
                    <div className={[classes.cheeseHole, classes.cheeseHole7].join(' ')}></div>
                </div>
            </Aux>
        }
    </Aux>
);

export default cheese;