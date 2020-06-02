import React from 'react'
import RecipeeItem from './RecipeeItem';
const Recipee=(props)=>{
    const {recipes}=props
return(
    <div class ="row">
    {
        recipes.map(recipe =><RecipeeItem name={recipe.recipe.label}
         image={recipe.recipe.image}
         ingredientLines={recipe.recipe.ingredientLines}/>)}

    
        ))
    }
    </div>
);



}
export default Recipee;