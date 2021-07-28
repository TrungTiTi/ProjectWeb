import React, { useRef, useState } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";

const Detail = (props) => {

    
    // lưu data
    const dataDetail =  JSON.stringify(props.location.url);
    if (dataDetail) {
        localStorage.setItem('detailId', dataDetail)
    }
    let detailId = JSON.parse(localStorage.getItem('detailId'));
   
    // thay đổi ảnh
    let imgSrc = detailId.img[0].image
    
    const [imagec, setImagec] = useState(imgSrc);

    let valueB = detailId.color.a ;
    let valueA = detailId.color.b ;

    // thay đổi border ảnh
    const border1 = useRef();
    const border2 = useRef();
    const [checkA,setCheckA] = useState("");
    const [checkB, setCheckB] = useState('checked');
    // hành động click thay đổi ảnh
    const changeImg = () => {
        setImagec(detailId.img[1].image);
        const borderImg1 = border1.current.style;
        const borderImg2 = border2.current.style;
        if(borderImg2.border){
            borderImg2.border = '';
            borderImg1.border = '1px solid black';
        }else{
            borderImg1.border = '1px solid black';
        }
        setCheckA('checked');
        setCheckB('');
        localStorage.setItem('imgDetailA', detailId.img[0].image);
        // localStorage.removeItem('imgDetailA');
    }
    
    const changeImg1 = () => {
        setImagec(detailId.img[0].image);
        const borderImg1 = border1.current.style;
        const borderImg2 = border2.current.style;
        if(borderImg1.border){
            borderImg1.border = '';
            borderImg2.border = '1px solid black';
        }else{
            borderImg2.border = '1px solid black';
        }
        setCheckB('checked');
        setCheckA('');
        localStorage.setItem('imgDetailA', detailId.img[1].image);
        // localStorage.removeItem('imgDetailB');
    }

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
                    <div className="content-main">
                        <div className="main-title">
                            <h1><Link to="">ROLEX</Link></h1>
                        </div>
                        <div className="product-detail">
                            <div className="left-detail">
                                <div className="detail-big-img">
                                    <img src={imagec}></img>
                                </div>
                                <div className="detail-small-img">
                                    <div>        
                                        <img src={detailId.img[1].image} onClick = {changeImg} ref={border1} />
                                        <img src={detailId.img[0].image} onClick = {changeImg1} ref={border2} />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="right-detail">
                                <div className="detail-right-top">
                                    <h1>Thông tin sản phẩm</h1>
                                    <strong>Tình trạng: Mới</strong>
                                </div>
                                <p>{detailId.decription}</p>
                                <div className="detail-right-main">
                                    <strong>Lựa chọn màu sản phẩm</strong>
                                    <div className="detail-option">
                                        <form>
                                            <div>
                                                <input type="radio" name="option_name" value={valueA} checked={checkA} onChange ={changeImg}/>
                                                <label>{valueA}</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="option_name" value={valueB} checked={checkB} onChange={changeImg1} />
                                                <label>{valueB}</label>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="detail-price">
                                        <h3>Giá:{detailId.price} triệu đồng</h3>
                                    </div>
                                    <button>
                                        <Link to={{pathname : "/giohang", url : detailId, img: imagec}}>Mua ngay</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
 
                </div>
            </section>
        </div>
    )
}

export default Detail;