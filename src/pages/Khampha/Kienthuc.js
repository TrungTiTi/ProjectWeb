import React from 'react';
import { Link} from "react-router-dom";
import SignIn from '../../components/SignIn';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const Kienthuc = () => {
    if(localStorage.getItem('users')){
    return (
        <div>
            <Header></Header>
            <div className="head-line">
                <div className="container">
                    <Link to="/">Trangchu</Link>
                </div>
            </div>
            <section className="content">
                <div className="container">
                    <div className="content-main">
                        <div className="main-title">
                            <h1>KHÁM PHÁ</h1>
                        </div>
                        <div className="main-box">
                            <div className="main-products" >
                                <div className="products-img">
                                    <Link to="/khampha/kienthuc1"><img src="../image/neymar-messi.jpg" alt="t" /></Link>
                                </div>
                                <h3><Link to="/khampha/kienthuc1">Messi, Neymar hay nhất Copa America 2021</Link></h3>
                            </div> 
                            <div className="main-products" >
                                <div className="products-img">
                                    <Link to="/khampha/kienthuc2"><img src="../image/vu-hp.jpg" alt="t" /></Link>
                                </div>
                                <h3><Link to="/khampha/kienthuc2">Vũ - "Hoàng tử Indie" của Việt Nam bước ra biển lớn</Link></h3>
                            </div> 
                            <div className="main-products" >
                                <div className="products-img">
                                    <Link to="/khampha/kienthuc3"><img src="../image/euro2020.jpg" alt="t" /></Link>
                                </div>
                                <h3><Link to="/khampha/kienthuc3">Chung Kết EURO 2020</Link></h3>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );}else{
        return(
            <>
                <SignIn></SignIn>
            </>
        )
    }
};

export default Kienthuc;