import NewItem from "./new-item";

export default function Page(quantity, increment, decrement){

    let btnDisabled = false;
    if( quantity >= 20 ){
        increment.btnDisabled = true;
    }
    if( quantity )

    return(
    <main className="p-5">
        <NewItem />
    </main>
    );

}