import React from 'react';
import { Link} from "react-router-dom";
import SignIn from '../../components/SignIn';

const Tintuc1 = () => {
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
                            <h1>Lịch sử thương hiệu đồng hồ Rolex chính hãng Thụy Sỹ</h1>
                        </div>
                        <div className="kienthuc1">
                        
                            <p>Vào năm 1914, ngay khi Hoàng tử Ferdinand nước Áo nổ phát súng đẩy cả thế giới vào cuộc chiến tranh đẫm máu nhất trong lịch sử thì Hans Wilsdorf người xứ Bavaria đã thành lập
                                công ty đồng hồ Rolex ở London. Hans Wilsdorf, người sáng lập hãng đồng hồ Rolex nhận thấy rằng cần phải có những đổi mới trong cách nhìn nhận về đồng hồ của con người, trong
                                khi những chiếc đồng hồ bỏ túi cũ kĩ lại là những chuẩn mực trong con mắt những đồng nghiệp của ông. Hans Wilsdorf hình dung ra rằng đồng hồ đeo tay có thể thay thế hoàn toàn những chiếc đồng hồ bỏ túi cũ kĩ đó và ông sẽ tạo ra một chiếc đồng hồ đeo tay đáng kinh ngạc và sẽ thay đổi hoàn toàn cách nhìn nhận của con người về đồng hồ.</p>
      
                            <div>
                                <img src="../image/kienthuc-lichsu.jpg" alt="t" /> <br />
                                <strong>Ông Hans Wilsdorf  người sáng lập ra thương hiệu Rolex</strong>
                            </div>
                            <p>Mặc dù có rất nhiều những trở ngại, thách thức về kiến thức và kinh tế, song tầm nhìn vĩ đại cả Hans Wilsdorf không hề bị nao núng và vẫn luôn vững bền. Hans Wilsdorf cũng có những
                                may mắn trong quyết định về việc trì hoãn ý tưởng của mình vì nếu ông tạo ra một chiếc đồng hồ sang trọng trong buổi lễ ra mắt, nếu chiếc đồng hồ có khả năng thay đổi cách nhìn nhận của
                                con người về một xu hướng mới đó là đồng hồ đeo tay và cách mạng hóa thành công thì ông sẽ phải đương đầu với rất nhiều những ý kiến trái chiều và thiếu sót của nó, như vậy sẽ rất căng thẳng
                                và mệt mỏi cho một nhà sáng chế. Và khi ông nhận ra mối ngăn cảm duy nhất tới sản phẩm của ông mà khách hàng luôn luôn nhắm tới đó là tính chính xác của đồng hồ đeo tay. Thực sự là tính chính
                                xác của đồng hồ đeo tay lúc đó thua xa sự chính xác của những chiếc đồng hồ bỏ túi vào thời điểm đó. Không hề bị ngăn cản bởi những trở ngại, Hans Wilsdorf vẫn kiên trì đối đầu với nó và ông không
                                ngừng tìm tòi những phương hướng mới để giải quyết vấn đề “Tính chính xác tuyệt đối của đồng hồ đeo tay”. Ông quyết định đưa những sáng chế của mình sang đất nước của nền văn minh khoa học cao hơn, đó là đất nước Thụy Sĩ.</p>
                            <div>
                                <img src="../image/Rolex_logo_svg.png" alt="t" />
                            </div>
                            <p>Sau một thời gian gắn bó và có những trải nghiệm rất thú vị tại Thụy Sĩ, Hans Wilsdorf đã có nghiên cứu và thảo luận mang tính đột phá với những nhà lãnh đạo cấp cao của hiệp hội Horlogère (tạm dịch là Hiệp hội chế tạo đồng hồ cao cấp Thụy Sĩ).
                                Thương hiệu Rolex của ông Hans Wilsdorf đã nhận được giấy chứng nhận Cao Quý vào năm 1920, được chứng nhận và đánh giá hạng cao “A” bởi Đài thiên văn Kew vào năm 1914 về tính chính xác. Những điều này hoàn toàn vượt ra ngoài tầm dự đoán của ông
                                Hans Wilsdorf. Sau đó Rolex đã trở thành thương hiệu đồng hồ Thụy Sỹ đầu tiên trên thế giới có được chứng nhận về tính chính xác. Và cũng thật đúng lúc – Thế chiến thứ I bùng nổ, các binh lính đều cần đến một cái đồng hồ đeo tay hoạt động chính
                                xác bởi chúng tiện lợi hơn hẳn loại đồng hồ bỏ túi khi hoạt động trong các chiến hào.</p>
                            <p>Cho đến khi tất cả các nhà thông thái trên thế giới đều có thể biết được đồng hồ sang trọng có ý nghĩa như thế nào với đời sống của họ, cái tên của hãng đồng hồ Rolex mang trong mình một biểu tượng của sự uy quyền, sức mạnh. Đồng hồ Rolex đã gắn
                                liền với những sự phi thường của con người, những kì tích vô cùng lớn lao, bất chấp sự nguy hiểm hay cái chết để rồi đi đến đỉnh cao của vinh quang, thành công. Và đỉnh cao của vinh quang đó được định đoạt khi cô Mercedes Gleitze là người phụ nữ đầu
                                tiên bơi qua eo biển của Anh trong vòng 10 tiếng đồng hồ vào năm 1926 và Hans Wilsdorf đã quyết định trao tặng cho Mercedes Gleitze một cái đồng hồ kiểu mới nhất hiệu Rolex Oyster, để giúp cô theo dõi thời gian trong khi vượt biển. Sự kiện này đã tạo nên tính công luận quý giá cho một thương hiệu đang trên đà phát triển.</p>
                            <p>Nếu tính chính xác là một mấu chốt thành công của Rolex, thì sáng tạo đột phá là mấu chốt thứ hai. Năm 1931, Rolex đăng ký bản quyền chiếc đồng hồ lên giây vĩnh cữu đầu tiên, có nghĩa là bộ phận lên giây bên hông đồng hồ không còn cần thiết nữa. 
                                Năm 1945, nó trở thành chiếc đồng hồ đầu tiên có cửa sổ ghi nhận ngày tháng. Sau đó, công ty này còn tạo nên những đột phá khác như: chiếc đồng hồ lặn đầu tiên, chiếc đồng hồ ghi nhận cùng lúc hai múi giờ khác nhau đầu tiên…</p>
                            <div>
                                <img src="../image/rolex_oyster.png" alt="t" /><br />
                                <strong>Chiếc Rolex Oyster phiên bản đầu tiên của hãng</strong>
                            </div>
                            <p>Chính những phát minh trên cùng với sự phát triển khá thành công của Rolex đã khiến cho người ta xem lịch sử của thương hiệu này chính là lịch sử của ngành công nghiệp đồng hồ. Chiếc đồng hồ Rolex Oyster đã được kiểm tra kỹ càng bởi những gương mặt tiêu biểu của ngành công nghiệp đồng hồ và đạt được danh hiệu “Chiếc đồng hồ của Thế kỷ”.</p>
                            <p>Trên khắp thế giới, đâu đâu cũng có những cửa hàng bán lẻ đồng hồ Rolex. Nhưng qua năm tháng, Rolex dần giảm bớt số lượng những đại lý bán lẻ đồng hồ của mình. Không như những thương hiệu khác luôn muốn mở rộng kênh phân phối của họ càng lúc càng rộng lớn hơn, Rolex đi theo con đường ngược lại. Khi không có bao nhiêu đại lý có bán đồng
                                hồ Rolex thì hệ quả là cầu tự động tăng lên và hình tượng danh vị của Rolex ngày càng được củng cố vững chắc.</p>
                            <p>Người ta không đeo một chiếc Rolex chỉ vì sự chính xác của nó. Họ đeo Rolex để khẳng định chính mình và vị trí xã hội của mình. Đó là một chiếc Porsche có thể luôn mang theo trên tay và cũng chứng tỏ những giá trị tương đương như vậy.Mua Rolex còn là một quyết định đầu tư không bao giờ lỗ vốn. Tính bền bỉ và sự ưa chuộng rộng khắp đã đảm
                                bảo rằng đây là một chiếc đồng hồ dễ bán lại nhất trên thế giới. Với một thương hiệu có thể cho bạn biết thời gian chính xác đến từng giây một, thật đáng ngạc nhiên là Rolex lại có một tính cách thương hiệu vượt thời gian. Bởi chính những mối liên hệ gần gũi với lịch sử của đồng hồ, thương hiệu Rolex sẽ vẫn còn mãi đó cho đến khi chúng ta không còn muốn nhìn vào cổ tay để xem giờ nữa.</p>
                            
                            <br />
                            <h3> CÁC TIN LIÊN QUAN</h3>
                            <h4><Link to="/dichvu/tintuc2">Đâu là chiếc điện thoại được mong đợi nhất sẽ ra mắt nửa cuối...</Link></h4>
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

export default Tintuc1;