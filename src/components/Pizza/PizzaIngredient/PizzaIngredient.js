import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './PizzaIngredient.css';
import Cheese from './Cheese/Cheese'
import TomatoSauce from './Sauce/TomatoSauce'
import BbqSauce from './Sauce/BbqSauce'
import Pepperoni from './Pepperoni/Pepperoni'
import Sausage from './Sausage/Sausage'
import Ham from './Ham/Ham'
import Tandori from './Tandori/Tandori'
import Onions from './Onions/Onions'
import GreenPeppers from './GreenPeppers/GreenPeppers'
import Olives from './Olives/Olives'
import Mushroom from './Mushroom/Mushroom'

class PizzaIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('Dough'):
                ingredient = <div className={classes.Dough}></div>;
                break;
            case ('cheese'):
                ingredient = <Cheese side={this.props.side} />
                break;
            case ('tomatoSauce'):
                ingredient = <TomatoSauce side={this.props.side}/>
                break;
            case ('bbqSauce'):
                ingredient = <BbqSauce side={this.props.side}/>
                break;
            case ('pepperoni'):
                ingredient = <Pepperoni side={this.props.side}/>
                break;
            case ('sausage'):
                ingredient = <Sausage side={this.props.side}/>
                break;
            case ('ham'):
                ingredient = <Ham side={this.props.side}/>
                break;
            case ('tandori'):
                ingredient = <Tandori side={this.props.side}/>
                break;
            case ('onions'):
                ingredient = <Onions side={this.props.side}/>
                break;
            case ('greenPeppers'):
                ingredient = <GreenPeppers side={this.props.side}/>
                break;
            case ('olives'):
                ingredient = <Olives side={this.props.side}/>
                break;
            case ('mushroom'):
                ingredient = <Mushroom side={this.props.side}/>
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

PizzaIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default PizzaIngredient;