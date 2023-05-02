import React, { useState, useEffect } from "react";
import axios from "axios";
import Burguer from "../assets/imgs/burguer.svg";
import "./Search.css";

function Search() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="produto">
        <div className="hamburguerpng">
          <img src={Burguer} alt="hamburguer de Bancon" />
        </div>

        <div>
                {products.map(product => 
                    <div className={'key=product.id'}>
                        <h1 className='nome_produto'>{product.nm_product}</h1>
                        <p className='descripcao_produto'>{product.description}</p>
                        <div className='valor'>
                            <h1 className='preco'>R${product.vl_price.toFixed(2)}</h1>
                            <h1 className='desconto'>R${product.vl_discount}</h1> 
                        </div>
                    </div>
                )}
        </div>
      </div>

      <div className="form">
      <div className='ingredientes_extras'>
                <form>
                  <div>
                    <h1>Adicionar Ingredientes</h1>
                    <p>Até 8 ingredientes</p>
                  </div>
                </form>
              </div>
      </div>
    </div>
  );
}

export default Search;
