import React, { Component } from 'react';
import classes from './ContactData.css'
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const ingredientsCopy = { ...this.props.ingredients };

        const ingredientsFull = Object.keys(ingredientsCopy["full"])
        const ingredientsLeft = Object.keys(ingredientsCopy["left"])
            .map(ingredientName => ingredientsCopy["left"][ingredientName] > 0 && !(ingredientName in ingredientsCopy["full"]) ? ingredientName : null)
            .filter(x => x != null);
        const ingredientsRight = Object.keys(ingredientsCopy["right"])
            .map(ingredientName => ingredientsCopy["right"][ingredientName] > 0 && !(ingredientName in ingredientsCopy["full"]) ? ingredientName : null)
            .filter(x => x != null);

        const order = {
            ingredients: {
                full: ingredientsFull,
                left: ingredientsLeft,
                right: ingredientsRight,
            },
            price: this.props.price,
            customer: {
                name: 'Osama',
                address: {
                    streetName: '123 street',
                    postCode: 'UB67RD',
                    city: 'London'
                },
                email: 'osama@g.com',
                deliveryMethod: 'cheapest'
            }
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your Street Name" />
                <input className={classes.Input} type="text" name="postCode" placeholder="Your Post Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData; 
