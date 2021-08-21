import React from 'react';
import { Link} from "react-router-dom";
import SignIn from '../components/SignIn';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Thanhtoan = (props) => {
    
    const dataPay =  JSON.stringify(props.location.dataPay);
    const moNey =  JSON.stringify(props.location.moNey);
    if (dataPay) {
        localStorage.setItem('PayMent', dataPay)
        localStorage.setItem('totalMoney', moNey)
    }
    let PayMent = JSON.parse(localStorage.getItem('PayMent'));
    let totalMoney = JSON.parse(localStorage.getItem('totalMoney'));

    if(localStorage.getItem('users')){
    return (
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
                            <h1><Link to="">THANH TOÁN</Link></h1>
                        </div>
                        <table >
                            <tbody>
                                <tr>
                                    <td align="center" className="td-stt">STT</td>
                                    <td align="center" className="td-imgImage">ẢNH</td>
                                    <td align="center" className="td-name">TÊN SẢN PHẨM</td>
                                    <td align="center" className="td-quantity">SỐ LƯỢNG</td>
                                    <td align="center" className="td-priceText">ĐƠN GIÁ</td>
                                    <td align="center" className="td-priceText">THÀNH TIỀN</td>
                                </tr>
                                {PayMent  ? PayMent.map((p, index) => (
                                <tr key={index.toString()} >
                                    <td align="center" className="td-stt">{index + 1}</td>
                                    <td align="center" className="td-imgImage"><img src ={p.img} className="td-image" /></td>
                                    <td align="center" className="td-name">{p.decription}</td>
                                    <td align="center" className="td-quantity"> {p.q}  </td>
                                    <td align="center" className="td-price">{p.price}</td>
                                    <td align="center" className="td-price">{p.pay}</td>
                                </tr>
                                )) :(<></>) }
                            </tbody>
                        </table>
                        <div align="right" className="cart-pay">Tổng tiền thanh toán:<span >{totalMoney.toLocaleString()} VND</span></div>
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
}

export default Thanhtoan;