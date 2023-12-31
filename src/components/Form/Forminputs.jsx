import React, { useState } from 'react';

const Forminputs = (props) => {
  const [product, setProduct] = useState({
    ID: '',
    Price: '',
    Name: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(value);
    setProduct((prevProduct) => ({
      ...prevProduct,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the product object in local storage
    localStorage.setItem(product.ID, JSON.stringify(product));


    let entry = Object.keys(localStorage).map(key => ({
      id: key,
      ...JSON.parse(localStorage.getItem(key))
    }))
    props.onSubmit(entry)

    // Reset the form after submission
    setProduct({
      ID: '',
      Price: '',
      Name: '',
    });
  };

  return (
    <form id="register-form" className="resgister-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="ID" className="form-label">
          Product ID
        </label>
        <input
          type="number"
          className="form-control"
          id="ID"
          placeholder="Product ID"
          value={product.ID}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Price" className="form-label">
          Selling Price
        </label>
        <input
          type="number"
          className="form-control"
          id="Price"
          placeholder="Price"
          value={product.Price}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          id="Name"
          placeholder="Name"
          value={product.Name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="submit">
        <input type="submit" value="Add Product" className="btn btn-success" />
      </div>
    </form>
  );
};

export default Forminputs;
