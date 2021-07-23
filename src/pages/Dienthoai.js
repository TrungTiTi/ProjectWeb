import React, {useMemo, useEffect} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import { usePhone } from "../redux/hooks/Phone";

const Dienthoai = () => {

    const { phones, action } = usePhone();
    let lengthP =phones.data.length;

    useEffect(() => {
        action.getPhone();
    }, []); 

    return(
        <div>
            <div className="head-line">
                <div className="container">
                    <Link to="">Trangchu</Link>
                    &nbsp; / &nbsp;
                    <Link to="">Dongho</Link>
                </div>
            </div>
            <section className="content">
                <div className="container">
                    { lengthP && (
                        <div className="content-main">
                            <div className="main-title">
                                <h1><Link to="">ROLEX</Link></h1>
                            </div>
                            <div className="main-box">

                            </div>
                            <div className="main-box">
                                {
                                    phones.data.map((p, index) => ( 
                                                    
                                        <div className="main-products" key= {index.toString()}>
                                            <div className="products-img">
                                            <Link to=""><img src={p.image} /></Link>
                                            </div>
                                            <h3><Link to="">{p.decription}</Link></h3>
                                            <div className="products-lable">{p.lable}</div>
                                            <div className="products-price">{p.price}</div>
                                        </div>  
                                            ))     
                                }
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Dienthoai;