import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    getIngredientSummaryList = (side) => {
        let listOfIngredients = Object.keys(this.props.ingredients[side])
            .map(igKey => {
                return (
                    this.props.ingredients[side][igKey] > 0 && this.props.ingredients["full"][igKey] === 0 ?
                        <li key={side + igKey}>
                            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
                        </li>
                        :
                        null
                );
            });
        return listOfIngredients;
    }

    render() {

        let ingredientSummaryFull = Object.keys(this.props.ingredients["full"])
            .map(igKey => {
                return (
                    this.props.ingredients["full"][igKey] > 0 ?
                        <li key={"full" + igKey}>
                            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
                        </li>
                        :
                        null
                );
            });

        let ingredientSummaryLeft = this.getIngredientSummaryList("left");
        let ingredientSummaryRight = this.getIngredientSummaryList("right");

        // removing null values from the lists 
        ingredientSummaryFull = ingredientSummaryFull.filter(x => x != null);
        ingredientSummaryLeft = ingredientSummaryLeft.filter(x => x != null);
        ingredientSummaryRight = ingredientSummaryRight.filter(x => x != null);

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious pizza with the following ingredients:</p>
                {ingredientSummaryFull.length > 0 ?
                    <Aux>
                        <h3>Both Sides:</h3>
                        <ul>
                            {ingredientSummaryFull}
                        </ul>
                    </Aux> : null
                }
                <div style={{width: "100%"}}>
                    <div style={{width: "45%", float:"left"}}>
                        {ingredientSummaryLeft.length > 0 ?
                            <Aux>
                                <h3>Left Side:</h3>
                                <ul>
                                    {ingredientSummaryLeft}
                                </ul>
                            </Aux> : null
                        }
                    </div>
                    <div style={{width: "45%", float:"left"}}>
                        {ingredientSummaryRight.length > 0 ?
                            <Aux>
                                <h3>Right Side:</h3>
                                <ul>
                                    {ingredientSummaryRight}
                                </ul>
                            </Aux> : null
                        }
                    </div>
                </div>
                <div style={{clear:"both"}}></div>

                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;