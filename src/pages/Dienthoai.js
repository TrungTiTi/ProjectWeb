import React, { useEffect, useState, useCallback} from "react";
import { Link} from "react-router-dom"
import phoneApi from '../data/Phone';
import SignIn from '../components/SignIn';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Dienthoai = () => {
 
    const [infoPage, setInfo] = useState(); //lay du lieu
   
    const [pageNumber, setPageNumber] = useState(1); //chuyen Trang

    const getProductPhone= useCallback(async (pNumber) => {
        try {
            const resp = await phoneApi.getProductPhone(pNumber);
            setInfo(resp);
        } catch (error) {
            console.log(error);
        }
    },[pageNumber])  //goi lai khi chuyen trang

    let a=pageNumber;

    const nextPage = () => {
        setPageNumber(a+1);
        if(a > 2){
            setPageNumber(4);
        }
        
    }
    
    const prevPage = () => {
        setPageNumber(a-1);
        if(a < 2){
            setPageNumber(1);
        }
        
    }

    useEffect(() => {
        getProductPhone(pageNumber);
    }, [pageNumber]);
    
    if(localStorage.getItem('users')){
    return(
        <div>
            <Header></Header>
            <div className="head-line">
                <div className="container">
                    <Link to="/">Trangchu</Link>
                    &nbsp; / &nbsp;
                    <Link to="/dienthoai">Dienthoai</Link>
                </div>
            </div>
            <section className="content">
                <div className="container">
                   
                        <div className="content-main">
                            <div className="main-title">
                                <h1><Link to="/dienthoai">ĐIỆN THOẠI</Link></h1>
                            </div>

                            <div className="main-box">
                                {
                                   infoPage && infoPage.map((p, index) => ( 
                                                    
                                        <div className="main-products" key= {index.toString()}>
                                            <div className="products-img">
                                                <Link to={{ pathname:"/detail", url: p }}><img src={p.img[0].image} alt="anh" /></Link>
                                            </div>
                                            <h3><Link to={{ pathname:"/detail", url: p }}>{p.decription}</Link></h3>
                                            <div className="products-lable">{p.label}</div>
                                            <div className="products-price">{p.price.toLocaleString()} VNĐ</div>
                                        </div>  
                                            ))     
                                }
                            </div>
                        </div>
                    
                </div>
            </section>
            <div className="button-page">
                <input type="submit" name="prev" value="prev" onClick={prevPage} />
                <input type="submit" name="next" value="next" onClick={nextPage} />
            </div>
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

export default Dienthoai;