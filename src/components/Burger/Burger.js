import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngridients';

const burger = (props) =>{
    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients)
        .map( igkey => {
            return [...Array( props.ingredients[igkey])].map((_, i) => {
               return <BurgerIngredient key={igkey + i} type={igkey} />;
            });
        })
        .reduce((acc, cl)=>{
            return acc.concat(cl)
        }, []);

        console.log(transformedIngredients);
        if (transformedIngredients.length === 0){
            transformedIngredients = <p>please start adding ingredients</p>
        }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>


        </div>
    );
}

export default burger;