"use client"

import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    let btnDisabled = false;

    const increment = () => {
        if( quantity < 20 ){setQuantity(quantity + 1)
        }
        if( quantity >= 20 ){
            btnDisabled = true;}
    };

    let btnStyles = "bg-blue-600 text-white rounded py-2 px-4 mt-5 mr-3 hover:bg-blue-400 active:bg-yellow-600 disabled:bg-gray-500";

    return (
            <div className="bg-orange-300 p-5">
                <p className="text-2xl lg">{quantity}</p>
                <button className={btnStyles} onClick={ increment } disabled={btnDisabled}>Increase</button>

            </div>

    );

}