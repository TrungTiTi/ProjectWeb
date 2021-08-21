import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

const Footer = () => {

    return(
        <Router>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-lienhe">
                        <h3>LIÊN HỆ</h3>
                        <strong>LUXURY BG</strong><br />
                        <span className="lienhe-grey">Đ/C : </span><span className="lienhe-og">61 Phố Ô Chợ Dừa,Phường Ô Chợ Dừa,Quận. Đống Đa,TP.Hà Nội <br />
                        Office B.03.25 - Millennium Apartment 132 Bến Vân Đồn, P6, Q4, TP. Hồ Chí Minh
                        </span><br />
                        <span className="lienhe-grey">Email: </span><span className="lienhe-og">info@luxurybg.vn </span><br />
                        <span className="lienhe-grey">Hotline tư vấn bán hàng: </span><span className="lienhe-og">088.88.88888</span><br />
                        <span className="lienhe-grey">Follow us on facebook : </span><span className="lienhe-og">www.facebook.com/luxurybg.vn</span><br />
                        <span className="lienhe-grey">Follow us on instagram : </span><span className="lienhe-og">@luxurybg</span><br />
                        <span className="lienhe-grey">MST : </span><span className="lienhe-og">659686868</span><br />
                    </div>
                    <div className="footer-vechungtoi">
                        <h3>VỀ CHÚNG TÔI</h3>
                        <Link to="">Tin tức</Link>
                    </div>
                    <div className="footer-image">
                        <i className="fa fa-facebook-square"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-twitter-square"></i>
                    </div>
                </div>
            </footer>
            <div className="footer-info">
                <img src="../image/thanhtoan.jpg" alt="thanhtoan"></img>
                <img src="../image/giaohang.jpg" alt="giaohang"></img>
                <img src="../image/dangky.jpg" alt="dangky"></img>
            </div>
            <div className="footer-line">
                <span >Copyright © 2021 luxuryhanoi.vn</span>
            </div>
            
        </Router>
    )
}

export default Footer;