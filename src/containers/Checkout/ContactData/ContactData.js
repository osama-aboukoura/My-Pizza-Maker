import React, { Component } from 'react';
import classes from './ContactData.css'
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street',
                },
                value: ''
            },
            postCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Post Code',
                },
                value: ''
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your City',
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email',
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'Fastest' },
                        { value: 'Cheapest' },
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElementId in this.state.orderForm) {
            formData[formElementId] = this.state.orderForm[formElementId].value;
        }
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
            order: formData
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

    inputChangedHandler = (event, inputID) => {
        const orderFormCopy = {...this.state.orderForm}
        const updatedFormElement = {...orderFormCopy[inputID]}
        updatedFormElement.value = event.target.value;
        orderFormCopy[inputID] = updatedFormElement;
        this.setState({orderForm: orderFormCopy})
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        key={formElement.id}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button btnType="Success">ORDER</Button>
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
