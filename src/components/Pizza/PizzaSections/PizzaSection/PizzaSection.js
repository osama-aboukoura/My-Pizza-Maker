import React from 'react';
import classes from './PizzaSection.css'

const pizzaSection = (props) => {
    let active = false;
    if (props.side === props.activeSide) {
        active = true;
    }

    const sectionTitle = props.side === "left" || props.side === "right" ?
        props.side + " Side" : "Whole"

    const listOfIngredients = Object.keys(props.ingredients).map((ingredientName) => {
        return props.ingredients[ingredientName] > 0 ? <li key={ingredientName}>{ingredientName}</li> : null;
    })

    return (
        <div
            onClick={props.changeActiveSideHandler}
            className={[classes.PizzaSection, active ? classes.active : classes.inactive].join(' ')}>

            <h2 className={classes.sideTitle}>
                {sectionTitle}
            </h2>
            <div className={classes.scrollableDiv}>
                <ul>
                    {listOfIngredients}
                </ul>
            </div>
        </div>
    )
}

export default pizzaSection;