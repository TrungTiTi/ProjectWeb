import React from 'react';
import { Link} from "react-router-dom";
import SignIn from '../../components/SignIn';

const Tintuc2 = () => {
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
                            <h1>Đâu là chiếc điện thoại được mong đợi nhất sẽ ra mắt nửa cuối năm 2021</h1>
                        </div>
                        <div className="kienthuc1">
                            <h2>Đâu là chiếc điện thoại được mong đợi nhất sẽ ra mắt nửa cuối năm 2021?</h2>
                            <div>
                                <img src="../image/1.png" alt="t" /><br />
                                <strong>Năm 2021 đã đi qua hơn một nửa với sự xuất hiện của rất nhiều sản phẩm công nghệ mới.
                                    Nhưng đó không phải là tất cả. Người dùng vẫn đang chờ đợi những smartphone ra mắt vào nửa cuối năm nay. </strong>
                            </div>
                            <h3>Người dùng chờ đợi chiếc smartphone nào sắp ra mắt cuối năm?</h3>
                            <p>Nếu đọc đến đây có lẽ nhiều người đã đoán được câu trả lời. Nhưng hãy giữ đáp án đó để check xem có đúng không ở phần dưới nhé.
                                Đầu năm nay, chúng ta đã chứng kiến rất nhiều flagship mới được các nhà sản xuất giới thiệu. Không thể không nhắc đến Galaxy S21
                                hay Xiaomi Mi 11 hồi đầu năm. Khi Samsung có vẻ như đã từ bỏ dòng flagship thứ hai thường ra mắt vào tháng 8, sự tập trung đang đổ dồn cho cái tên khác.</p>
                            <div>
                                <img src="../image/xiaomi11.jpg" alt="t" />
                            </div>
                            <p>Một cuộc khảo sát của Android Authority đã được công bố vào ngày 29 tháng 6 với 16 lựa chọn smartphone. Trong đó, Pixel 6 dẫn đầu danh sách với 38% được quan tâm.
                                Cụ thể, độc giả đang tò mò về trải nghiệm máy ảnh mới sau khi kiến trúc sư Marc Levoy rời công ty. Vị trí thứ 2 với một khoảng cách khá lớn là Galaxy S21 FE với 10.2% lựa chọn.
                                Trước đó Galaxy S20 gây ấn tượng vì mức giá phải chăng hơn mà vẫn giữ lại hầu hết tính năng hàng đầu. Nên không quá bất ngờ khi người dùng rất quan tâm đến phiên bản năm nay.</p>
                            <div>
                                <img src="../image/ip13.jpg" alt="t" />
                            </div>
                            <p>Trong khi đó, iPhone 13 của Apple xếp vị trí thứ 4 với 8.7% phiếu bầu. Nhiều rò rỉ cho rằng dòng iPhone năm nay không thay đổi nhiều về thiết kế nên nó không quá hấp dẫn chăng? Cuối cùng,
                                các thiết bị gập đang bị quên lãng trong năm nay khi chiếm số % bình chọn khá ít. Điều thú vị là, có 110 phiếu bầu trong mục “khác” chiếm 6.7% cho biết người dùng quan tâm đến Galaxy Note
                                21 và điện thoại Motorola hàng đầu. Bạn đang quan tâm đến mẫu smartphone sắp ra mắt nào?</p>
                                        
                            <br />
                            <h3> CÁC TIN LIÊN QUAN</h3>
                            <h4><Link to="/dichvu/tintuc1">Lịch sử thương hiệu đồng hồ Rolex chính hãng Thụy Sỹ</Link></h4>
                            <h4><Link to="/dichvu/tintuc3">Rò rỉ hình ảnh ốp lưng của iPhone 13 Pro cho thấy cụm camera...</Link></h4>
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

export default Tintuc2;