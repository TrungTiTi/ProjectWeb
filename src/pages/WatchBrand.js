import React, {useMemo, useEffect} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";


const WatchBrand = (props) => {
    console.log('abc',props.location.bProduct);
    
    const dataBrand =  JSON.stringify(props.location.bProduct);
    if (dataBrand) {
        localStorage.setItem('watchP', dataBrand)
    }
    let watchP = JSON.parse(localStorage.getItem('watchP'));

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
                    { watchP.length && (
                        <div className="content-main">
                            <div className="main-title">
                                <h1><Link to="">ROLEX</Link></h1>
                            </div>
                            <div className="main-box">

                            </div>
                            <div className="main-box">
                                {
                                    watchP.map((p, index) => ( 
                                                    
                                        <div className="main-products" key= {index.toString()}>
                                            <div className="products-img">
                                            <Link to={{pathname:"/detail", url:p}}><img src={p.img.image} /></Link>
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

export default WatchBrand;