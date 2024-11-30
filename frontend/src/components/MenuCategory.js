import ItemList from "./ItemList";
import {useState} from "react";

const MenuCategory = ({data, showItems, setshowIndex}) => {
    const handleClick = () => {
        setshowIndex()
    };
    return (
        <div>
            <div className="header w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-100 rounded-sm">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-md">{data.title}({data.itemCards.length})</span>
                    <span>⬇</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}
export default MenuCategory;