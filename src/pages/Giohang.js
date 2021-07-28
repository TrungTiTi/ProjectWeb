import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    row: {
        width: '100%'
    },
    stt: {
        width: '5%'
    },
    imgText: {
        width: '25%',
    },
    imgImage: {
        width: '25%',
        
    },
    name: {
        width: '25%'
    },
    price: {
        width: '15%'
    },
    pay: {
        width: '15%'
    },
  
    delete: {
        width: '5%'
    },
    image: {
        width: '40%',
        height: '150px'
    },
});

const GioHang = (props) => {

    const classes = useStyles();

    const saveData =  JSON.stringify(props.location.url);
    if (saveData) {
        localStorage.setItem('takeData', saveData)
    }
    let takeData = JSON.parse(localStorage.getItem('takeData'));

    const dataCarts = props.location.url;
    dataCarts.img= props.location.img
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
                products.push(dataCarts);
            }
            
            console.log(arr)
        }else{products.push(dataCarts);}
        
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

   
   
    console.log(dataCarts)
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
                            <TableContainer component={Paper}>
                                <Table  aria-label="simple table">
                                    <TableHead>
                                        <TableRow className={classes.row}>
                                            <TableCell  align="center" className={classes.stt}>STT</TableCell>
                                            <TableCell align="center" className={classes.imgText}>Image</TableCell>
                                            <TableCell align="center" className={classes.name}>Product name</TableCell>
                                            <TableCell align="center" className={classes.price}>Price</TableCell>
                                            <TableCell align="center" className={classes.pay}>Action</TableCell>
                                            <TableCell align="center" className={classes.delete}>D</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {info && info.map((p, index) => (
                                        <TableRow key={index.toString()}>
                                            <TableCell align="center" className={classes.stt}>{index + 1}</TableCell>
                                            <TableCell align="center" className={classes.imgImage}><img src ={p.img} className={classes.image}></img></TableCell>
                                            <TableCell align="center" className={classes.name}>{p.decription}</TableCell>
                                            <TableCell align="center" className={classes.price}>{p.price}</TableCell>
                                            <TableCell align="center" className={classes.pay}>{}</TableCell>
                                            <TableCell align="center" className={classes.delete}>x</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </section>
            </div>
        );
    }


export default GioHang;