import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
})
export class PolicyComponent implements OnInit {
  policyContent = `
  <h1>Bảo mật thông tin cá nhân</h1>
			<p><strong>1. Thu thập thông tin cá nhân:</strong></p>
<ul>
<li style="list-style-type: none;">
<ul>
<li>Các thông tin thu thập thông qua website 3kshop.vn sẽ giúp chúng tôi:
<ul>
<li>Hỗ trợ khách hàng khi mua sản phẩm;</li>
<li>Giải đáp thắc mắc khách hàng;</li>
<li>Cung cấp cho bạn thông tin mới nhất trên website của chúng tôi;</li>
<li>Xem xét và nâng cấp nội dung và giao diện của website;</li>
<li>Thực hiện các bản khảo sát khách hàng;</li>
<li>Thực hiện các hoạt động quảng bá liên quan đến các sản phẩm và dịch vụ của 3K Shop.</li>
</ul>
</li>
<li>Để truy cập và sử dụng một số dịch vụ tại 3kshop.vn, quý khách có thể sẽ được yêu cầu đăng ký với chúng tôi thông tin cá nhân (Email, Họ tên, Số ĐT liên lạc…). Mọi thông tin khai báo phải đảm bảo tính chính xác và hợp pháp. 3kshop.vn không chịu mọi trách nhiệm liên quan đến pháp luật của thông tin khai báo.</li>
<li>Chúng tôi cũng có thể thu thập thông tin về số lần viếng thăm, bao gồm số trang quý khách xem, số links (liên kết) bạn click và những thông tin khác liên quan đến việc kết nối đến 3kshop.vn. Chúng tôi cũng thu thập các thông tin mà trình duyệt Web (Browser) quý khách sử dụng mỗi khi truy cập vào website 3kshop.vn, bao gồm: địa chỉ IP, loại Browser, ngôn ngữ sử dụng, thời gian và những địa chỉ mà Browser truy xuất đến.</li>
</ul>
</li>
</ul>
<p><strong>2. Sử dụng thông tin cá nhân:</strong></p>
<ul>
<li style="list-style-type: none;">
<ul>
<li>3kshop.vn thu thập và sử dụng thông tin cá nhân quý khách với mục đích phù hợp và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật” này.</li>
<li>Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với bạn dưới các hình thức như: gởi thư ngỏ, đơn đặt hàng, thư cảm ơn, thông tin về kỹ thuật và bảo mật, quý khách có thể nhận được thư định kỳ cung cấp thông tin sản phẩm, dịch vụ mới, thông tin về các sự kiện sắp tới hoặc thông tin tuyển dụng nếu quý khách đăng kí nhận email thông báo.</li>
</ul>
</li>
</ul>
<p><strong>3. Chia sẻ thông tin cá nhân:</strong></p>
<ul>
<li style="list-style-type: none;">
<ul>
<li>Ngoại trừ các trường hợp về Sử dụng thông tin cá nhân như đã nêu trong chính sách này, chúng tôi cam kết sẽ không tiết lộ thông tin cá nhân bạn ra ngoài.</li>
<li>Trong một số trường hợp, chúng tôi có thể thuê một đơn vị độc lập để tiến hành các dự án nghiên cứu thị trường và khi đó thông tin của bạn sẽ được cung cấp cho đơn vị này để tiến hành dự án. Bên thứ ba này sẽ bị ràng buộc bởi một thỏa thuận về bảo mật mà theo đó họ chỉ được phép sử dụng những thông tin được cung cấp cho mục đích hoàn thành dự án.</li>
<li>Chúng tôi có thể tiết lộ hoặc cung cấp thông tin cá nhân của bạn trong các trường hợp thật sự cần thiết như sau:
<ul>
<li>Khi có yêu cầu của các cơ quan pháp luật;</li>
<li>Trong trường hợp mà chúng tôi tin rằng điều đó sẽ giúp chúng tôi bảo vệ quyền lợi chính đáng của mình trước pháp luật;</li>
<li>Tình huống khẩn cấp và cần thiết để bảo vệ quyền an toàn cá nhân của các thành viên 3kshop.vn khác.</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>4. Bảo mật thông tin cá nhân:</strong></p>
<ul>
<li style="list-style-type: none;">
<ul>
<li>Khi bạn gửi thông tin cá nhân của bạn cho chúng tôi, bạn đã đồng ý với các điều khoản mà chúng tôi đã nêu ở trên, 3kshop.vn cam kết bảo mật thông tin cá nhân của quý khách bằng mọi cách thức có thể. Chúng tôi sẽ sử dụng nhiều công nghệ bảo mật thông tin khác nhau như: chuẩn quốc tế PCI, SSL,… nhằm bảo vệ thông tin này không bị truy lục, sử dụng hoặc tiết lộ ngoài ý muốn.</li>
<li>Tuy nhiên do hạn chế về mặt kỹ thuật, không một dữ liệu nào có thể được truyền trên đường truyền internet mà có thể được bảo mật 100%. Do vậy, chúng tôi không thể đưa ra một cam kết chắc chắn rằng thông tin quý khách cung cấp cho chúng tôi sẽ được bảo mật một cách tuyệt đối an toàn, và chúng tôi không thể chịu trách nhiệm trong trường hợp có sự truy cập trái phép thông tin cá nhân của quý khách như các trường hợp quý khách tự ý chia sẻ thông tin với người khác…. Nếu quý khách không đồng ý với các điều khoản như đã mô tả ở trên, chúng tôi khuyên quý khách không nên gửi thông tin đến cho chúng tôi.</li>
<li>Vì vậy, 3kshop.vn cũng khuyến cáo quý khách nên bảo mật các thông tin liên quan đến mật khẩu truy xuất của quý khách và không nên chia sẻ với bất kỳ người nào khác.</li>
<li>Nếu sử dụng máy tính chung nhiều người, quý khách nên đăng xuất, hoặc thoát hết tất cả cửa sổ website đang mở.</li>
</ul>
</li>
</ul>
<p><strong>5. Sử dụng “Cookie”:</strong></p>
<ul>
<li style="list-style-type: none;">
<ul>
<li>3kshop.vn dùng “Cookie” để giúp cá nhân hóa và nâng cao tối đa hiệu quả sử dụng thời gian trực tuyến của quý khách.</li>
<li>Một cookie là một file văn bản được đặt trên đĩa cứng của bạn bởi một máy chủ của trang web. Cookie không được dùng để chạy chương trình hay đưa virus vào máy tính của quý khách. Cookie được chỉ định vào máy tính của quý khách và chỉ có thể được đọc bởi một máy chủ trang web trên miền được đưa ra cookie cho quý khách.</li>
<li>Một trong những mục đích của Cookie là cung cấp những tiện ích để tiết kiệm thời gian của quý khách khi truy cập tại website 3kshop.vn hoặc viếng thăm website 3kshop.vn lần nữa mà không cần đăng ký lại thông tin sẵn có.</li>
<li>Quý khách có thể chấp nhận hoặc từ chối dùng cookie. Hầu hết những Browser tự động chấp nhận cookie, nhưng quý khách có thể thay đổi những cài đặt để từ chối tất cả những cookie nếu quý khách thích. Tuy nhiên, nếu quý khách chọn từ chối cookie, điều đó có thể gây cản trở và ảnh hưởng không tốt đến một số dịch vụ và tính năng phụ thuộc vào cookie tại website 3kshop.vn</li>
</ul>
</li>
</ul>
<p><strong>6. Quy định về “Spam”:</strong></p>
<ul>
<li style="list-style-type: none;">
<ul>
<li>3kshop.vn thực sự quan ngại đến vấn nạn Spam (thư rác), các Email giả mạo danh tín chúng tôi gởi đi. Do đó, 3kshop.vn khẳng định chỉ gởi Email đến quý khách khi và chỉ khi quý khách có đăng ký hoặc sử dụng dịch vụ từ hệ thống của chúng tôi.</li>
<li>3kshop.vn cam kết không bán, thuê lại hoặc cho thuê email của quý khách từ bên thứ ba. Nếu quý khách vô tình nhận được Email không theo yêu cầu từ hệ thống chúng tôi do một nguyên nhân ngoài ý muốn, xin vui lòng nhấn vào link từ chối nhận Email này kèm theo, hoặc thông báo trực tiếp đến ban quản trị website.</li>
</ul>
</li>
</ul>
<p><strong>7. Thay đổi về chính sách:</strong></p>
<ul>
<li style="list-style-type: none;">
<ul>
<li>Chúng tôi hoàn toàn có thể thay đổi nội dung trong trang này mà không cần phải thông báo trước, để phù hợp với các nhu cầu của 3kshop.vn cũng như nhu cầu và sự phản hồi từ khách hàng nếu có. Khi cập nhật nội dung chính sách này, chúng tôi sẽ chỉnh sửa lại thời gian “Cập nhật lần cuối” bên dưới.</li>
<li>Nội dung “Chính sách bảo mật” này chỉ áp dụng tại 3kshop.vn, không bao gồm hoặc liên quan đến các bên thứ ba đặt quảng cáo hay có links tại 3kshop.vn. Chúng tôi khuyến khích bạn đọc kỹ chính sách An toàn và Bảo mật của các trang web của bên thứ ba trước khi cung cấp thông tin cá nhân cho các trang web đó. Chúng tôi không chịu trách nhiệm dưới bất kỳ hình thức nào về nội dung và tính pháp lý của trang web thuộc bên thứ ba.</li>
<li>Vì vậy, bạn đã đồng ý rằng, khi bạn sử dụng website của chúng tôi sau khi chỉnh sửa nghĩa là bạn đã thừa nhận, đồng ý tuân thủ cũng như tin tưởng vào sự chỉnh sửa này. Do đó, chúng tôi đề nghị bạn nên xem trước nội dung trang này trước khi truy cập các nội dung khác trên website cũng như bạn nên đọc và tham khảo kỹ nội dung “Chính sách bảo mật” của từng website mà bạn đang truy cập.</li>
</ul>
</li>
</ul>
  `;
  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {}

  getSafeHTML(content: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(content);
  }
}
