import React, {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import getProduct from '../data/Product';
import { useProduct } from '../redux/hooks/Product';

const Header = () =>{

    // 
    const { products, action } = useProduct();
    let lengthP =products.data.length;
   
    useEffect(() => {
        action.getProduct();
    }, []); 
    // 
    const show = useRef();
    
    const openMenu = () =>{

        const showMenu= show.current.style;

        if(showMenu.left === '0px'){
            showMenu.left = '-100%';
        }else{
            showMenu.left = '0px';
        }
    
    }
    
    let rolexBrand = [];
    let hublotBrand = [];
    let patekBrand = [];
    let audemarsBrand = [];
    
    for(let i = 0; i < lengthP; i++){
           
        switch (products.data[i].brand) {
            case 'ROLEX':
                rolexBrand.push(products.data[i]);
                break;
            case 'HUBLOT':
                hublotBrand.push(products.data[i]);
                break;
            default:
                break;
        }
    }
    
   
    
    return(
        
        <header className="header"  >

            <div className="header-container">
                <div className="header-top ">

                    <div className="header-logo">
                        <ul>
                            <li id="icon-bar"><i className="fa fa-bars" onClick = {openMenu} ></i></li>
                            <li ><img src="/logo192.png" alt="ok" /></li>
                            <li id="icon-carts"> <i className="fa fa-shopping-cart" ></i></li>
                        </ul>
                    </div>

                    <form>
                        <input type="text" placeholder="search"></input> 
                        <i className="fa fa-search" ></i>
                    </form>
                    
                    <div className="header-icon">
                        <i className="fa fa-shopping-cart" ></i>
                    </div>
                </div>
                <div className="header-main">
                    <div className="header-menu" ref={show}  >
                        <i className="fa fa-times" ></i>
                        <ul id="MenuItem">
                            
                            <li><Link to="/">TRANG CHỦ</Link></li>
                            <li><Link to="/dienthoai">ĐIỆN THOẠI</Link>
                            <div className="dropdown">
                                   
                                   <div className="dropdown-title">
                                       <strong>ĐIỆN THOẠI</strong>
                                       <hr />
                                   </div>
                                  <div className="dropdown-content">
                                      <div className="dropdown-content1">
                                           <strong>THƯƠNG HIỆU</strong>
                                           <div>
                                               <ul>
                                                   <li><Link to="">IPHONE</Link></li>
                                                   <li><Link to="">SAMSUNG</Link></li>
                                                   <li><Link to="">XIAOMI</Link></li>
                                                   <li><Link to="">OPPO</Link></li>
                                                   <li><Link to="">REALME</Link></li>
                                               </ul>
                                               <ul>
                                                   <li><Link to="">HUAWEI</Link></li>
                                                   <li><Link to="">VIVO</Link></li>
                                                   <li><Link to="">VSMART</Link></li>
                                                   <li><Link to="">NOKIA</Link></li>
                                               </ul>
                                           </div>
                                      </div>
                                      <div className="dropdown-content2">
                                           <strong>KHOẢNG GIÁ</strong>
                                           <ul>
                                               <li><Link to="">Dưới 1 triệu</Link></li>
                                               <li><Link to="">Từ 1 đến 5 triệu</Link></li>
                                               <li><Link to="">Từ 5 đến 10 triệu</Link></li>
                                               <li><Link to="">Trên 10 triệu</Link></li>
                                           </ul>
                                      </div>
                                  </div>

                               </div>
                            </li>
                            <li><Link to="/dongho" >ĐỒNG HỒ</Link>
                                <div className="dropdown">
                                   
                                   <div className="dropdown-title">
                                       <strong>ĐỒNG HỒ</strong>
                                       <hr />
                                   </div>
                                  <div className="dropdown-content">
                                      <div className="dropdown-content1">
                                           <strong>THƯƠNG HIỆU</strong>
                                           <div>
                                               <ul>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: rolexBrand }} >PATEK PHILIPE</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: hublotBrand }} >AUDEMARS PIGUET</Link></li>
                                                   <li><Link to="">VACHERON CONSTANTIN</Link></li>
                                                   <li><Link to="">TAG HEUER</Link></li>
                                                   <li><Link to="">JAEGER-LECOULTRE</Link></li>
                                               </ul>
                                               <ul>
                                                   <li><Link to="">ROLEX</Link></li>
                                                   <li><Link to="">HUBLOT</Link></li>
                                                   <li><Link to="">BREGUEST & FILS</Link></li>
                                                   <li><Link to="">CHOPARD</Link></li>
                                                   <li><Link to="">CITIZEN</Link></li>
                                               </ul>
                                           </div>
                                      </div>
                                      <div className="dropdown-content2">
                                           <strong>KHOẢNG GIÁ</strong>
                                           <ul>
                                               <li><Link to="">Dưới 10 triệu</Link></li>
                                               <li><Link to="">Từ 10 đến 50 triệu</Link></li>
                                               <li><Link to="">Từ 50 đến 100 triệu</Link></li>
                                               <li><Link to="">Trên 100 triệu</Link></li>
                                           </ul>
                                      </div>
                                  </div>

                               </div>
                            </li>
                            <li><Link to="">PHỤ KIỆN</Link>
                                <div className="dropdown">
                                   
                                    <div className="dropdown-title">
                                       <strong>PHỤ KIỆN</strong>
                                       <hr />
                                    </div>
                                    <div className="dropdown-content">
                                      <div className="dropdown-content1">
                                           <strong>Phụ Kiện Điện Thoại</strong>
                                           <div>
                                               <ul>
                                                   <li><Link to="">Pin sạc dự phòng</Link></li>
                                                   <li><Link to="">Loa, tai nghe</Link></li>
                                                   <li><Link to="">Củ sạc, cáp sạc</Link></li>
                                                   <li><Link to="">Giá đỡ điện thoại</Link></li>
                                                   
                                               </ul>
                                               <ul>
                                                    <li><Link to="">Thẻ nhớ, usb</Link></li>
                                                    <li><Link to="">Bao da, ốp lưng</Link></li>
                                               </ul>
                                           </div>
                                      </div>
                                      <div className="dropdown-content2">
                                           <strong>Phụ Kiện Đồng Hồ</strong>
                                           <ul>
                                                <li><Link to="">Hộp lên cót đồng hồ</Link></li>
                                                <li><Link to="">Dây đeo đồng hồ</Link></li>
                                                <li><Link to="">Hộp đựng đồng hồ</Link></li>
                                                <li><Link to="">Các phụ kiện khác</Link></li>
                                                   
                                           </ul>
                                      </div>
                                  </div>
                               </div>
                            </li>
                            <li><Link to="">KHÁM PHÁ</Link>
                                <div className="dropdown">
                                   
                                   <div className="dropdown-title">
                                      <strong>KHÁM PHÁ</strong>
                                      <hr />
                                   </div>
                                   <div className="dropdown-content">
                                        <ul>
                                            <li><Link to="">Kiến thức</Link></li>
                                            <li><Link to="">Tin tức</Link></li>
                                            <li><Link to="">Hướng dẫn </Link></li>
                                        </ul>  
                                    </div>
                                </div>
                            </li>
                            <li><Link to="">DỊCH VỤ</Link>
                                <div className="dropdown">
                                   
                                   <div className="dropdown-title">
                                      <strong>DỊCH VỤ</strong>
                                      <hr />
                                   </div>
                                   <div className="dropdown-content">
                                        <ul>
                                            <li><Link to="">Bảo hành  sửa chữa</Link></li>
                                            <li><Link to="">Thông tin</Link></li>
                                            <li><Link to="">Mua lại điện thoại cũ </Link></li>
                                        </ul>  
                                    </div>
                                </div>
                            </li>
                            <li><Link to="">ĐĂNG NHẬP</Link></li>
                        </ul>
                    </div>
                    <form>
                        <input type="text" placeholder="search"></input> 
                        <i className="fa fa-search" ></i>
                    </form>
                </div>
            </div>

        </header>
       
    )
}

export default Header;