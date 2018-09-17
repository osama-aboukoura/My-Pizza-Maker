import React from 'react';
import classes from './PizzaSections.css'
import PizzaSection from './PizzaSection/PizzaSection';

const pizzaSections = (props) => {
    return (
        <div className={classes.PizzaSections}>
            <PizzaSection
                side={"left"}
                ingredients={props.ingredients["left"]}
                activeSide={props.activeSide}
                changeActiveSideHandler={() => props.changeActiveSide("left")}
            />
            <PizzaSection
                side={"full"}
                ingredients={props.ingredients["full"]}
                activeSide={props.activeSide}
                changeActiveSideHandler={() => props.changeActiveSide("full")}
            />
            <PizzaSection
                side={"right"}
                ingredients={props.ingredients["right"]}
                activeSide={props.activeSide}
                changeActiveSideHandler={() => props.changeActiveSide("right")}
            />
            <div style={{clear:"both"}}></div>
        </div>
    )
}

export default pizzaSections;