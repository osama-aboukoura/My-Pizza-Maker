import React from 'react';
import classes from './Order.css';
import Aux from '../../hoc/Aux/Aux'

const order = (props) => {

    const ingredientsFull = props.ingredientsFull ?
        <Aux>
            <h4>Whole:</h4>
            <ul>
                {props.ingredientsFull.map(ingredient => (
                    <li key={ingredient} style={{ textTransform: 'capitalize' }}>{ingredient}</li>
                ))}
            </ul>
        </Aux>
        : null

    const ingredientsLeft = props.ingredientsLeft ?
        <Aux>
            <h4>Left:</h4>
            <ul>
                {props.ingredientsLeft.map(ingredient => (
                    <li key={ingredient} style={{ textTransform: 'capitalize' }}>{ingredient}</li>
                ))}
            </ul>
        </Aux>
        : null

    const ingredientsRight = props.ingredientsRight ?
        <Aux>
            <h4>Right:</h4>
            <ul>
                {props.ingredientsRight.map(ingredient => (
                    <li key={ingredient} style={{ textTransform: 'capitalize' }}>{ingredient}</li>
                ))}
            </ul>
        </Aux>
        : null

    return (
        <div className={classes.Order}>
            <h3>Ingredients:</h3>
            {ingredientsFull}
            {ingredientsLeft}
            {ingredientsRight}
            < p > Price: <strong>£{props.price.toFixed(2)}</strong></p>
        </div >
    )
};

export default order;