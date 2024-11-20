import Item from "./item";


export default function ItemList(props) {

    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      };
       
      const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
      const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
      const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
      const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
      const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
      const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
      const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
      const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
      const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
      const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
      const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };

    return(
        <div className="inline-block my-6 p-2 mx-2">
            <ul className="bg-amber-500 border-l-green-300 p-3"><Item item={item1}/></ul>
            <ul className="bg-emerald-400 p-3"><Item item={item2}/></ul>
            <ul className="bg-orange-300"><Item item={item3}/></ul>
            <ul className="bg-yellow-400"><Item item={item4}/></ul>
            <ul className="bg-green-800"><Item item={item5}/></ul>
            <ul className="bg-orange-400"><Item item={item6}/></ul>
            <ul className="bg-red-400"><Item item={item7}/></ul>
            <ul className="bg-red-500"><Item item={item8}/></ul>
            <ul className="bg-stone-400"><Item item={item9}/></ul>
            <ul className="bg-zinc-600"><Item item={item10}/></ul>
            <ul className="bg-slate-700"><Item item={item11}/></ul>
            <ul className="bg-pink-600"><Item item={item12}/></ul>
        </div>
    );
}