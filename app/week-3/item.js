

export default function Item({item}) {

    let {
        itemName:name,
        itemQuantity:quantity,
        itemCategory:category
    } = item;

    return (
        <div>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
}