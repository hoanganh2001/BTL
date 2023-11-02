const $$ = document.querySelectorAll.bind(document);
const dap = [];

const length = $$(`.selector:nth-child(2) input`).length;
function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function getType(length) {
  const e = $$(`.selector:nth-child(2) input`)[length - 1];
  await clickType(e).then((value) => {
    if (length > 0) {
      getType(length - 1);
    } else {
      console.log('done');
      return true;
    }
  });
}

async function clickType(e) {
  e?.click();
  let type = 0;
  const index = 0;
  await delay(10000).then(async () => {
    const text = e?.parentElement?.innerText?.toLowerCase().trim();
    switch (text) {
      case 'kệ': {
        type = 64;
        break;
      }
      case 'loa': {
        type = 65;
        break;
      }
    }

    await GetData(type, null, index).then(async (value) => {
      e?.click();
      delay(2000);
    });
  });
}
getType(length);

async function GetData(type, feature, i, category) {
  await delay(4000).then(async () => {
    $$('.list-products-content .product-item .box')?.forEach(
      async (item, arrIn) => {
        const name = item?.getElementsByClassName('title')[0]?.innerText;
        const img = item
          ?.getElementsByClassName('has-image')[0]
          ?.getElementsByTagName('img')[0]
          ?.getAttribute('src');

        const price = item?.children[1]?.getElementsByClassName(
          'woocommerce-Price-amount amount',
        )[0]?.innerText;
        const discount =
          item
            ?.getElementsByClassName('percent-sale')[0]
            ?.innerText.replace('-', '')
            .replace('%', '') | null;
        const quantity =
          item[0]?.getElementsByClassName(
            '-icon -icon-text top-left style-black',
          )?.length > 0
            ? null
            : 1;
        const gift =
          item[0]?.getElementsByClassName('-icon -icon-icon top-right').length >
          0
            ? 1
            : null;

        dap.push({
          name: name,
          img: img,
          price: price,
          discount: discount,
          create_date: null,
          category: category,
          type: type ? type : 0,
          feature: feature ? feature : 0,
          view: 0,
          quantity: quantity,
          brand: name.split(' ')[0].trim(),
          gift: gift,
        });
      },
    );
  });
  const length =
    $$('.pagination-item')?.length > 0 ? $$('.pagination-item')?.length - 1 : 0;
  if (length !== 0 && i < length) {
    i += 1;
    await delay(3000).then(async () => {
      document
        .getElementsByClassName('pagination-item active')[0]
        ?.nextElementSibling?.childNodes[0]?.click();
      await GetData(type, feature, i, category);
    });
  } else {
    return true;
  }
}

function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

const $$ = document.querySelectorAll.bind(document);
const dap = [];
const length2 = $$('.selector:nth-child(3) input').length;

async function getFeature(length) {
  const e = $$(`.selector:nth-child(3) input`)[length - 1];
  await clickFeature(e).then((value) => {
    if (length > 0) {
      getFeature(length - 1);
    } else {
      return true;
    }
  });
  return true;
}

async function clickFeature(e) {
  e?.click();
  let feature = 0;
  const index = 0;
  await delay(6000).then(async () => {
    const text = e?.parentElement?.innerText?.toLowerCase().trim();
    switch (text) {
      case 'streaming dac': {
        feature = 9;
        break;
      }
      case 'dsd suport': {
        feature = 10;
        break;
      }
      case 'r2r ladder dac': {
        feature = 11;
        break;
      }
      case 'pre out': {
        feature = 12;
        break;
      }
      case 'bluetooth': {
        feature = 13;
        break;
      }
      case 'wifi': {
        feature = 14;
        break;
      }
      case 'tube amp': {
        feature = 15;
        break;
      }
      case 'solid amp': {
        feature = 16;
        break;
      }
      case 'tích hợp phono': {
        feature = 17;
        break;
      }
      case 'usb power supply': {
        feature = 18;
        break;
      }
      case 'power filter': {
        feature = 19;
        break;
      }
      case 'digital filter': {
        feature = 20;
        break;
      }
    }

    await GetData(null, feature, index).then(async (value) => {
      if (value) {
        e?.click();
        e?.click();
        e?.click();
        delay(2000);
      }
    });
  });
  return true;
}

getFeature(length2);

e1.filter(function (item, pos) {
  item.type = e1
    .map((t) => {
      return item.name === t.name ? t.type : null;
    })
    .filter((t) => t);

  return e1.findIndex((t) => t.name === item.name) === pos;
});

e2.map((t) => {
  t.type = t.type
    .filter((t, p, a) => {
      return a.findIndex((va) => va === t) === p;
    })
    .flat();
  t.type = t.type.length === 1 ? t.type[0] : t.type[2];
  return t;
});

async function GetData(type, feature, i, text) {
  await delay(4000).then(async () => {
    $$('.list-products-content .product-item .box')?.forEach(
      async (item, arrIn) => {
        const name = item?.getElementsByClassName('title')[0]?.innerText;
        const gift =
          item?.getElementsByClassName('-icon -icon-icon top-right') &&
          item?.getElementsByClassName('-icon -icon-icon top-right').length > 0;

        const discount =
          item
            ?.getElementsByClassName('percent-sale')[0]
            ?.innerText?.replace('-', '')
            .replace('%', '') | null;
        const quantity =
          item?.getElementsByClassName(
            '-icon -icon-text top-left style-black',
          ) &&
          item?.getElementsByClassName('-icon -icon-text top-left style-black')
            .length > 0
            ? 1
            : 0;

        dap.push({
          name: name,
          discount: discount,
          quantity: quantity,
          gift: gift,
        });
      },
    );
  });
  const length =
    $$('.pagination-item')?.length > 0 ? $$('.pagination-item')?.length - 1 : 0;
  if (length !== 0 && i < length) {
    i += 1;
    await delay(3000).then(async () => {
      document
        .getElementsByClassName('pagination-item active')[0]
        ?.nextElementSibling?.childNodes[0]?.click();
      await GetData(type, feature, i);
    });
  } else {
    return true;
  }
}
