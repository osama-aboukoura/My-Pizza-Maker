import React, { Component } from 'react';
// import classes from './Orders.css'
import axios from '../../axios-orders'
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
    state = {
        orders: [],
        loading: true,
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    console.log(response.data[key]["ingredients"])
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    })
                }
                this.setState({ loading: false, orders: fetchedOrders })
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }

    render() {
        let orders = this.state.orders.map(order => (
            <Order key={order.id}
            ingredientsFull={order.ingredients.full}
            ingredientsLeft={order.ingredients.left}
            ingredientsRight={order.ingredients.right}
            price={+order.price} // the plus converts the string to number 
            />
        ))
        return (
            <div>
                {orders}
            </div>
        )
    }

}

export default withErrorHandler(Orders, axios)