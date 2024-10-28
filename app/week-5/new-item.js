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
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(event);

        const item = {
            name,
            category,
            quantity
        }
        
        console.log(item);
        alert("Added name: " + name + " category: " + category + " quantity: " + quantity);
        console.log(name, category, quantity);
        reset();
    };

    const reset = () => {
        setName("");
        setCategory("produce");
        setQuantity(1);
    }

    const categoryOptions = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"];

    let btnStyles = "bg-blue-600 text-white rounded py-2 px-4 mt-5 mr-3 hover:bg-blue-400 active:bg-yellow-600 disabled:bg-red-400";

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" />
            </div>
            <div className="bg-orange-300 p-5">
                <p className="text-2xl lg">{quantity}</p>
                <button className={btnStyles} onClick={ increment } disabled={incBtnDisabled}>Increase</button>
                <button className={btnStyles} onClick={ decrement } disabled={decBtnDisabled}>Decrease</button>
            </div>
            <div>
                <label>Category:</label>
                <select>
                    <option></option>
                </select>
            </div>
            <div>
                <button type="submit">Add Item</button>
            </div>
        </form>

    );

}