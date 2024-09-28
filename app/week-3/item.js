

export default function Item({item}) {

    let {name, quantity, category} = item;

    return (
        <div className="inline-block border-red-500 my-5 p-4 mx-4">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="font-semibold 2lg">Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
}