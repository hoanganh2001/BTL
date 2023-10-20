import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  aboutContent = `
    <h1 class="title">Giới thiệu về 3K Shop</h1>
			<p>Năm 2011, thời điểm mà ở Hồ Chí Minh không có nhiều cửa hàng headphone cũng như nhiều mẫu mã để người chơi lựa chọn, đó chính là thời điểm mà 3K Shop đã ra đời. 3K Shop được thành lập bởi các những bạn trẻ có niềm đam mê bất tận với âm thanh. Chính niềm đam mê đó đã giúp những anh em hội tụ, gắn kết, khao khát mang nhiều mẫu headphone, DAC/Amp mới về để trải nghiệm thỏa đam mê chứ không phải mục đích kinh doanh. Ban đầu, shop có tên gọi là “TAMK Shop”. T-A-M-K đại diện cho 4 chữ cái đầu tiên của tên những người thành lập shop. Tuy nhiên, mọi người gọi trại riết thành 3K Shop và cuối cùng anh em cũng quyết định đổi tên thành 3K Shop và năm 2012, đó cũng là lúc mà website 3kshop.vn ra đời.</p>
<p>Thời điểm đầu tiên, 3K Shop chỉ là 1 cửa hàng nhỏ tại nhà số 443/34 Điện Biên Phủ, P.1, Q.3, TP. Hồ Chí Minh. Mặc dù là một địa chỉ khá khó kiếm, tuy nhiên lúc nào anh em đam mê âm thanh cũng lặn lội ghé thăm và ủng hộ thường xuyên. Ngoài ra còn có vài điểm bất tiện như: không có chỗ để xe, không có chỗ ngồi,… nhưng anh em vẫn yêu quý và ghé ủng hộ shop.</p>
<p>Tháng 6 năm 2012: 3K Shop mở chi nhánh 14 Nguyễn Văn Giai, P. Đa Kao, Q.1 hoạt động song song cùng với bên cửa hàng Điện Biên Phủ. Tuy nhiên sau 6 tháng hoạt động thì mọi người nhận thấy không đủ kinh phí để vận hành cũng như nhiều bất tiện khác, nên đầu 2013, 3K Shop dồn tất cả vào một cửa hàng 14 Nguyễn Văn Giai để có thể chăm sóc khách hàng tốt hơn.</p>
<p>Tháng 1 năm 2015: 3K Shop có chi nhánh ở Hà Nội tại số 4 Ngõ 9 Hoàng Cầu – Đống Đa – Hà Nội với mục đích hỗ trợ tốt hơn cho các bạn ở Hà Nội.</p>
<p>Một trong những điều quan trọng nhất mà 3K Shop mong muốn nhất chính là mang đến những sản phẩm có chất lượng tốt; “tốt” ở đây chính là về cả chất âm, độ bền cũng như chế độ bảo hành, hậu mãi cho khách hàng. Chính vì vậy, 3K Shop luôn cố gắng làm việc để đem đến những sản phẩm chính hãng cùng với giá thành tốt nhất. Các sản phẩm có chất lượng không tốt chắc chắn sẽ không bao giờ hiện hữu tại 3K Shop. Đồng thời, các bạn làm việc tại 3K Shop luôn mang trong mình niềm đam mê cũng như cố gắng trang bị những kiến thức về âm thanh để có thể truyền tải, chia sẻ thú chơi âm thanh với nhiều người hơn nữa.</p>
<p><strong>Cảm ơn những người anh, những người bạn, những khách hàng đã luôn sát cánh và ủng hộ 3K Shop.</strong></p>
  `;
  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {}

  getSafeHTML(content: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(content);
  }
}
