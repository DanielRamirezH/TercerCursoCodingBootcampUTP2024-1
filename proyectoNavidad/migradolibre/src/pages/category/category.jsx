import { useEffect, useState } from "react";
import "./category.css";
import { useParams } from 'react-router-dom';

function Category() {  
  const { category_id } = useParams();
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  const api = "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326";

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(json => setData(json.results))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const itemsCategory = data.filter(item => item.category_id === category_id);
    setItems(itemsCategory);
  }, [data, category_id]);

  return (
    <div>
      <h1>Categoría: {category_id}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
