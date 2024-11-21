import Item from "./item";
import { useState } from "react";
import itemsJson from "./items.json";;

export default function ItemList(props) {

  const [sortBy, setSortBy] = useState("name");

    const sorted = items.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });

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