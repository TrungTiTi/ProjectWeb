import React from 'react';
import { Link} from "react-router-dom";
import SignIn from '../../components/SignIn';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Tintuc = () => {
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
                            <h1>DỊCH VỤ</h1>
                        </div>
                        <div className="main-box">
                            <div className="main-products" >
                                <div className="products-img">
                                    <Link to="/dichvu/tintuc1"><img src="../image/kienthuc-lichsu.jpg" alt="t" /></Link>
                                </div>
                                <h3><Link to="/dichvu/tintuc1">Lịch sử thương hiệu đồng hồ Rolex chính hãng Thụy Sỹ</Link></h3>
                            </div> 
                            <div className="main-products" >
                                <div className="products-img">
                                    <Link to="/dichvu/tintuc2"><img src="../image/1.png" alt="t" /></Link>
                                </div>
                                <h3><Link to="/dichvu/tintuc2">Đâu là chiếc điện thoại được mong đợi nhất sẽ ra mắt nửa cuối năm 2021?</Link></h3>
                            </div> 
                            <div className="main-products" >
                                <div className="products-img">
                                    <Link to="/dichvu/tintuc3"><img src="../image/cauhinhse3.jpg" alt="t" /></Link>
                                </div>
                                <h3><Link to="/dichvu/tintuc3">Rò rỉ hình ảnh ốp lưng của iPhone 13 Pro cho thấy cụm camera...</Link></h3>
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

export default Tintuc;