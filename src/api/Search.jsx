import axios from 'axios';
import "./Search.css"
import React, { useState, useEffect } from 'react';

function Search() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='container'>
      {products.map(product => (
        <div className='container_produto' key={product.id}>
          <img src="http://teamsoft.com.br/test-frontend/picanha_cheddar_bacon.png" alt="Picanha Cheddar Bacon" />
          <h2>{product.nm_product}</h2>
          <p>{product.description}</p>
          <p>Preço: R$ {product.vl_price.toFixed(2)}</p>
        <div>
        </div>
          <div className='container_form'>
              {product.ingredients.map(ingredientGroup => (
                <div key={ingredientGroup.group}>
                  <h4>{ingredientGroup.group}</h4>
                  {ingredientGroup.itens.map(ingredient => (
                    <p key={ingredient.id}>{ingredient.nm_item}: R$ {ingredient.vl_item.toFixed(2)}</p>
                  ))}
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default Search;
