import React, {useCallback, useEffect, useRef, useState} from 'react';
import { Link} from 'react-router-dom';

import { useProduct } from '../redux/hooks/Product';
import {usePhone} from '../redux/hooks/Phone';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Header = () =>{

    const { products, action } = useProduct();
    let lengthP =products.data.length;
   
    const { phones, actions } = usePhone();
    let lengthPh =phones.data.length;

    useEffect(() => {
        action.getProduct();
        actions.getPhone();
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
    const NoneVN = (str) => {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
        str = str.replace(/\u02C6|\u0306|\u031B/g, "");
        return str;
    }
  const [sP, setSP]= useState();
    const Search = () => {
        let phone = phones.data;
        let product = products.data;
        let valueInput = document.getElementById("iconSearch").value;
        let searchProduct = [];
        for(let i=0; i< lengthP; i++){
            if(valueInput && (NoneVN(product[i].decription ).includes(valueInput.toLowerCase()))){
                searchProduct.push(product[i])
            }else{
                console.log('aaaaaaaaaaaaaa')
            }
        }
        for(let i=0; i< lengthPh; i++){
            if(valueInput && (NoneVN(phone[i].decription ).includes(valueInput.toLowerCase()))){
                searchProduct.push(phone[i])
            }
        }
        setSP(searchProduct);  
    }
    let noneBrand = [];
    let hublotBrand = []; let patekBrand = []; let audemarsBrand = []; let tagBrand = []; let vacheronBrand = [];
    let iphoneBrand = []; let samsungBrand = []; let xiaomiBrand = []; let oppoBrand = []; let realmeBrand = []; let vivoBrand = []; let vsmartBrand = [];
    let lFive =[]; let cFive=[]; let rFive=[]; let lFifty =[]; let cFifty=[]; let rFifty=[];
    for(let i = 0; i < lengthP; i++){
           
        switch (products.data[i].brand) {
            case 'HUBLOT':
                hublotBrand.push(products.data[i]);
                break;
            case 'PATEK-PHILIPE':
                patekBrand.push(products.data[i]);
                break;
            case 'TAG-HEUER':
                tagBrand.push(products.data[i]);
                break;
            case 'AUDEMARS-PIGUET':
                audemarsBrand.push(products.data[i]);
                break;
            case 'VACHERON-CONSTANTIN':
                vacheronBrand.push(products.data[i]);
                break;
            default:
                break;
        }
        if(products.data[i].price < 50000000){
            lFifty.push(products.data[i]);
       }else if(products.data[i].price >= 50000000 && products.data[i].price < 100000000){
           cFifty.push(products.data[i]);
       }else{
           rFifty.push(products.data[i])
       }
    }

    for(let i=0; i<lengthPh; i++){
        switch (phones.data[i].brand) {
            case 'IPHONE':
                iphoneBrand.push(phones.data[i]);
                break;
            case 'SAMSUNG':
                samsungBrand.push(phones.data[i]);
                break;
            case 'XIAOMI':
                xiaomiBrand.push(phones.data[i]);
                break;
            case 'OPPO':
                oppoBrand.push(phones.data[i]);
                break;
            case 'VIVO':
                vivoBrand.push(phones.data[i]);
                break;  
            case 'VSMART':
                vsmartBrand.push(phones.data[i]);
                break; 
            case 'REALME':
                realmeBrand.push(phones.data[i]);
                break; 
            default:
                break;
        }
       if(phones.data[i].price < 5000000){
            lFive.push(phones.data[i]);
       }else if(phones.data[i].price >= 5000000 && phones.data[i].price < 10000000){
           cFive.push(phones.data[i]);
       }else{
           rFive.push(phones.data[i])
       }
    }
   
    const [noteP,setNoteP] =useState();
    const hand = useCallback(async() => {
        let res = await JSON.parse(localStorage.getItem('products'));
        if(res){
            setNoteP(res.length);
        }
        
        console.log(noteP)
    })
    useEffect(() => {
        hand();
    },[JSON.parse(localStorage.getItem('products'))])
    
    return(
        
        <header className="header"  >

            <div className="header-container">
                <div className="header-top ">

                    <div className="header-logo">
                        <ul>
                            <li id="icon-bar"><DehazeIcon onClick = {openMenu} className="icon-cartIp " /> </li>
                            <li ><img src="/logo192.png" alt="ok" /></li>
                            <li id="icon-carts"> 
                            <Link to="/giohang">
                            <Badge badgeContent={noteP} color="secondary">
                                <ShoppingCartIcon className="icon-cartIp " />
                               
                            </Badge></Link>
                            </li>
                        </ul>
                    </div>

                    <form>
                        <input type="text" placeholder="search" id="iconSearch" ></input> 
                       <div className="icon-search"  onClick={Search} >
                            <Link to={{pathname: '/dongho/watch' , bProduct: sP }}> 
                                <SearchIcon />
                            </Link>
                       </div>
                    </form>
                    
                    <div className="header-icon">
                    <Link to="/giohang">
                        <Badge badgeContent={noteP} color="secondary">
                            <ShoppingCartIcon className="icon-carts " />
                            
                        </Badge>
                        </Link>
                    </div>
                </div>
                <div className="header-main">
                    <div className="header-menu" ref={show}  >
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
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: iphoneBrand }}>IPHONE</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: xiaomiBrand }}>XIAOMI</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: oppoBrand }}>OPPO</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: realmeBrand }}>REALME</Link></li>
                                               </ul>
                                               <ul>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: samsungBrand }}>SAMSUNG</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: vivoBrand }}>VIVO</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: vsmartBrand }}>VSMART</Link></li>
                                               </ul>
                                           </div>
                                      </div>
                                      <div className="dropdown-content2">
                                           <strong>KHOẢNG GIÁ</strong>
                                           <ul>
                                               <li><Link to={{ pathname: '/dongho/watch', bProduct: lFive }}>Dưới 5 triệu</Link></li>
                                               <li><Link to={{ pathname: '/dongho/watch', bProduct: cFive }}>Từ 5 đến 10 triệu</Link></li>
                                               <li><Link to={{ pathname: '/dongho/watch', bProduct: rFive }}>Trên 10 triệu</Link></li>
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
                                                    <li><Link to={{ pathname: '/dongho/watch', bProduct: hublotBrand }}>HUBLOT</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: audemarsBrand }} >AUDEMARS PIGUET</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: vacheronBrand }}>VACHERON CONSTANTIN</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: noneBrand }}>ROLEX</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: noneBrand }}>JAEGER-LECOULTRE</Link></li>
                                               </ul>
                                               <ul>
                                                    <li><Link to={{ pathname: '/dongho/watch', bProduct: tagBrand }}>TAG HEUER</Link></li>
                                                    <li><Link to={{ pathname: '/dongho/watch', bProduct: patekBrand }} >PATEK PHILIPE</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: noneBrand }}>BREGUEST & FILS</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: noneBrand }}>CHOPARD</Link></li>
                                                   <li><Link to={{ pathname: '/dongho/watch', bProduct: noneBrand }}>CITIZEN</Link></li>
                                               </ul>
                                           </div>
                                      </div>
                                      <div className="dropdown-content2">
                                           <strong>KHOẢNG GIÁ</strong>
                                           <ul>
                                               <li><Link to={{ pathname: '/dongho/watch', bProduct: lFifty }}>Dưới 50 triệu</Link></li>
                                               <li><Link to={{ pathname: '/dongho/watch', bProduct: cFifty }}>Từ 50 đến 100 triệu</Link></li>
                                               <li><Link to={{ pathname: '/dongho/watch', bProduct: rFifty }}>Trên 100 triệu</Link></li>
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
                            <li><Link to="/kapa">KHÁM PHÁ</Link>
                                <div className="dropdown">
                                   
                                   <div className="dropdown-title">
                                      <strong>KHÁM PHÁ</strong>
                                      <hr />
                                   </div>
                                   <div className="dropdown-content">
                                        <ul>
                                            <li><Link to="/khampha/kienthuc1">Thể thao</Link></li>
                                            <li><Link to="/khampha/kienthuc2">Âm nhạc</Link></li>
                                            <li><Link to="/khampha/kienthuc3">Tin tức</Link></li>
                                        </ul>  
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/dv">DỊCH VỤ</Link>
                                <div className="dropdown">
                                   
                                   <div className="dropdown-title">
                                      <strong>DỊCH VỤ</strong>
                                      <hr />
                                   </div>
                                   <div className="dropdown-content">
                                        <ul>
                                            <li><Link to="/dichvu/tintuc1">Thông tin</Link></li>
                                            <li><Link to="/dichvu/tintuc2">Điện thoại </Link></li>
                                            <li><Link to="/dichvu/tintuc3">Điện thoại ra mắt</Link></li>
                                        </ul>  
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <form>
                        <input type="text" placeholder="search"></input> 
                        <div className="icon-search"  onClick={Search} >
                            <Link to={{pathname: '/dongho/watch' , bProduct: sP }}> 
                                <SearchIcon />
                            </Link>
                       </div>
                    </form>
                </div>
            </div>

        </header>
       
    )
}

export default Header;