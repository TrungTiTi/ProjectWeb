import React from 'react';
import { Link} from "react-router-dom";
import SignIn from '../../components/SignIn';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Kienthuc3 = () => {
    if(localStorage.getItem('users')){
    return (
        <div>
            <Header></Header>
            <div className="head-line">
                <div className="container">
                    <Link to="/">Trangchu</Link>
                </div>
            </div>
            <section className="content">
                <div className="container">
                    <div className="content-main">
                        <div className="main-title">
                            <h1>Chung Kết EURO 2020</h1>
                        </div>
                        <div className="kienthuc1">
                            <h3 >Chung kết Euro 2020: 'Tân binh' Anh thách thức Ý già dặn</h3> <br />
                            <div>
                                <img src="../image/euro2020.jpg" alt="anh" /> 
                            </div> <br />

                            <p>Tuyển Anh cần tới 120 phút để vượt qua Đan Mạch để có lần đầu vào chung kết Euro. Họ đã trải qua tổng cộng 6 trận đấu tại vòng bảng và vòng knock-out, ghi được 10 bàn và chỉ thủng lưới 1 bàn.</p>
                            <p>Trên hành trình đó, "tam sư" có những thắng lợi ấn tượng như trước Đức ở vòng 16 đội (2-0), Ukraine ở tứ kết (4-0) hay đương kim á quân World Cup Croatia tại vòng bảng (1-0).</p>
                            <p>Tại chung kết, Anh sẽ có lợi thế lớn khi được chơi trên sân nhà Wembley. Tuy nhiên, họ sẽ phải chạm đối thủ sừng sỏ và già dặn là tuyển Ý.</p>
                            <p>Trái với Anh, đây đã lần thứ tư Ý giành quyền góp mặt ở chung kết Euro. Trong quá khứ, "đội bóng áo thiên thanh" từng vô địch năm 1968 nhưng thất bại ở các năm 2000, 2012.</p>
                            <p>Trên hành trình đến trận chung kết năm nay, Ý gây ấn tượng với lối đá tấn công rực lửa. Họ lần lượt vượt qua hai đội bóng mạnh là Bỉ tại tứ kết và Tây Ban Nha tại bán kết để góp mặt trong trận đấu cuối cùng.</p>
                            <p>Về thành tích đối đầu, tuyển Ý là đội nhỉnh hơn. Trong 27 lần gặp nhau, Ý có được 11 chiến thắng còn Anh chỉ có 8. Số trận hòa giữa hai đội cũng là 8.
                                Lần cuối hai đội gặp nhau tại một giải đấu lớn là vòng bảng World Cup 2014. Khi đó, tuyển Ý có được thắng lợi 2-1. Nhưng cả hai đã phải cùng sớm dắt tay nhau về nhà.</p>
                            <p>Một trận đấu đáng nhớ khác giữa Ý và Anh là ở tứ kết Euro 2012. Hòa nhau 0-0 sau 120 phút, hai đội bước vào loạt luân lưu. Tại đây, tuyển Ý giành thắng lợi 4-2 trước dàn cầu thủ nhiều ngôi sao của "tam sư".</p>
                            <p>Gặp lại nhau lần này, tuyển Anh chắc chắn sẽ muốn trả những món nợ xưa và lên ngôi vô địch. Trận đấu được kỳ vọng sẽ rất kịch tính khi cả hai đội đều sở hữu nhiều ngôi sao cùng những toan tính chiến thuật khó lường của các HLV Roberto Mancini và Gareth Southgate.</p>
                            <p>Trận chung kết Euro 2020 giữa Ý và Anh sẽ diễn ra vào lúc 2h ngày 12-7.</p>
                            <br />
                            <h3> CÁC TIN LIÊN QUAN</h3>
                            <h4><Link to="/khampha/kienthuc1">Messi, Neymar hay nhất Copa America 2021</Link></h4>
                            <h4><Link to="/khampha/kienthuc2">Vũ - "Hoàng tử Indie" của Việt Nam bước ra biển lớn </Link></h4>
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

export default Kienthuc3;