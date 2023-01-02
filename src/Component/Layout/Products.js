import React, { useState } from "react";
import Item from "./item";
import classes from './Products.module.css';

const DUMMY_PRODUCTS=[
    {
        id:'t1',
    name:"Tomato",
    price:50,
    quantity:25
},
    {
        id:'w1',
    name:"Wheat",
    price:50,
    quantity:25
},
    {
        id:'o1',
    name:"Onion",
    price:50,
    quantity:25
},
    {
        id:'b1',
    name:"Bengal Gram",
    price:50,
    quantity:25
},
    {
        id:'s1',
    name:"Soyabin",
    price:50,
    quantity:25
},
    {
        id:'c1',
    name:"Carrot",
    price:50,
    quantity:25
},
    {
        id:'g1',
    name:"Ground Nut",
    price:50,
    quantity:25
},
    {
        id:'m1',
    name:"Mango",
    price:50,
    quantity:25
},
    {
        id:'r1',
    name:"Red Chilly",
    price:50,
    quantity:25
},
    {
    id:'p1',
    name:"Potato",
    price:50,
    quantity:25
}
]
const Products=()=>{
    const [searchElement,setSearchElement]=useState('');
const productsAv=DUMMY_PRODUCTS.map(item=><Item name={item.name} key={item.id} id={item.id} price={item.price} quantity={item.quantity} />)
let FilteredProducts=productsAv.map(item=>item);
const searchHandler=(event)=>{
    setSearchElement(event.target.value);
}
if(searchElement.trim().length>0){
     FilteredProducts=productsAv.filter(elem=>{
        return elem.props.name.includes(searchElement);
    });
    if(FilteredProducts.length===0){
        FilteredProducts="No Results Found";
    }
}
    return <div className={classes.prod}>
            <input className={classes.input} type='text' placeholder="Search by name" onChange={searchHandler} />
             <div className={classes.list}>
                { FilteredProducts}
                </div>
    </div>
};

export default Products;