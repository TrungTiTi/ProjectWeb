import React, {useMemo, useEffect, useState, useCallback} from "react";
import {BrowserRouter as Router, Link, useLocation} from "react-router-dom";
import { useProduct } from "../redux/hooks/Product";
import productApi from '../data/Product';
const Dongho = (props) => {
    
    const [infoPage, setInfo] = useState(); //lay du lieu
   
    const [pageNumber, setPageNumber] = useState(1); //chuyen Trang

    const getProductWatch = useCallback(async (pNumber) => {
        try {
            const resp = await productApi.getProductWatch(pNumber);
            setInfo(resp);
        } catch (error) {
            console.log(error);
        }
    },[pageNumber])  //goi lai khi chuyen trang

    let a=pageNumber;

    const nextPage = () => {
        setPageNumber(a+1);
        if(a > 4){
            setPageNumber(6);
        }
        
    }
    
    const prevPage = () => {
        setPageNumber(a-1);
        if(a < 2){
            setPageNumber(1);
        }
        
    }

    useEffect(() => {
        getProductWatch(pageNumber);
    }, [pageNumber]);
    
    // luu data
   
 
    return(
        <div>
            <div className="head-line">
                <div className="container">
                    <Link to="">Trangchu</Link>
                    &nbsp; / &nbsp;
                    <Link to="/dongho">Dongho</Link>
                </div>
            </div>
            <section className="content">
                <div className="container">
                    
                        <div className="content-main">
                            <div className="main-title">
                                <h1><Link to="/dongho">ROLEX</Link></h1>
                            </div>
                            <div className="main-box">

                            </div>
                            <div className="main-box">
                                {
                                    infoPage && infoPage.map((p, index) => ( 
                                                    
                                        <div className="main-products" key= {index.toString()}>
                                            <div className="products-img">
                                            <Link to={{ pathname:"/detail", url: p }}><img src={p.img[0].image} /></Link>
                                            </div>
                                            <h3><Link to={{ pathname:"/detail", url: p }}>{p.decription}</Link></h3>
                                            <div className="products-lable">{p.label}</div>
                                            <div className="products-price">{p.price}</div>
                                        </div>  
                                            ))     
                                }
                            </div>
                        </div>
                    
                </div>
            </section>
            <div>
                <input type="submit" name="prev" value="prev" onClick={prevPage} />
                <input type="submit" name="next" value="next" onClick={nextPage} />
            </div>
        </div>
    )
}

export default Dongho;