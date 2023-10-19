import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  mapData = [
    {
      id: 1,
      location: 'Hồ Chí Minh - Chi nhánh 01',
      address: '14 Nguyễn Văn Giai, P.Đa Kao, Q.1',
      contact: '(028) 38 202 909 - 0914 345 357',
      mapSrc:
        '//www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.99784816311!2d106.697142!3d10.792196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1410453b172f2b20!2s3K+Shop+HCM+-+Branch+1!5e0!3m2!1svi!2s!4v1522037148769',
    },
    {
      id: 2,
      location: 'Hồ Chí Minh - Chi nhánh 02',
      address: '6B Đinh Bộ Lĩnh, P.24, Q.Bình Thạnh',
      contact: '(028)38 202 909 - 0914 345 357',
      mapSrc:
        '//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62707.991830887564!2d106.67076988285145!3d10.792193899412963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f04b961d355%3A0x6946384e92855227!2s3K+Shop+HCM+-+Branch+2!5e0!3m2!1svi!2s!4v1522037281370',
    },
    {
      id: 3,
      location: 'Hà Nội',
      address: '33 Yên Lãng (tầng 2 Torano), Trung Liệt, Đống Đa, Hà Nội',
      contact: '0919 019 298 - 0914 345 357',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.493699753322!2d105.81603111493237!3d21.012922986007013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7d244d90af%3A0x56dcb2ca2f533dba!2zMzMgWcOqbiBMw6NuZywgVHJ1bmcgTGnhu4d0LCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lp!5e0!3m2!1sen!2s!4v1563509604162!5m2!1sen!2s',
    },
  ];

  mapSelectAddress: any;

  aboutContent = `
  <p>3K Shop được thành lập bởi các những bạn trẻ có niềm đam mê bất tận với âm thanh, chính niềm đam mê đó đã giúp những anh em hội tụ, gắn kết, khao khát mang nhiều mẫu headphone, DAC/Amp mới về để trải nghiệm thỏa đam mê chứ không phải mục đích kinh doanh.</p>
<p>Một trong những điều quan trọng nhất mà 3K Shop mong muốn nhất chính là mang đến những sản phẩm có chất lượng tốt; tốt ở đây chính là về cả chất âm, độ bền cũng như chế độ bảo hành cho khách hàng.</p>
<p>Chính vì vậy, 3K Shop luôn cố gắng làm việc để có những sản phẩm chính hãng tốt nhất, cùng với giá thành tốt nhất. Các sản phẩm có chất lượng không tốt chắc chắn sẽ không bao giờ hiện hữu tại 3K Shop.</p>
`;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.mapSelectAddress = this.mapData[0].mapSrc;
  }

  getSafeURL(url: string): SafeUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getSafeHTML(content: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(content);
  }

  selectAddress(id: number) {
    this.mapSelectAddress = this.mapData.find((t) => t.id === id)?.mapSrc;
  }
}
