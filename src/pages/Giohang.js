import React, { useEffect, useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import SignIn from '../components/SignIn';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GioHang = (props) => {
     //
    const saveData =  JSON.stringify(props.location.url);
    const saveImg =  JSON.stringify(props.location.img);
    
    if (saveData) {
        localStorage.setItem('takeData', saveData)
        localStorage.setItem('takeImg', saveImg) // set ảnh chọn
    }
    let takeData = JSON.parse(localStorage.getItem('takeData'));
    let takeImg = JSON.parse(localStorage.getItem('takeImg'));
    // set ảnh = ảnh đã chọn
    if(takeData){
        takeData.img = takeImg
    }
    const [info,setInfo] = useState(); // lấy thông tin sản phẩm
    let products = [];
    useEffect(() => {
        // let products = [];
        // Nếu có sản phẩm trong localstorage
        if(localStorage.getItem('products') !==null){
            products = JSON.parse(localStorage.getItem('products'));
            let arr = [];
            for(let each of products){
                arr.push(each.img)
            }
            
            if(takeData){
                if(!arr.includes(takeData.img)){ // arr ảnh không có ảnh chọn thì đẩy sản phẩm vào giỏ hàng
                    products.push(takeData);
                }
            } 
        }else{products.push(takeData);} //chưa có sản phẩm trong local thì đẩy data vào local
        
        localStorage.setItem('products', JSON.stringify(products));
    },[products]);
    
    // đợi data rồi set data cho info
    let detailProduct = async() =>{
        const res = await JSON.parse(localStorage.getItem('products'));
        
        setInfo(res);
    }
    useEffect(() => {
        detailProduct()
    },[])

    // thay đổi chọn số lượng sản phẩm
    const [qty,setQty] = useState()
    
    const changeTest = (e) => {
        setQty(e.target.value)
    }
    
    const [d,setD] = useState();

    let money = 0;
    
    const changeCount = (p,i) => {
        setD(qty* p.price)
        if(qty<=0 || qty==null){
            money=p.price;
            p.q = 1;
        }else{ money=qty * p.price; p.q=qty;}
        p.pay = money;
        
    }

    // thành tiền cho mỗi sản phẩm
    let payment=0;
    useMemo(() => {
        let c=0
        let b=info;
        if(b){
            for(let i=0; i< b.length; i++){
                c += b[i].pay
            }
        }
        payment=c
    })
   
    // Xóa sản phẩm
    const handleDelete = (p,i) =>{
       if(i===0){
           products.shift();
       }else{
            products.splice(i,1)
       }
        localStorage.removeItem('takeData');
        localStorage.setItem('products', JSON.stringify(products))
        window.location.reload()
    }

    // Xóa cả giỏ hàng
    let abcd =[]
    const handleDeleteAll = () => {
        localStorage.removeItem('takeData');
        localStorage.setItem('products', JSON.stringify(abcd))
        window.location.reload();
    }
    if(localStorage.getItem('users')){
        return (
            <div>
                <Header></Header>
                <div className="head-line">
                    <div className="container">
                        <Link to="">Trangchu</Link>
                        &nbsp; / &nbsp;
                        <Link to="">Dongho</Link>
                    </div>
                </div>
                <section className="content">
                    <div className="container">
                        <div className="content-main">
                            <div className="main-title">
                                <h1><Link to="">GIỎ HÀNG</Link></h1>
                            </div>
                            <form>
                                <table >
                                    <tbody>
                                        <tr>
                                            <td align="center" className="td-stt">STT</td>
                                            <td align="center" className="td-imgImage">ẢNH</td>
                                            <td align="center" className="td-name">TÊN SẢN PHẨM</td>
                                            <td align="center" className="td-quantity">SỐ LƯỢNG</td>
                                            <td align="center" className="td-priceText">ĐƠN GIÁ</td>
                                            <td align="center" className="td-priceText">THÀNH TIỀN</td>
                                            <td align="center" className="td-delete">XÓA</td>
                                        </tr>
                                    {info  ? info.map((p, index) => (
                                        <tr key={index.toString()} >
                                            <td align="center" className="td-stt">{index + 1}</td>
                                            <td align="center" className="td-imgImage"><img src ={p.img} className="td-image"></img></td>
                                            <td align="center" className="td-name">{p.decription}</td>
                                            <td align="center" className="td-quantity">  
                                                <TextField
                                                    type="number"
                                                    InputProps={{ inputProps: { min: 1, max: 10 } }}
                                                    onChange={changeTest} onKeyUp={() => {changeCount(p,index) }}
                                                    required
                                                    defaultValue={1}
                                                />
                                            </td>
                                            <td align="center" className="td-price">{p.price}</td>
                                            <td align="center" className="td-price">{p.pay}</td>
                                            <td align="center" className="td-delete">
                                                <button className="button-delete" onClick={() => {handleDelete(p,index)}} >
                                                    <DeleteIcon   />
                                                </button>
                                        
                                            </td>
                                        </tr>
                                    )) :(<></>) }
                                    </tbody>
                                </table>
                                <div align="right" className="cart-pay">Tổng tiền thanh toán:<span >{payment.toLocaleString()} VND</span></div>
                                <div align="right">
                                    <button className="button-payment"onClick={ handleDeleteAll }>
                                        XÓA GIỎ HÀNG
                                    </button>
                                    <button  className="button-payment" >
                                        <Link to={{pathname: '/thanhtoan', dataPay: info, moNey: payment}}>THANH TOÁN</Link>
                                    </button>
                                    
                                </div>
                            </form>
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


export default GioHang;