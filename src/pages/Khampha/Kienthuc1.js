import React from 'react';
import { Link} from "react-router-dom";
import SignIn from '../../components/SignIn';

const Kienthuc1 = () => {
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
                            <h1>Messi, Neymar hay nhất Copa America 2021</h1>
                        </div>
                        <div className="kienthuc1">
                            <p>Lần đầu tiên trong lịch sử Copa America, hai cầu thủ được ban tổ chức xướng tên cho danh hiệu cá nhân Cầu thủ hay nhất giải.</p>
                            <p>"Không thể chỉ chọn một cầu thủ, bởi giải đấu này có đến hai cầu thủ xuất sắc", đại diện LĐBĐ Nam Mỹ (CONMEBOL) giải thích hôm 10/7. 
                                "Lionel Messi và Neymar đã thể hiện nhiều phẩm chất khác biệt xuyên suốt giải, khiến họ trở thành hình mẫu về một cầu thủ toàn diện.
                                Họ không chỉ có kỹ thuật điêu luyện, nhãn quan chiến thuật sắc bén, sự thông minh cả lúc có lẫn không có bóng, mà còn xuất sắc trong việc ra quyết định ở những thời điểm bước ngoặt".</p>
                            <p> <b> Messi </b>dẫn đầu ở cả hai thống kê ghi bàn và kiến tạo tại Copa America 2021. Anh tham gia tổng cộng vào 9 bàn, chiếm 75% tổng số bàn của Argentina. <b> Neymar</b> tham gia vào 5 bàn, tương đương 42% số bàn của Brazil.</p>

                            <div>
                                <img src="../image/neymar-messi.jpg" alt="t" /> <br />
                                <strong>Neymar thân thiện với Messi sau lễ trao giải Copa America 2021. Ảnh: Copa America</strong>
                            </div>
                            <p>Dù thống kê nghiêng về Messi, Neymar nhỉnh hơn về tầm ảnh hưởng trên đường vào chung kết. Ngôi sao đang khoác áo PSG có hai kiến tạo, chia đều ở tứ kết và bán kết, giúp Brazil thắng tối thiểu Chile 1-0 và Peru 1-0.</p>
                            <p>"Messi và Neymar đều giúp đội tuyển của họ vào chung kết Copa America. Họ có phong độ đỉnh cao gần một tháng qua, và đứng đầu trong cuộc đua vua phá lưới cũng như kiến tạo. Điều này chứng tỏ đóng góp to lớn của cả hai,
                                không chỉ cho thành tích đội tuyển của họ, mà còn vào thành công chung của Copa America 2021", đại diện CONMEBOL lý giải thêm.</p>
                            <p>Quyết định của Ban tổ chức Copa America 2021 dựa trên số liệu và đánh giá từ Ủy ban Kỹ thuật CONMEBOL. Đây là lần đầu tiên trong lịch sử, hai người cùng giành danh hiệu Cầu thủ hay nhất Copa America.</p>

                            <div>
                                <img src="../image/neymar-messi1.jpg" alt="t" /> <br />
                                <strong>Hành động đưa tay che mặt biểu lộ sự ngại ngần đáng yêu của Messi, trong khi Neymar trở lại với phong cách nhí nhố thường thấy.</strong>   
                            </div>
                        
                            <div>
                                <img src="../image/neymar-messi2.jpg" alt="t" /><br />
                                <strong>Nỗi buồn thua trận dường như tan biến với Neymar khi anh ngồi cạnh trò chuyện với Messi. <br /> Neymar cởi giày, áo và thoải mái trò chuyện với siêu sao đàn anh.</strong>
                            </div>
                            
                            <p>Cả Messi lẫn Neymar cùng không thành công ở cấp CLB mùa giải 2020-2021, và đều quyết tâm có lần đầu vô địch Copa America 2021. Ở chung kết,Neymar là trung tâm của mọi đợt tấn công phía <b>Brazil</b>,
                                nhưng không một lần xuyên thủng <b>Argentina</b> . Sau khi ôm Messi lúc hết trận, cầu thủ đắt giá nhất thế giới òa khóc.</p>
                            <p>Với Messi, Copa America 2021 là danh hiệu đầu tiên cấp đội tuyển. Siêu sao 34 tuổi quỳ xuống sân, ôm mặt chực khóc ngay khi tiếng còi mãn cuộc vang lên. Sau đó, anh được được đồng đội công kênh, tung lên không trung như một người hùng</p>
                            <p>Trận chung kết Copa America 2021 chứng kiến Messi hạnh phúc nhất trong nhiều năm trở lại đây. Anh gọi điện về cho gia đình ngay trên sân Maracana để chia sẻ niềm vui. Anh cũng không quên nán lại chờ Neymar trong đường hầm để tán gẫu, sau lễ trao giải.</p>
                            <br />
                            <h3> CÁC TIN LIÊN QUAN</h3>
                            <h4><Link to="/khampha/kienthuc2"> Vũ - "Hoàng tử Indie" của Việt Nam bước ra biển lớn</Link></h4>
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

export default Kienthuc1;