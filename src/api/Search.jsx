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
          {products.map((product) => (
            <div className={"key=product.id"}>
              <h1 className="nome_produto">{product.nm_product}</h1>
              <p className="descripcao_produto">{product.description}</p>
              <div className="valor">
                <h1 className="preco">R${product.vl_price.toFixed(2)}</h1>
                <h1 className="desconto">R${product.vl_discount}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="form">
        <div className="">
          {products.map((product) => {
            return product.ingredients.map((ingredient) => {
              return (
                <div>
                  <div className=""></div>
                  {ingredient.type === "number" && (
                    <ul>
                      <div className="title">
                        <p>Adicionar Ingredientes</p>
                        <p>Até 8 ingredientes</p>
                      </div>
                      {ingredient.itens.map((item) => {
                        return (
                          <div className="">
                            <li>
                              <form>
                                <h1 className="title_lista">
                                  <p className="nm_itemlistas">{item.nm_item}</p>
                                  <p className="vl_itemlistas">+ R${item.vl_item}</p>
                                </h1>
                              </form>
                              {ingredient.type === "boolean" && (
                                <input type="checkbox" />
                              )}
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
