import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Tomato Sauce', type: 'tomatoSauce' },
    { label: 'BBQ Sauce', type: 'bbqSauce' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Pepperoni', type: 'pepperoni' },
    { label: 'Sausage', type: 'sausage' },
    { label: 'Turkey Ham', type: 'ham' },
    { label: 'Tandori Chicken', type: 'tandori' },
    { label: 'Onions', type: 'onions' },
    { label: 'Green Peppers', type: 'greenPeppers' },
    { label: 'Olives', type: 'olives' },
    { label: 'Mushroom', type: 'mushroom' },
];

const buildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>£{props.price.toFixed(2)}</strong></p>
            <div className={classes.buttonsBox}>
                {controls.map(ctrl => (
                    <BuildControl
                        ingredientsSelected={props.ingredientsSelected}
                        key={ctrl.label}
                        label={ctrl.label}
                        type={ctrl.type}
                        added={() => props.ingredientAdded(ctrl.type, props.activeSide)}
                    />
                ))}
            </div>
            <div className={classes.clearFloating}></div>
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    )
};

export default buildControls;