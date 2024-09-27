

export default function Item({item}) {

    let {name, quantity, category} = item;

    return (
        <div className="inline-block bg-green-500 border border-red-500 my-5 p-3 mx-3">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
}