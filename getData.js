const $$ = document.querySelectorAll.bind(document);
const dap = [];

async function GetData(type, feature, i, length) {
  console.log(1);
  await $$('.list-products-content .product-item .box')?.forEach(
    (item, arrIn) => {
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
    },
  );
  console.log(2);
  if (i <= length) {
    i += 1;
    await setTimeout(() => {
      document
        .getElementsByClassName('pagination-item active')[0]
        .nextElementSibling.childNodes[0].click();
      console.log(3);
      GetData(type, feature, i, length);
    }, 5000);
  } else {
    i = 1;
  }
  return true;
}

async function detail() {}

async function get1() {
  $$('.selector:nth-child(2) input').forEach((e, i) => {
    const inDex = 1;
    get3(e, inDex);
  });
  return true;
}

async function get3(e, inDex) {
  await setTimeout(async () => {
    e?.click();
    await setTimeout(() => {
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
      const length = $$('pagination-item').length - 2;

      GetData(type, null, inDex, length).then((value) => {
        if (value) {
          setTimeout(() => {
            e?.click();
          }, 2000);
        }
      });
    }, 5000);
  }, 10000);
}

async function get2() {
  $$('.selector:nth-child(3) input').forEach((e, i) => {
    get4(e, i);
  });
  return true;
}

async function get4(e, i) {
  setTimeout(() => {
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
      const length = $$('pagination-item').length - 2;

      GetData(null, feature, i, length).then((value) => {
        if (value) {
          setTimeout(() => {
            e?.click();
          }, 20000);
        }
      });
    }, 5000);
  }, 10000);
}

get1().then((value) => {
  if (value) {
    console.log(dap);
    get2().then((value2) => {
      if (value2) {
        console.log(dap);
      }
    });
  }
});
