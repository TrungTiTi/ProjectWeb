import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { set } from 'react-hook-form';


const useStyles = makeStyles({
    row: {
        width: '100%'
    },
    stt: { width: '5%', },
    imgText: { width: '20%',},
    imgImage: { width: '20%',},
    name: { width: '22%'},
    priceText: { width: '18%'}, price: { width: '18%', color: 'red'},
    payText: { width: '18%'}, pay: { width: '18%', color: 'red'},
    quantity: { width: '12%'},
    delete: { width: '5%'},
    image: {
        width: '40%',
        height: '150px'
    },
    divQuantity:{ display: 'flex', justifyContent: 'space-between',padding: '0 5px'},
    butTon: { width: '30%'},
   
});

const GioHang = (props) => {

    const classes = useStyles();
    const [d,setD] = useState() //
    const saveData =  JSON.stringify(props.location.url);
    const saveImg =  JSON.stringify(props.location.img);
    
    if (saveData) {
        localStorage.setItem('takeData', saveData)
        localStorage.setItem('takeImg', saveImg)
    }
    let takeData = JSON.parse(localStorage.getItem('takeData'));
    let takeImg = JSON.parse(localStorage.getItem('takeImg'));
    
    takeData.img = takeImg
    const [info,setInfo] = useState();
    useEffect(() => {
        let products = [];
        
        if(localStorage.getItem('products')){
            products = JSON.parse(localStorage.getItem('products'));
            let arr = []
            for(let each of products){
                arr.push(each.img)
            }
            
            if(!arr.includes(takeData.img)){
                products.push(takeData);
            }
            
        }else{products.push(takeData);}
        
        localStorage.setItem('products', JSON.stringify(products));
           
    },[]);
    
    // wait data
    let detailProduct = async () =>{
        const res = await JSON.parse(localStorage.getItem('products'));
        setInfo(res);
    }
    useEffect(() => {
        detailProduct()
    },[])

    let sum = async () => {
        let a= 0;
        let b= await info;
        if(b){
            for(let i=0; i< b.length;i++){
                a += b[i].price
            }
           console.log(a.toLocaleString())
        }
    }
    useEffect(() => {
        sum()
    },[info])
    
    const [a,setA] = useState()
    
    
    const changeTest = (e) => {
        setA(e.target.value)
    }
    
    const changeCount = (p,i) => {
        
        setD(a * p.price);
        
    }
    const [toP,setToP] = useState();
    const [toI,setToI] = useState();
    useEffect(() => {
        let items = 0;
        let prices = 0;
        if(info){
            info.forEach((o) => {
            
                items += a;
                prices += a * o.price
            });
        }
        
        setToI(items);
        setToP(prices);
    },[info,a,toP,toI])
    console.log(toP)
        return (
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
                                <h1><Link to="">GIỎ HÀNG</Link></h1>
                            </div>
                
                            <table className={classes.row}>
                                <tbody>
                                    <tr>
                                        <td align="center" className={classes.stt}>STT</td>
                                        <td align="center" className={classes.imgText}>ẢNH</td>
                                        <td align="center" className={classes.name}>TÊN SẢN PHẨM</td>
                                        <td align="center" className={classes.quantity}>SỐ LƯỢNG</td>
                                        <td align="center" className={classes.priceText}>ĐƠN GIÁ</td>
                                        <td align="center" className={classes.payText}>THÀNH TIỀN</td>
                                        <td align="center" className={classes.delete}>XÓA</td>
                                    </tr>
                                {info && info.map((p, index) => (
                                    <tr key={index.toString()} >
                                        <td align="center" className={classes.stt}>{index + 1}</td>
                                        <td align="center" className={classes.imgImage}><img src ={p.img} className={classes.image}></img></td>
                                        <td align="center" className={classes.name}>{p.decription}</td>
                                        <td align="center" className={classes.quantity}>
                                            <div className={classes.divQuantity}>
                                                <input type="number" onChange={changeTest} onKeyUp={() => {changeCount(p,index) }}  />
                                            </div>
                                        </td>
                                        <td align="center" className={classes.price}>{p.price}</td>
                                        <td align="center" className={classes.pay}>{p.pay}</td>
                                        <td align="center" className={classes.delete}>x</td>
                                    </tr>
                                ))}
                                {/* {info && info.map((p,index) => (
                                    <div key={index.toString()}>
                                        <Test />
                                    </div>
                                ))} */}
                               
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        );
    }


export default GioHang;