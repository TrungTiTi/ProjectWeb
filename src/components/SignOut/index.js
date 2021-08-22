import React from 'react';
import SignIn from '../SignIn';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const SignOut = () => {

    const fb = JSON.parse(localStorage.getItem('usersImg'));
    const userName = JSON.parse(localStorage.getItem('users'));

    const deleteUser = () => {
        localStorage.removeItem('users')
    }
    if(localStorage.getItem('users')){
    return (
        <div>
            <Header></Header>
            <section className="content">
                <div className="container">
                    <div className="sign-out">
                        <div className="signout-1">
                            <img src={fb} alt="Tôi" />
                            <h1>{userName}</h1>
                            <hr />
                        </div>
                        <div className="signout-2" >
                            <button>
                                <Link to="/sign-in" onClick={deleteUser} >Đăng Xuất Tài Khoản</Link>
                            </button>
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

export default SignOut;