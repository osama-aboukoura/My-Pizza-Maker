import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => {
    let cssClassesButton = [classes.More];
    if (props.ingredientsSelected[props.type] > 0 ) {
        cssClassesButton.push(classes.SelectedButton); 
    }

    return (
        <div className={classes.BuildControl}>
            <button
                className={cssClassesButton.join(' ')}
                onClick={props.added}>
                {props.label}
            </button>
        </div>
    )
};

export default buildControl;