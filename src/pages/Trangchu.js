import React, {useEffect, useMemo} from 'react';
import { Link} from 'react-router-dom';

import { useProduct } from "../redux/hooks/Product";
import {usePhone} from "../redux/hooks/Phone";
import SignIn from '../components/SignIn';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Trangchu = () =>{

    const { products, action } = useProduct();
    let lengthP =products.data.length;
    
    const { phones, actions } = usePhone();
    let lengthPh =phones.data.length;
    useEffect(() => {
        action.getProduct();
        actions.getPhone();
    }, []); 

    const arr =[];
    const arr1 = [];
    useMemo(() => {
        
        for(let i = 0; i < 6; i++){
            arr.push(products.data[i]);
            arr1.push(phones.data[i]);
        }
    },[products,phones]);

    const TTProduct = () => {
            return arr.map((p, index) => (                               
                <div className="main-products" key= {index.toString()}>
                    <div className="products-img">
                    <Link to={{ pathname:`/detail/${p.id}`, id : p.id, url: p }}><img src={p.img[0].image} /></Link>
                    </div>
                    <h3><Link to={{ pathname:"/detail", url: p }} >{p.decription}</Link></h3>
                    <div className="products-lable">{p.label}</div>
                    <div className="products-price">{p.price.toLocaleString()} VNĐ</div>
                </div>  
                    ))     
    }
    const TTPhone = () => {
        return arr1.map((p, index) => (                               
            <div className="main-products" key= {index.toString()}>
                <div className="products-img">
                <Link to={{ pathname:`/detail/${p.id}`, id : p.id, url: p }}><img src={p.img[0].image} /></Link>
                </div>
                <h3><Link to={{ pathname:"/detail", url: p }} >{p.decription}</Link></h3>
                <div className="products-lable">{p.label}</div>
                <div className="products-price">{p.price.toLocaleString()} VNĐ</div>
            </div>  
                ))     
        }
    if(localStorage.getItem('users')){
    return(
         <div>
             <Header></Header>
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
                            <Link to="/dienthoai"><img src="./image/iphone.jpg" alt="t" />
                                <p>IPHONE</p>
                            </Link>
                        </div>
                        <div className="title-img">
                            <Link to="/dongho"><img src="./image/hublot.png" alt="t" />
                                <p>HUBLOT</p>
                            </Link>
                        </div>
                    </div>

                    {   
                        lengthP &&(
                    <div className="content-main">
                        <div className="main-title">
                            <h1><Link to="/dongho">ĐỒNG HỒ</Link></h1>
                        </div>
                        <div className="main-box">
                            { 
                                <TTProduct />                                   
                            }     
                        </div>
                    </div>
                    )
                    }

                    {
                        lengthPh &&(
                            <div className="content-main">
                            <div className="main-title">
                                <h1><Link to="/dienthoai">ĐIỆN THOẠI</Link></h1>
                            </div>
                            <div className="main-box">
                                { 
                                    <TTPhone />                                 
                                }     
                            </div>
                        </div>
                        )
                    }    
                </div>
            </section>
            <Footer></Footer>
        </div>
    )}else{
        return(
            <>
                <SignIn></SignIn>
            </>
        )
    }
}

export default Trangchu;