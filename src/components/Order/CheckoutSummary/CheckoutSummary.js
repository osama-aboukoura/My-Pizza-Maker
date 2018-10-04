import React from 'react';
import classes from './CheckoutSummary.css'
import Pizza from '../../Pizza/Pizza';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <h3 style={{ height: '40px'}}>We hope you enjoy your pizza!</h3>
            <div style={{ width: '300px', height: '350px', margin: 'auto' }}>
                <Pizza ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;