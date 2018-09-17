import React from 'react';
import classes from './GreenPeppers.css'
import Aux from '../../../../hoc/Aux/Aux';

const greenPeppers = (props) => (
    <Aux>
        {props.side === "left" ?
            <Aux>
                <div className={[classes.greenPeppers, classes.greenPeppers1].join(' ')}></div>
                <div className={[classes.greenPeppers, classes.greenPeppers2].join(' ')}></div>
                <div className={[classes.greenPeppers, classes.greenPeppers3].join(' ')}></div>
                <div className={[classes.greenPeppers, classes.greenPeppers4].join(' ')}></div>
                <div className={[classes.greenPeppers, classes.greenPeppers5].join(' ')}></div>
            </Aux>
            :
            <Aux>
                <div className={[classes.greenPeppers, classes.greenPeppers6].join(' ')}></div>
                <div className={[classes.greenPeppers, classes.greenPeppers7].join(' ')}></div>
                <div className={[classes.greenPeppers, classes.greenPeppers8].join(' ')}></div>
                <div className={[classes.greenPeppers, classes.greenPeppers9].join(' ')}></div>
                <div className={[classes.greenPeppers, classes.greenPeppers10].join(' ')}></div>
            </Aux>
        }
    </Aux>
);

export default greenPeppers;