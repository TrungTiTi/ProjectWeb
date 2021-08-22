import React from 'react';
import { Link} from "react-router-dom";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SignIn from '../../components/SignIn';

const Tintuc3 = () => {
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
                            <h1>Rò rỉ hình ảnh ốp lưng của iPhone 13 Pro cho thấy cụm camera...</h1>
                        </div>
                        <div className="kienthuc1">
                            <h2>iPhone SE 3 sẽ có những nâng cấp gì về cấu hình?</h2>
                            <p>Theo nhà phân tích Ming-Chi Kou, iPhone SE 3 sẽ có bộ vi xử lý mới cao cấp hơn vi xử lý A13 Bionic trên iPhone SE 2020.
                                Tuy nhiên, ông không tiết lộ chính xác là con chip nào. Vậy nên chúng ta có thể hi vọng đó sẽ là chip A15 Bionic, con chip dự kiến trang bị trên iPhone 13.</p>
                            <p>Trong khi iPhone 12 được tích hợp modem 5G – Snapdragon X55 thì iPhone 13 dự kiến sẽ có modem 5G – Snapdragon X60 mới nhất. Tuy nhiên vì iPhone SE 3 là mẫu
                                iPhone giá rẻ nên có thể máy sẽ tiếp tục sử dụng modem 5G – Snapdragon X55 của iPhone 12.</p>
                            <div>
                                <img src="../image/cauhinhse3.jpg" alt="t" /><br />
                            </div>
                            <p>Bên cạnh đó, iPhone thế hệ tiếp theo dự kiến sẽ có màn hình LCD kích thước 4.7 inch. Máy dự kiến vẫn sẽ có nút Home vật lý tích hợp Touch ID.
                                Mặt lưng của iPhone SE 3 sẽ được hoàn thiện bằng kính đồng thời hỗ trợ công nghệ sạc không dây.</p>
                            <p>Về camera, chiếc iPhone này có thể sẽ có camera sau 12MP và camera trước 7MP. Mặc dù chỉ có camera đơn nhưng iPhone SE 3 vẫn có khả năng chụp ảnh chân dung xóa phông nhờ sức mạnh của chip A15 Bionic.</p>
                            <p>Ngoài ra, các tính năng như sạc nhanh công suất cao hơn, viên pin lớn hơn, chuẩn kết nối Wi-Fi mới hay chống bụi, chống nước chuẩn IP đều được mong đợi xuất hiện trên iPhone SE 3.</p>
                            <h2>Giá bán dự kiến của iPhone SE 2022</h2>
                            <p>Nhờ tận dụng linh kiện của các dòng iPhone cũ cũng như tiết kiệm chi phí nghiên cứu, giá của iPhone SE 3 có thể ngang bằng iPhone SE (2020). Cụ thể, dòng iPhone này sẽ có giá khởi điểm là 399 USD (~ 9.4 triệu đồng).
                                Tuy nhiên nếu Apple nâng cấp thêm về phần cứng thì có thể giá của iPhone SE 3 sẽ khởi điểm từ 499 USD (~ 11.5 triệu đồng).</p>
                            <div>
                                <img src="../image/cauhinhse3t.jpg" alt="t" /><br />
                            </div>
                                                    
                            <br />
                            <h3> CÁC TIN LIÊN QUAN</h3>
                            <h4><Link to="/dichvu/tintuc1">Lịch sử thương hiệu đồng hồ Rolex chính hãng Thụy Sỹ</Link></h4>
                            <h4><Link to="/dichvu/tintuc2">Đâu là chiếc điện thoại được mong đợi nhất sẽ ra mắt nửa cuối...</Link></h4>
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

export default Tintuc3;