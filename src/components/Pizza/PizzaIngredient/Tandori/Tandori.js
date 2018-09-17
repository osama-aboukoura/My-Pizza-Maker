import React from 'react';
import classes from './Tandori.css'
import Aux from '../../../../hoc/Aux/Aux';

const tandori = (props) => (
    <Aux>
        {props.side === "left" ?
            <Aux>
                <div className={[classes.tandori, classes.tandori1].join(' ')}></div>
                <div className={[classes.tandori, classes.tandori2].join(' ')}></div>
                <div className={[classes.tandori, classes.tandori3].join(' ')}></div>
            </Aux>
            :
            <Aux>
                <div className={[classes.tandori, classes.tandori4].join(' ')}></div>
                <div className={[classes.tandori, classes.tandori5].join(' ')}></div>
                <div className={[classes.tandori, classes.tandori6].join(' ')}></div>
            </Aux>
        }
    </Aux>
);

export default tandori;