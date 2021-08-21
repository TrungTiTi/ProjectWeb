import React from 'react';
import { Link} from "react-router-dom";
import SignIn from '../../components/SignIn';

const Kienthuc2 = () => {
    if(localStorage.getItem('users')){
    return (
        <div>
            <div className="head-line">
                <div className="container">
                    <Link to="/">Trangchu</Link>
                </div>
            </div>
            <section className="content">
                <div className="container">
                    <div className="content-main">
                        <div className="main-title">
                            <h1>Vũ - "Hoàng tử Indie" của Việt Nam bước ra biển lớn</h1>
                        </div>
                        <div className="kienthuc1">
                        
                            <div>
                                <img src="../image/vu-hp.jpg" alt="t" /> <br />
                                <strong>Màn kết hợp của "Hoàng tử Indie" Việt Nam - Thái Vũ với chủ nhân hit "7 years" - Lukas Graham được khán giả đánh giá cao.</strong>
                            </div>
      
                            <div>
                                <audio controls autoPlay>
                                    <source src="../image/hfy.mp3" type="audio/mpeg" />
                                </audio>
                            </div>
                            <h4>MV song ngữ "Happy for you" của "Hoàng tử Indie" Thái Vũ kết hợp với nghệ sĩ Đan Mạch Lukas Graham - chủ nhân hit 1 tỉ view "7 years" - leo lên Top 3 âm nhạc thịnh hành YouTube chỉ sau 1 ngày phát hành.</h4>
                            <p>Sau hơn 5 ngày phát hành, ca khúc “Happy For You” của Lukas Graham kết hợp cùng Vũ. vẫn chưa ngừng nhận về những phản hồi tích cực từ công chúng. Performance video cho sản phẩm đã thu về hơn 3,2 triệu lượt xem trên YouTube,
                                204 nghìn lượt yêu thích cùng hơn 8 nghìn bình luận từ fan Việt lẫn khán giả nước ngoài. Đến nay, video vẫn đang đứng đầu Top Trending mảng âm nhạc trên nền tảng, đồng thời từng chiếm vị trí No.3 trên Top Trending tổng hợp tất cả các mảng.</p>
                            <div>
                                <img src="../image/vu-hp1.jpg" alt="t" /> <br />
                                <strong>Màn hợp tác của Vũ. và Lukas Graham vẫn liên tục mang về cho các nghệ sĩ những thành tích mới.</strong>
                            </div>
                           
                            <br />
                            <h3> CÁC TIN LIÊN QUAN</h3>
                            <h4><Link to="/khampha/kienthuc1">Messi, Neymar hay nhất Copa America 2021</Link></h4>
                            <h4><Link to="/khampha/kienthuc3">Chung Kết EURO 2020</Link></h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );}else{
        return(
            <>
                <SignIn></SignIn>
            </>
        )
    }
};

export default Kienthuc2;