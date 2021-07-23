import React, {useEffect, useMemo} from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

import { useProduct } from "../redux/hooks/Product";


const Trangchu = () =>{

    const { products, action } = useProduct();
    let lengthP =products.data.length;
    
    for(let i=0; i<lengthP;i++){
        if(products.data[i].lable === 'RL'){
            console.log('abs', products.data[i])
        }
    }
    useEffect(() => {
        action.getProduct();
    }, []); 

    const arr =[];
    useMemo(() => {
        
        for(let i = 0; i < 6; i++){
            arr.push(products.data[i]);
        }
    },[products]);

    const TTProduct = () => {
 
            return arr.map((p, index) => ( 
                                                   
                <div className="main-products" key= {index.toString()}>
                    <div className="products-img">
                    <Link to={{ pathname:`/detail/${p.id}`, id : p.id, url: p }}><img src={p.img.image} /></Link>
                    </div>
                    <h3><Link to={{ pathname:"/detail", url: p }} >{p.decription}</Link></h3>
                    <div className="products-lable">{p.label}</div>
                    <div className="products-price">{p.price}</div>
                </div>  
                    ))     
    }
 
    return(
        
        // <Router>
         <div>
        <section id="slider">

            <figure>
                <img src="./image/slide1.png" alt="t" />
                <img src="./image/slide2.png" alt="t" />
                <img src="./image/slide3.png" alt="t" />
                <img src="./image/slide1.png" alt="t" />
                <img src="./image/slide2.png" alt="t" />
            </figure>
            
        </section>
        <section className="content">
            <div className="container">
                <div className="content-title">
                    <div className="title-img">
                        <Link to=""><img src="./image/iphone.jpg" alt="t" />
                            <p>IPHONE</p>
                        </Link>
                    </div>
                    <div className="title-img">
                        <Link to=""><img src="./image/hublot.png" alt="t" />
                            <p>HUBLOT</p>
                        </Link>
                    </div>
                </div>

                {   
                    lengthP &&(
                <div className="content-main">
                    <div className="main-title">
                        <h1><Link to="">ROLEX</Link></h1>
                    </div>
                    <div className="main-box">
                    
                        { 
                             <TTProduct />                              
                               
                        }  
                             
                    
                    
                    </div>

                </div>
                )
                }
                    
            </div>
        </section>
        </div>
        // </Router>
    )
}

export default Trangchu;