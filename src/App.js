import React,{useState,useEffect} from 'react';
import Header from "./components/Header"
import Recipee from "./components/Recipee"
import RecipeeItem from "./components/RecipeeItem"
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import './App.css';


function App() {
  
  const [search,setSearch] = useState("");
  const [recipes,setRecipes] = useState([]);
  const Appd = "4c2ee127"

  const Appk ="f25047efa37101e4d5e9041f8769abd3";
  
  useEffect(()=>{
  getRecipes();
  },[])
  const getRecipes = async () => {
  const res = await Axios.get( `https://api.edamam.com/search?q=${search}&app_id=${Appd}&app_key=${Appk}&from=0&to=3&calories=591-722&health=alcohol-free`
  );

  console.log("ssssssssssssss");
  console.log(res);
  setRecipes(res.data.hits);
   
  };
  const onInputChange=(e) =>{
    setSearch(e.target.value);}
    const onSearchClick=()=>{
      getRecipes()
    

  };
  return (
    <div className="App">
      
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      
      <div class="container">
      <Recipee recipes={recipes}/>
      </div>
    </div>
  );
  
  }

export default App;
