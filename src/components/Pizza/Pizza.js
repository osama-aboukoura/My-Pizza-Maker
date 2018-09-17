import React from 'react';

import classes from './Pizza.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';
import IngredientClass from './PizzaIngredient/PizzaIngredient.css';

const pizza = (props) => {

    console.log(props.ingredients["left"]); 
    console.log(props.ingredients["right"]); 

    const IngredientsLeft = Object.keys(props.ingredients["left"])
        .map(igKey => {
            return [...Array(props.ingredients["left"][igKey])].map((_, i) => {
                return <PizzaIngredient key={"left" + igKey + i} type={igKey} side="left"/>;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    const IngredientsRight = Object.keys(props.ingredients["right"])
        .map(igKey => {
            return [...Array(props.ingredients["right"][igKey])].map((_, i) => {
                return <PizzaIngredient key={"right" + igKey + i} type={igKey} side="right" />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    const Ingredients = IngredientsLeft.concat(IngredientsRight);

    // if (transformedIngredients.length === 0) {
    //     transformedIngredients = <p>Please start adding ingredients!</p>;
    // }
    return (
        <div className={classes.Pizza}>
            <div className={IngredientClass.Dough}>
                {Ingredients}

                {/* <PizzaIngredient type="TomatoSauce" />
                <PizzaIngredient type="Cheese" />
                <PizzaIngredient type="pepperoni" />
                <PizzaIngredient type="sausage" />
                <PizzaIngredient type="ham" />
                <PizzaIngredient type="tandori" />
                <PizzaIngredient type="onion" />
                <PizzaIngredient type="greenPeppers" />
                <PizzaIngredient type="olives" /> */}
            </div>
        </div>
    );
};

export default pizza;