/* eslint-disable react/prop-types */
import "./home.css" 
import {useState, useEffect} from "react";

const Producto = ({id, title, thumbnail}) => {
  return(
  <div className="carta">
    <h1>{title}</h1>
    <img src={thumbnail} alt="" />
    <p>{id}</p>
  </div>
  )
}


const Home = () => {

  const [data, setData] = useState ([]);
  const [categories, setCategories] = useState([])

  const api = "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326"

  // MENU DE NAV IZQ
  // NAME NAME NAME NAME NAME
  // http://localhost:5173/category_id
  
  useEffect (()=> {
    fetch (api)
    .then(response => response.json())
    .then(json => setData(json.results))
    .catch (error => console.error(error))  
  }, [] )

  useEffect (()=> {
    setCategories([
      {
        "category_id": "MLA14407",
        "name": "Monitores"
      },
      {
        "category_id": "MLA1676",
        "name": "Impresora"
      },
      {
        "category_id": "MLA1652",
        "name": "Notebooks"
      },
      {
        "category_id": "MLA1002",
        "name": "Televisores"
      },
      {
        "category_id": "MLA1720",
        "name": "UPS"
      },
      {
        "category_id": "MLA72721",
        "name": "Escaners"
      },
      {
        "category_id": "MLA8618",
        "name": "Parlantes"
      },
      {
        "category_id": "MLA430383",
        "name": "Impresora de Fotografias"
      },
      {
        "category_id": "MLA82085",
        "name": "Tablet"
      },
      {
        "category_id": "MLA430901",
        "name": "Routers"
      },
      {
        "category_id": "MLA16543",
        "name": "Mochilas"
      },
    ])

    console.log(categories);
  }, [data] )


 return (
  <div className="contenedor">
    <div className="navBar">
    {categories.map((category) => (
          <div key={category.category_id}>
            <a href={"http://localhost:5173/" + category.category_id}>
              <p>{category.name}</p>
            </a>
          </div>
        ))}
    </div>
    {data.map(item => (
      <Producto key ={item.id} id ={item.id} title = {item.title} thumbnail = {item.thumbnail} />
    ))};
  </div>
 );
};
export default Home;