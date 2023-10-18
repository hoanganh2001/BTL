import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { sideBarNewList } from 'src/app/shared/component/side-bar-new/side-bar-newt.type';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss'],
})
export class NewDetailComponent implements OnInit {
  newList: sideBarNewList[] = [
    {
      id: 1,
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/52670/3kshop-devialet-gemini-2-gemini_II-tai-nghe-true-wireless_1-650x402-c.jpg',
      name: 'Trên tay tai nghe true wireless Devialet Gemini II',
      author: 'HieuDT',
      createDate: '17/10/2023',
      view: 0,
    },
    {
      id: 2,
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/52539/3kshop-ferrum-wandla-hypsosDSC-7459-650x402-c.jpg',
      name: 'Ferrum Wandla – DAC và Preamplifier tuyệt vời cho người chơi loa active',
      author: '',
      createDate: '',
      view: 0,
    },
    {
      id: 3,
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/52524/3kshop-fiio-fx15-tai-nghe-iem-in-ear_13-650x402-c.jpg',
      name: 'Trên tay tai nghe FiiO FX15 : thiết kế âm thanh tribrid, giá ~20tr',
      author: '',
      createDate: '',
      view: 0,
    },
    {
      id: 4,
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/52520/3kshop-ifi-hip-dac-3_3-scaled-650x402-c.jpg',
      name: 'iFi Hip Dac 3: màu mới, iFi Hip Dac 3: màu mới iFi Hip Dac 3: màu mới iFi Hip Dac 3: màu mới dùng USB-C, nâng cấp mạch tạo xung, có IEMatch, giá $199',
      author: '',
      createDate: '',
      view: 0,
    },
    {
      id: 5,
      img: 'https://3kshop.vn/wp-content/uploads/fly-images/52487/3kshop-shure-sm7db-audio-650x402-c.jpg',
      name: 'Shure ra mắt SM7DB: vocal microphone cho nhu cầu thu âm ca hát, làm podcast, có tích hợp preamp',
      author: '',
      createDate: '',
      view: 0,
    },
  ];

  categories = [
    {
      id: 'review',
      name: 'Đánh giá sản phẩm',
      count: 106,
    },
    {
      id: 'knowledge',
      name: 'Kiến thức âm thanh',
      count: 124,
    },
    {
      id: 'new',
      name: 'Tin tức',
      count: 27,
    },
    {
      id: 'video',
      name: 'Videos',
      count: 1256,
    },
    {
      id: 'event',
      name: 'Sự kiện',
      count: 3,
    },
  ];

