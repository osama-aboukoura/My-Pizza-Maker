import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Pizza from '../../components/Pizza/Pizza';
import PizzaSections from '../../components/Pizza/PizzaSections/PizzaSections'
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    tomatoSauce: 1.0,
    bbqSauce: 1.0,
    cheese: 1.50,
    pepperoni: 1.20,
    ham: 1.10,
    sausage: 1.00,
    tandori: 0.90,
    onions: 0.40,
    greenPeppers: 0.50,
    olives: 0.60,
    mushroom: 0.50
};

class PizzaBuilder extends Component {

    state = {
        ingredients: { 
            full: {
                tomatoSauce: 1,
                bbqSauce: 0,
                cheese: 1,
                pepperoni: 0,
                ham: 0,
                sausage: 0,
                tandori: 0,
                onions: 0,
                greenPeppers: 0,
                olives: 0,
                mushroom: 0,
            },
            left: {
                tomatoSauce: 1,
                bbqSauce: 0,
                cheese: 1,
                pepperoni: 0,
                ham: 0,
                sausage: 0,
                tandori: 0,
                onions: 0,
                greenPeppers: 0,
                olives: 0,
                mushroom: 0,
            },
            right: {
                tomatoSauce: 1,
                bbqSauce: 0,
                cheese: 1,
                pepperoni: 0,
                ham: 0,
                sausage: 0,
                tandori: 0,
                onions: 0,
                greenPeppers: 0,
                mushroom: 0,
            }
        },
        totalPrice: 10.0,
        purchasable: true,
        purchasing: false,
        activeSide: "full"
    }

    countToppings(ingredients, side) {
        const sum = Object.keys(ingredients[side])
            .map(igKey => {
                return ingredients[side][igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum;
    }

    updatePurchaseState(ingredients) {
        const fullCount = this.countToppings(ingredients, "full");
        const leftCount = this.countToppings(ingredients, "left");
        const righttCount = this.countToppings(ingredients, "right");
        const sum = fullCount + leftCount + righttCount;
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type, side) => {
        const oldCount = this.state.ingredients[side][type];
        let newCount;
        if (oldCount === 0) {
            newCount = 1; 
        } else {
            newCount = 0; 
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[side][type] = newCount;
        if (type === "bbqSauce"){
            updatedIngredients[side]["tomatoSauce"] = 0;
            updatedIngredients["full"]["tomatoSauce"] = 0;
            if (side === "full") {
                updatedIngredients["left"]["tomatoSauce"] = 0;
                updatedIngredients["right"]["tomatoSauce"] = 0;
            }
        }
        if (type === "tomatoSauce"){
            updatedIngredients[side]["bbqSauce"] = 0;
            updatedIngredients["full"]["bbqSauce"] = 0;
            if (side === "full") {
                updatedIngredients["left"]["bbqSauce"] = 0;
                updatedIngredients["right"]["bbqSauce"] = 0;
            }
        }
        if (side === "full") {
            updatedIngredients["left"][type] = newCount;
            updatedIngredients["right"][type] = newCount;
        }
        if (updatedIngredients["left"][type] === 1 && updatedIngredients["right"][type] === 1) {
            updatedIngredients["full"][type] = 1;
        }
        if (newCount === 0 && side !== "full") {
            updatedIngredients["full"][type] = newCount; 
        }
        this.setState({ ingredients: updatedIngredients })
        this.updatePrice(type, side, newCount);
        
        this.updatePurchaseState(updatedIngredients);
    }

    updatePrice = (type, side, count) => {
        if (type === "tomatoSauce" || type === "bbqSauce"){
            return;
        }
        let priceDifference = INGREDIENT_PRICES[type];
        if (side !== "full") {
            priceDifference /= 2.0;
        }
        if (count === 0) {
            priceDifference *= -1; // subtracting the price of the ingredient when removed
        }
        let updatedPrice = this.state.totalPrice + priceDifference;
        this.setState({ totalPrice: updatedPrice });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    changeActiveSideHandler = (side) => {
        this.setState({ activeSide: side });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Pizza ingredients={this.state.ingredients} />
                <PizzaSections
                    ingredients={this.state.ingredients}
                    activeSide={this.state.activeSide}
                    changeActiveSide={this.changeActiveSideHandler}
                />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    activeSide={this.state.activeSide}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} 
                    ingredientsSelected={this.state.ingredients[this.state.activeSide]}
                />
            </Aux>
        );
    }
}

export default PizzaBuilder;