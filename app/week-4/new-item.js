"use client"

import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1)
        if( quantity >= 20){
            setQuantity(20)
        }
    }

    const decrement = () => {
        setQuantity(quantity - 1)
        if( quantity <= 1){
            setQuantity(1)
        }
    }

    return (

            <div className="bg-orange-300 p-5">
                <span className="text-2xl lg">{quantity}</span>
                <button onClick={ increment }>Increase</button>
                <button onClick={ decrement }>Decrease</button>
            </div>

    );

}