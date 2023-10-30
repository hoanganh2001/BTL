const $$ = document.querySelectorAll.bind(document);
const dap = [];
let index = 1;
let length = $$('pagination-item').length - 2;

async function GetData(type, feature) {
  setTimeout(() => {
    $$('.list-products-content .product-item .box')?.forEach((item) => {
      const img = item
        ?.getElementsByClassName('has-image')[0]
        ?.children[0]?.childNodes[0]?.getAttribute('src');
      const name =
        item?.children[0]?.children[1]?.lastChild?.lastChild?.innerText;
      const price =
        item?.children[1]?.getElementsByClassName(
          'woocommerce-Price-amount amount',
        )[0]?.innerText | null;
      const discount =
        item?.getElementsByClassName('percent-sale')?.innerText | null;

      dap.push({
        name: name,
        img: img,
        price: price,
        discount: discount,
        create_date: null,
        category: '1',
        type: type ? type : 0,
        feature: feature ? feature : 0,
        view: 0,
      });
    });
    if (index <= length) {
      index += 1;
      document
        .getElementsByClassName('pagination-item active')[0]
        .nextElementSibling.childNodes[0].click();
      setTimeout(() => {
        GetData(type, feature);
      }, 2000);
    } else {
      return;
    }
  }, 5000);
}

async function get1() {
  $$('.selector:nth-child(2) input').forEach((e) => {
    e?.click();
    setTimeout(() => {
      let type = 0;
      switch (e?.parentElement.innerText.toLowerCase()) {
        case 'full size'.toLowerCase().trim(): {
          type = 1;
          break;
        }
        case 'on ear'.toLowerCase().trim(): {
          type = 2;
          break;
        }
        case 'earbud'.toLowerCase().trim(): {
          type = 3;
          break;
        }
        case 'in ear'.toLowerCase().trim(): {
          type = 4;
          break;
        }
        case 'wireless'.toLowerCase().trim(): {
          type = 5;
          break;
        }
        case 'true wireless'.toLowerCase().trim(): {
          type = 6;
          break;
        }
        case 'custome in ear'.toLowerCase().trim(): {
          type = 7;
          break;
        }
      }
      GetData(type, null);
      setTimeout(() => {
        e?.click();
      }, 2000);
    }, 5000);
  });
  return true;
}

async function get2() {
  $$('.selector:nth-child(3) input').forEach((e) => {
    e?.click();
    setTimeout(() => {
      let feature = 0;
      switch (e.parentElement.innerText.toLowerCase().trim()) {
        case 'chống ồn'.toLowerCase().trim(): {
          feature = 1;
          break;
        }
        case 'không dây'.toLowerCase().trim(): {
          feature = 2;
          break;
        }
        case 'có micro'.toLowerCase().trim(): {
          feature = 3;
          break;
        }
        case 'có tăng giảm âm lượng'.toLowerCase().trim(): {
          feature = 4;
          break;
        }
        case 'tai nghe thể thao'.toLowerCase().trim(): {
          feature = 5;
          break;
        }
        case 'tai nghe dj'.toLowerCase().trim(): {
          feature = 6;
          break;
        }
        case 'tai nghe phòng thu'.toLowerCase().trim(): {
          feature = 7;
          break;
        }
        case 'tai nghe gaming'.toLowerCase().trim(): {
          feature = 8;
          break;
        }
      }
      GetData(null, feature);
      setTimeout(() => {
        e?.click();
      }, 20000);
    }, 5000);
  });
  return true;
}

get1().then((value) => {
  if (value) {
    get2();
  }
});
