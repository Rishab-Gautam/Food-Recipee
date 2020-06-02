import React from 'react'
const Header=(props) =>{
    const {search,onInputChange,onSearchClick}=props
    
return(
    <div className="jumbtron">
    <h1 className="display-1">
    <span class="material-icons brand-icon">
fastfood
</span>

Food Recipee</h1>
<div class="input-group mb-3 w-50 mx-auto">
  <input type="text" class="form-control" placeholder="search your Recipee"
  value={search}
  onChange={onInputChange}
  onSearchClick={onSearchClick}
  
  />
  <div class="input-group-append">
    <button className="btn btn-dark" onClick={onSearchClick}  >search Recipee</button>
  </div>
  </div>


    </div>
);



}
export default Header;