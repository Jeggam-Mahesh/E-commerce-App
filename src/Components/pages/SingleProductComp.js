import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const SingleProductComp=(props)=>{
   const [value,setValue]=useState("");
   useEffect(()=>{
      axios.get(`https://e-commerce-app-6v8f.onrender.com/${props.value}`)
      .then((data)=>setValue(data.data)) 
     .catch((e)=>console.log("eeror",e))
 },[props.value])
    console.log("use effect",value,props)

    return( 
        <>
        <Navbar/>
        <h1>{props.product}</h1>
        <div  className="main_cotainer">
            {/* <div className="container1"></div> */}
            <div className="container2">
            {
             value&&value.filter((item)=>item.brand===props.product).map((item,index)=>{
                return (
                    <div className="gen" key={index}>
                    <Link to='/productdetails2' state={{index:item}} ><img src={item.image} alt='not' width='200px' height='200px' /></Link>
                    <h3>{item.product_tittle.slice(0,50)}</h3>
                <h3  className="price">Price:₹{item.price}</h3>
                <Link className="addtocartbtn" to='/productdetails2' state={{index:item}} ><button className='btn'>Add To Cart</button>
                </Link>
                    </div>
                )
            }) 
                     
            }
            </div>
        </div>
        </>
    ) 
}
export default SingleProductComp