  newDatil = {
    ...this.newList[0],
    description: `
    <div class="jsx-89440 table-of-content false">
<div class="jsx-89440 table-header"></div>
<p class="jsx-89440 anchor H2"><a href="https://3kshop.vn/devialet-gemini-ii/">Devialet&nbsp;Gemini II</a>&nbsp;là&nbsp;tai nghe&nbsp;true wireless&nbsp;thứ hai trong gia đình Devialet, được trang bị driver tráng phủ&nbsp;titanium, sử dụng&nbsp;Bluetooth&nbsp;5.2 hỗ trợ aptX, khả năng chống ồn và thời lượng pin vượt trội,&nbsp;âm thanh&nbsp;đậm chất quẩy, đánh rất tốt các thể loại nhạc điện tử như house, trance, electronica, hip hop. So với đời trước.</p>
</div>
<article class="jsx-89440 content ">
<div class="jsx-89440 ">
<div class="jsx-4267282249">
<div class="jsx-4267282249 xfBody big " data-author="AudioPsycho"><span class="xf-body-paragraph"><div class="su-youtube su-u-responsive-media-yes"><iframe width="600" height="400" src="https://www.youtube.com/embed/agcEoIZoc_s?" frameborder="0" allowfullscreen="" allow="autoplay; encrypted-media; picture-in-picture" title=""></iframe></div></span><span class="xf-body-paragraph"><p></p>
<p></p>
<h2 id="menuid0" class="TinhteMods_HeadingTag TinhteMods_HeadingTagH2"><b>Thiết kế và cảm giác đeo</b></h2>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8141721_resize-tinhte-devialet-gemini-2-gemini_II-tai-nghe-true-wireless_3.jpg" alt="resize-tinhte-devialet-gemini-2-gemini II-tai-nghe-true-wireless (3).jpg" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Gemini II được thiết kế nhỏ gọn và thoải mái hơn rất nhiều so với đàn anh (cả hộp sạc lẫn tai nghe), bề mặt sản phẩm cho thấy chất lượng gia công đã được chú trọng kỹ lưỡng, mang đến trải nghiệm rất xứng đáng với tầm giá 11.590.000đ (cho 2 màu đen và trắng), 17.890.000đ (Opera De Paris)<br>
</p></span></div>
<div class="jsx-4267282249 in-article-promo false">
<div class="jsx-611178211 pro-container  withBorder">
<div class="jsx-611178211"></div>
</div>
</div>
</div>
<div class="jsx-4267282249">
<div class="jsx-4267282249 xfBody big " data-author="AudioPsycho">
<span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/09/8136255_tinhte-devialet-gemini-II-gemini-2-true-wireless_13.jpg" alt="tinhte-devialet-gemini-II-gemini-2-true-wireless (13).JPG" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"><p></p>
<p>Devialet Gemini II có thiết kế nhỏ gọn và vừa vặn trong tai, khi đeo cần xoay nhẹ tai nghe để tạo độ bám, làm cho vỏ tai nghe tỳ nhẹ lên 3 điểm trong tai, mình đi bộ và chạy bộ, đạp xe thì không rớt. Tai nghe có trọng lượng nhẹ, đeo thoải mái vô cùng.</p>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8141722_resize-tinhte-devialet-gemini-2-gemini_II-tai-nghe-true-wireless_4.jpg" alt="resize-tinhte-devialet-gemini-2-gemini II-tai-nghe-true-wireless (4).jpg" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Độ cong của tai nghe đã được tối ưu hóa để đảm bảo sự thoải mái, tai bạn gái kích thước nhỏ cũng đeo rất dễ dàng. Logo Devialet là vùng cảm ứng để điều khiển chống ồn, nhạc, có thể cá nhân hóa trong app Devialet.</p>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/09/8136256_tinhte-devialet-gemini-II-gemini-2-true-wireless_45.jpg" alt="tinhte-devialet-gemini-II-gemini-2-true-wireless (45).JPG" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Hộp sạc đi kèm với tai nghe cũng được thiết kế nhỏ gọn dễ dàng bỏ vào túi, có nắp lật tiện dụng cho phép truy cập nhanh chóng. Bản lề của hộp này cho cảm giác rất bền.</p>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8141723_resize-tinhte-devialet-gemini-2-gemini_II-tai-nghe-true-wireless_12.jpg" alt="resize-tinhte-devialet-gemini-2-gemini II-tai-nghe-true-wireless (12).jpg" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Ngoài cáp sạc USB-C thì bạn có thể dễ dàng sạc Tai Nghe Devialet Gemini II qua bộ sạc không dây được chứng nhận chuẩn Qi.<br>
</p>
<h2 id="menuid1" class="TinhteMods_HeadingTag TinhteMods_HeadingTagH2"><b>Âm thanh</b></h2>
</span></div>
</div>
<div class="jsx-4267282249">
<div class="jsx-4267282249 xfBody big " data-author="AudioPsycho">
<span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/09/8136221_tinhte-devialet-gemini-II-gemini-2-true-wirelessIMG-9237.jpg" alt="tinhte-devialet-gemini-II-gemini-2-true-wirelessIMG-9237.JPG" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"><p></p>
<p>Gemini II có driver phủ titanium, kích thước 10mm, qua trải nghiệm của mình thì driver này cần phải được burn in đủ lâu để có thể đạt được chất tiếng tốt nhất.</p>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8141725_resize-tinhte-devialet-gemini-2-gemini_II-tai-nghe-true-wireless_22.jpg" alt="resize-tinhte-devialet-gemini-2-gemini II-tai-nghe-true-wireless (22).jpg" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Việc đầu tiên cần làm khi vừa mở hộp là tải app Devialet về và update firmware mới nhất thông qua OTA.</p>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8141726_resize-tinhte-devialet-gemini-2-gemini_II-tai-nghe-true-wireless_13.jpg" alt="resize-tinhte-devialet-gemini-2-gemini II-tai-nghe-true-wireless (13).jpg" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Sau đó chọn eartips cho phù hợp với kích thước lỗ tai.<br>
</p></span></div>
</div>
<div class="jsx-4267282249">
<div class="jsx-4267282249 xfBody big " data-author="AudioPsycho">
<span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/09/8136261_tinhte-devialet-gemini-II-gemini-2-true-wireless_1.jpg" alt="tinhte-devialet-gemini-II-gemini-2-true-wireless (1).JPG" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"><p></p>
<p>Lúc mới mở hộp, Gemini II có tiếng bass rất căng và lực, sub-bass không được dày lắm cùng tiếng trung âm hơi đanh, nghe khá khô. Mình cho em nó chạy rà 5 ngày, mỗi ngày tầm 10 tiếng thì chỉ sau 3 ngày là bắt đầu thấy tai nghe lột xác. Khi chạy rà nhớ để volume hơi to vì nó dùng màng titanium, mình để 80% volume trên điện thoại, pin trụ được tầm 4 tiếng hơn, hết thì lại bỏ vào case sạc, mức âm lượng này vẫn an toàn với tai nghe nên không sao, chỉ cần đảm bảo là bạn dùng nhạc để chạy rà, chứ không phải mấy cái track pinknoise, whitenoise nhé.</p>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8141729_resize-tinhte-devialet-gemini-2-gemini_II-tai-nghe-true-wireless_2.jpg" alt="resize-tinhte-devialet-gemini-2-gemini II-tai-nghe-true-wireless (2).jpg" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Việc burn-in tai nghe hay các thiết bị âm thanh khác không phải là một hành động mang tính tín ngưỡng, tâm linh gì cả, chỉ đơn thuần là để cho màng loa quen với dao động của một dải tần số trải rộng từ trầm tới cao, để tạo ra âm thanh chính xác, không bị giới hạn bởi các sai số như viền nhún loa chưa được mềm (chẳng hạn vậy).</p>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8141728_resize-tinhte-devialet-gemini-2-gemini_II-tai-nghe-true-wireless_20.jpg" alt="resize-tinhte-devialet-gemini-2-gemini II-tai-nghe-true-wireless (20).jpg" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Mặc dù thiết kế của tai nghe là theo hướng mềm mại, tinh tế và sang trọng nhưng cách thể hiện âm nhạc thật là máu lửa, không liên quan lắm với vẻ ngoài. Âm thanh của Gemini II bắt tai nhất ở dải bass, điều này khá giống với lúc nghe Gemini I, tuy nhiên độ hay thì Gemini II hơn nhiều. Tiếng em này rất là sung, đánh lực bass mạnh và tắt rất nhanh, thể hiện đầy đủ body và độ sâu của sub-bass tuy nhiên không hề lan man, dùng tính từ “căng cực” là rất đúng với Gemini II.</p>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8139468_Deviaet_Gemini-1.jpg" alt="Deviaet Gemini-1.jpg" data-height="1364" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Mặc dù thiết kế của tai nghe là theo hướng mềm mại, tinh tế và sang trọng nhưng cách thể hiện âm nhạc thật là máu lửa. So với đời trước, Gemini II có trung âm chi tiết, nổi khối hơn, nghe vocal và các hiệu ứng âm thanh ở trung cao tuyệt vời, tuy nhiên âm trường sẽ bị hẹp lại, không gian có chiều sâu tốt nhưng tính dàn trải là chưa đủ để nghe classical. Thôi thì số phận coi như đã định để chơi nhạc bay rồi&nbsp;<span class="smilie" data-title="Big Grin">😁</span></p>
<p></p>
<h2 id="menuid2" class="TinhteMods_HeadingTag TinhteMods_HeadingTagH2"><b>Chống ồn chủ động&nbsp;Devialet Adaptive Noise Cancellation (DANC) và Active Wind Noise Reduction (AWR)</b></h2>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/09/8136225_tinhte-devialet-gemini-II-gemini-2-true-wirelessIMG-9110.jpg" alt="tinhte-devialet-gemini-II-gemini-2-true-wirelessIMG-9110.JPG" data-height="1368" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Tai nghe true wireless Devialet Gemini II được trang bị công nghệ khử tiếng ồn chủ động mới, gọi là Devialet Adaptive Noise Cancellation™️. Công nghệ này tự động điều chỉnh theo hình dạng tai của bạn, đo tiếng ồn và điều chỉnh cường độ chống ồn theo thời gian thực giúp giảm hiện tượng giả âm thanh và tiếng ồn trắng. Kết quả là bạn sẽ có trải nghiệm nghe nhạc + chống ồn dễ chịu, không bị cảm giác nặng tai vì lúc nào khả năng chống ồn cũng ở mức cao.</p>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8139469_Deviaet_Gemini-5.jpg" alt="Deviaet Gemini-5.jpg" data-height="1364" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Đáng chú ý, công nghệ chống ồn của Gemini II được thiết kế để không ảnh hưởng đến hiệu suất và thời lượng pin của tai nghe, mình chỉ thấy volume mới là thứ ngốn pin nhiều, nhưng cũng không đáng kể.</p>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8139470_Deviaet_Gemini-2.jpg" alt="Deviaet Gemini-2.jpg" data-height="1364" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Công nghệ Giảm tiếng gió chủ động (AWR) của tai nghe bluetooth Devialet Gemini 2 giúp giảm tác động của gió đến trải nghiệm nghe nhạc của bạn. Mỗi micro trong tai nghe được bao bọc bởi một lớp vật liệu chống gió giúp giảm tiếng ồn và tác động của gió lên chất lượng âm thanh. Bên cạnh đó, DSP của tai nghe cũng được tích hợp các thuật toán phát hiện tiếng ồn ở dải trầm, nhanh chóng cắt để giảm sự khó chịu. Như đã thông tin ở trên, Gemini II còn cung cấp cảm biến dẫn truyền qua xương, giúp micrô giữ giọng nói của người dùng rõ ràng khi gọi điện thoại khi gặp gió to.</p>
<p><span class="bdImage_attachImage"><span class="inner"><img src="https://photo2.tinhte.vn/data/attachment-files/2023/10/8139471_Deviaet_Gemini-4.jpg" alt="Deviaet Gemini-4.jpg" data-height="1364" data-width="2048"></span></span><span class="xf-body-paragraph"></span></p>
<p>Gemini II là một tai nghe chơi nhạc điện tử rất hay với âm thanh giàu nội lực, sung sức và khả năng chống ồn đáng gờm, xứng đáng là một thế thay hoàn hảo cho người tiền nhiệm.</p></span></div>
<div data-author="AudioPsycho">Nguồn: <a href="http://tinhte.vn">Audio Tinhte</a></div>
</div>
</div>
</article>
          `,
  };
  constructor(private _sanitized: DomSanitizer) {}

  ngOnInit() {}

  getSafeHTML(content: string): SafeHtml {
    return this._sanitized.bypassSecurityTrustHtml(content);
  }
}
