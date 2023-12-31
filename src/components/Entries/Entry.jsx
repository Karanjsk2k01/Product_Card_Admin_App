import './Entry.css';
import React, { useState, useEffect } from 'react';

const Entry = (props) => {
  const [productList, setProductList] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Load entries from local storage on component mount
    const storedProducts = Object.keys(localStorage).map(key => ({
      id: key,
      ...JSON.parse(localStorage.getItem(key))
    }));
    setProductList(storedProducts);

    //counter logic
    const initialCounter = storedProducts.reduce((total, product) => total + parseFloat(product.Price), 0);
    setCounter(initialCounter);
  }, [props.data]);


  const handleDelete = (product) => {
    const updatedList = productList.filter((p) => p.id !== product.id);

    // Update state and local storage
    setProductList(updatedList);
    localStorage.removeItem(product.id);

    setCounter((prev) => prev - parseFloat(product.Price));
  };


  return (
    <div className="contents-container">
      <div className="table_container">
        <div className="table">
          <ul id="table1" className="list-group">
            <h4>Product List</h4>
            {productList.map((product) => (
              <li key={product.id} className="list-group-item">
                Product ID: {product.ID} , Selling Price: {product.Price} , Product Name: {product.Name}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(product)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="counter">
            <h4>Total Amount: {counter}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
