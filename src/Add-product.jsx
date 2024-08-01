import axios from "axios";
import React, { useEffect, useState } from "react";

const Add = () => {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    dec: "",
    price: "",
    category:""
  });
  const [products, setProducts] = useState([]);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      product.title !== "" &&
      product.image !== "" &&
      product.dec !== "" &&
      product.price !== "" &&
      product.category!== ""
    ) {
      console.log(products);
      setProducts([...products, product]);
      await axios.post("http://localhost:3000/product", product);
    }
  };

  const getData = async () => {
    let res = await axios.get("http://localhost:3000/product");
    if (res) setProducts(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <div className="w-full bg-blue-500 text-center py-4 rounded-t-lg">
          <h1 className="text-2xl text-white font-bold">Add Product</h1>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            placeholder="Title"
            onChange={handleInput}
            className="input input-bordered w-full mt-1"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleInput}
            className="input input-bordered w-full mt-1"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="dec"
            value={product.dec}
            className="textarea textarea-bordered w-full mt-1"
            onChange={handleInput}
            placeholder="Description"
          ></textarea>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={product.price}
            name="price"
            placeholder="Price"
            onChange={handleInput}
            className="input input-bordered w-full mt-1"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Select Category</label>
          <select name="category" value={product.category} onChange={handleInput} className="select select-bordered w-full max-w-xs mt-1">
            <option disabled selected>
              Who shot first?
            </option>
            <option name="Car">Car</option>
            <option name="Tech">Tech</option>
            <option name="Food">Food</option>
          </select>
        </div>
        <button className="btn btn-blue w-full mt-6">Submit</button>
      </form>
    </div>
  );
};

export default Add;
