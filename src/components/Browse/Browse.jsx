import React,{useState} from "react";
import { symbols } from "../../../public/assets/assets";
import "./Browse.css";
import Pointer from "../Pointer/Pointer";
import { packages } from "./helper";

const Browse = () => {
    const [menu,setMenu]=useState("birthday")
  return (
    <div className="browse">
      <Pointer title="What We Offer" />
      <h1>Browse Our Menu</h1>
      <ul className="menu">
        <li onClick={()=>setMenu('birthday')} className={menu==="birthday"?"active":""}> <img src={menu==="birthday"?symbols.menupointer:symbols.menupointerdeactive} alt="" />Brithdays</li>
        <li onClick={()=>setMenu('wedding')} className={menu==="wedding"?"active":""}> <img src={menu==="wedding"?symbols.menupointer:symbols.menupointerdeactive} alt="" />Weddings</li>
        <li onClick={()=>setMenu('ladin')} className={menu==="ladin"?"active":""}> <img src={menu==="ladin"?symbols.menupointer:symbols.menupointerdeactive} alt="" />Ladin</li>
        <li onClick={()=>setMenu('coporate')} className={menu==="corporate"?"active":""}> <img src={menu==="coporate"?symbols.menupointer:symbols.menupointerdeactive} alt="" />Corporate</li>
        <li onClick={()=>setMenu('party')} className={menu==="party"?"active":""}> <img src={menu==="party"?symbols.menupointer:symbols.menupointerdeactive} alt="" />Party</li>
        <li onClick={()=>setMenu('school')} className={menu==="school"?"active":""}> <img src={menu==="school"?symbols.menupointer:symbols.menupointerdeactive} alt="" />Schools</li>
      </ul>
      <div className="menu-list">
            {packages.map((item,index)=>{
                return (
                    <div key={index} className="menu-list-item">
                        <img src={item.image} alt=""/>
                        <p className="menu-list-item-name">{item.name}</p>
                        <p className="menu-list-item-desc">{item.description}</p>
                        <p className="menu-list-item-amt">Starting from Rs.{item.amount}</p>
                        <button>More details &rarr;</button>
                    </div>
                )
            })}
      </div>
    </div>
  );
};
export default Browse;
