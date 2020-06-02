import React from 'react';



const RecipeeItem = (props) =>{
    const {name,image,ingredientLines}=props;
    return(  <div class ="row">
    {   
        <div class="col-md3">
        <div class="card">
            <img src={image} className="img-fluid w-50-auto rounded circle"/>
            <div class="card-body">
    <h4>{name}</h4>
    </div>
    <ul class="list-group-flush">
        {
    ingredientLines.map(ingredient=>(<li className="list-group-item">{ingredient}</li>))
    
        }
    </ul>
    </div>
    </div>

    
        
    }
    </div>
);




    
        


}
export default RecipeeItem;