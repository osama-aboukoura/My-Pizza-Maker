import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {
            full: {
                // tomatoSauce: 1, bbqSauce: 0, cheese: 1, pepperoni: 0, ham: 0, sausage: 0,
                // tandori: 0, onions: 0, greenPeppers: 0, olives: 0, mushroom: 0
            },
            left: {
                // tomatoSauce: 1, bbqSauce: 0, cheese: 1, pepperoni: 0, ham: 0, sausage: 0,
                // tandori: 0, onions: 0, greenPeppers: 0, olives: 0, mushroom: 0,
            },
            right: {
                // tomatoSauce: 1, bbqSauce: 0, cheese: 1, pepperoni: 0, ham: 0, sausage: 0,
                // tandori: 0, onions: 0, greenPeppers: 0, mushroom: 0,
            }
        },
        price: 0,
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {
            full: {},
            left: {},
            right: {}
        };
        let price = 0;
        for (let param of query.entries()) {
            const side = param[0].substring(0, param[0].indexOf("."));
            const ingredientName = param[0].substring(param[0].indexOf(".") + 1);
            if (side === "full") {
                ingredients["full"][ingredientName] = +param[1];
            }
            else if (side === "left") {
                ingredients["left"][ingredientName] = +param[1];
            }
            else if (side === "right") {
                ingredients["right"][ingredientName] = +param[1];
            }
            else if (param[0] === "price") {
                price = param[1];
            }
        }
        console.log(ingredients);
        this.setState({ ingredients: ingredients, totalPrice: price })
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (
                        <ContactData
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            {...props} // props used here to pass route history to contact data   
                        />
                    )}
                />
            </div>
        )
    }
}

export default Checkout;