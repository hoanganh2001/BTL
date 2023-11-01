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
      case 'full sized': {
        type = 1;
        break;
      }
      case 'on ear': {
        type = 2;
        break;
      }
      case 'earbud': {
        type = 3;
        break;
      }
      case 'in ear': {
        type = 4;
        break;
      }
      case 'wireless': {
        type = 5;
        break;
      }
      case 'true wireless': {
        type = 6;
        break;
      }
      case 'custom in ear': {
        type = 7;
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

async function GetData(type, feature, i, text) {
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
          item?.getElementsByClassName('percent-sale')?.innerText | null;
        const quantity =
          item[0]?.getElementsByClassName(
            '-icon -icon-text top-left style-black',
          ).length > 0
            ? null
            : 0;

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
          quantity: quantity,
          brand: text,
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

function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

const $$ = document.querySelectorAll.bind(document);
const length2 = $$('.selector:nth-child(1) input').length;
const dap = [];

async function getFeature(length) {
  const e = $$(`.selector:nth-child(1) input`)[length - 1];
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
    console.log(text);
    await GetData(null, null, index, text).then(async (value) => {
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
