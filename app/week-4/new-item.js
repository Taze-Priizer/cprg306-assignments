"use client"

import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        
    }

    return (
        <form>
            <div>
                <span>{quantity}</span>
                <button>Increment</button>
                <button>Decrement</button>
            </div>
        </form>
    );

}