import React from "react";
import { Link} from "react-router-dom";
import SignIn from '../components/SignIn';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WatchBrand = (props) => {
    
    const dataBrand =  JSON.stringify(props.location.bProduct);
    
    if (dataBrand) {
        localStorage.setItem('watchP', dataBrand)
    }
    let watchP = JSON.parse(localStorage.getItem('watchP'));

    if(localStorage.getItem('users')){
    return(
        <div>
            <Header></Header>
            <div className="head-line">
                <div className="container">
                    <Link to="">Trangchu</Link>
                </div>
            </div>
            <section className="content">
                <div className="container">
                        <div className="content-main">
                            <div className="main-title">
                                <h1>SẢN PHẨM TÌM KIẾM</h1>
                            </div>
                            <div className="main-box">

                            </div>
                            <div className="main-box">
                                {
                                    watchP ? (watchP.map((p, index) => ( 
                                                    
                                        <div className="main-products" key= {index.toString()}>
                                            <div className="products-img">
                                                <Link to={{pathname:"/detail", url:p}}><img src={p.img[0].image} /></Link>
                                            </div>
                                            <h3><Link to={{pathname:"/detail", url:p}}>{p.decription}</Link></h3>
                                            <div className="products-lable">{p.label}</div>
                                            <div className="products-price">{p.price.toLocaleString()} VNĐ</div>
                                        </div>  
                                            ))) : (<div>khong tim thay</div>)  
                                }
                            </div>
                        </div>
                    
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

export default WatchBrand;