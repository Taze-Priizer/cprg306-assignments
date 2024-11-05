"use client"

import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");


    let incBtnDisabled = quantity >= 20 ? true : false;
    let decBtnDisabled = quantity <= 1 ? true : false;


    const increment = () => {
        if( quantity < 20 ){
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if( quantity > 1 ){
            setQuantity(quantity - 1);
        }
    };

    const handleNameChange = (event) => setName(event.target.value);
    const handleQuantityChange = (event) => setQuantity(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(event);

        let itemObject = {
            itemname: name,
            itemcategory: category,
            itemquantity: quantity
        }
        
        alert(`
            Name: ${itemObject.itemname}
            Category: ${itemObject.itemcategory}
            Quantity: ${itemObject.itemquantity}
            `);
        reset();

        setName("");
        setCategory("");
        setQuantity("");
    };

    const reset = () => {
        setName("");
        setCategory("produce");
        setQuantity(1);
    }

    const categoryOptions = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"];

    let btnStyles = "bg-blue-600 text-white rounded py-2 px-4 mt-5 mr-3 hover:bg-blue-400 active:bg-yellow-600 disabled:bg-red-400";

    return (
        <form onSubmit={handleSubmit} className="p-5 bg-orange-300">
            <div className="mb-3">
                <label className="inline-block w-40 align-top">Name:</label>
                <input type="text"
                onChange={handleNameChange}
                value={name}
                className="px-2 py-0.5 rounded bg-blue-100 focus:bg-green-200 border border-teal-600" 
                />
            </div>
            <div className="bg-orange-300 p-5">
                <p className="text-2xl lg">{quantity}</p>
                <button className={btnStyles} onClick={ increment } disabled={incBtnDisabled}>Increase</button>
                <button className={btnStyles} onClick={ decrement } disabled={decBtnDisabled}>Decrease</button>
            </div>
            <div className="mb-3">
                <label className="inline-block w-40 align-top">Category:</label>
                <select
                onChange={handleCategoryChange}
                value={category}
                className="px-2 py-0.5 rounded bg-blue-100 focus:bg-green-200 border border-teal-600"
                >
                    <option>Category:</option>
                </select>
            </div>
            <div className="mb-3"> 
                <button type="submit" className="px-3 py-2 rounded text-white bg-green-600 hover:bg-green-500 active:bg-green-400">Add Item</button>
            </div>
        </form>

    );

}