// type
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

switch (e?.parentElement.innerText.toLowerCase()) {
  case 'portable dac/amp'.toLowerCase().trim(): {
    type = 9;
    break;
  }
  case 'portable amplifier'.toLowerCase().trim(): {
    type = 10;
    break;
  }
  case 'headphone amplifier'.toLowerCase().trim(): {
    type = 11;
    break;
  }
  case 'speakers amplifier'.toLowerCase().trim(): {
    type = 12;
    break;
  }
  case 'transport'.toLowerCase().trim(): {
    type = 13;
    break;
  }
  case 'preamp'.toLowerCase().trim(): {
    type = 14;
    break;
  }
  case 'bluetooth receiver'.toLowerCase().trim(): {
    type = 15;
    break;
  }
  case 'bluetooth transmitter'.toLowerCase().trim(): {
    type = 16;
    break;
  }
}

switch (e?.parentElement.innerText.toLowerCase()) {
  case '24bit player'.toLowerCase().trim(): {
    type = 18;
    break;
  }
  case 'dsd player'.toLowerCase().trim(): {
    type = 19;
    break;
  }
}

switch (e?.parentElement.innerText.toLowerCase()) {
  case 'portable speaker'.toLowerCase().trim(): {
    type = 21;
    break;
  }
  case 'smart home speaker'.toLowerCase().trim(): {
    type = 22;
    break;
  }
  case 'computer speaker'.toLowerCase().trim(): {
    type = 23;
    break;
  }
  case 'bookshelf speaker'.toLowerCase().trim(): {
    type = 24;
    break;
  }
  case 'home theater speaker'.toLowerCase().trim(): {
    type = 25;
    break;
  }
  case 'soundbars'.toLowerCase().trim(): {
    type = 26;
    break;
  }
  case 'subwoofer'.toLowerCase().trim(): {
    type = 27;
    break;
  }
  case 'floor standing speaker'.toLowerCase().trim(): {
    type = 28;
    break;
  }
  case 'active speaker'.toLowerCase().trim(): {
    type = 29;
    break;
  }
  case 'wireless speaker'.toLowerCase().trim(): {
    type = 30;
    break;
  }
}

switch (e?.parentElement.innerText.toLowerCase()) {
  case 'mc'.toLowerCase().trim(): {
    type = 32;
    break;
  }
}

switch (e?.parentElement.innerText.toLowerCase()) {
  case 'wireless'.toLowerCase().trim(): {
    type = 34;
    break;
  }
  case '2-pin connector'.toLowerCase().trim(): {
    type = 35;
    break;
  }
  case '2.5mm connector'.toLowerCase().trim(): {
    type = 36;
    break;
  }
  case '3.5mm connector'.toLowerCase().trim(): {
    type = 37;
    break;
  }
  case 'mmcx connector'.toLowerCase().trim(): {
    type = 38;
    break;
  }
  case 'bluetooth cable'.toLowerCase().trim(): {
    type = 39;
    break;
  }
  case 'apple lightning cable'.toLowerCase().trim(): {
    type = 40;
    break;
  }
}

switch (e?.parentElement.innerText.toLowerCase()) {
  case '7 loa'.toLowerCase().trim(): {
    type = 42;
    break;
  }
  case '7 coaxial'.toLowerCase().trim(): {
    type = 43;
    break;
  }
  case '7 optical'.toLowerCase().trim(): {
    type = 44;
    break;
  }
  case '7 usb'.toLowerCase().trim(): {
    type = 45;
    break;
  }
}

//feature

switch (e?.parentElement.innerText.toLowerCase()) {
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

switch (e?.parentElement.innerText.toLowerCase()) {
  case 'dsd suport'.toLowerCase().trim(): {
    feature = 10;
    break;
  }
  case 'r2r ladder dac'.toLowerCase().trim(): {
    feature = 11;
    break;
  }
  case 'pre out'.toLowerCase().trim(): {
    feature = 12;
    break;
  }
  case 'bluetooth'.toLowerCase().trim(): {
    feature = 13;
    break;
  }
  case 'wifi'.toLowerCase().trim(): {
    feature = 14;
    break;
  }
  case 'tube amp'.toLowerCase().trim(): {
    feature = 15;
    break;
  }
  case 'solid amp'.toLowerCase().trim(): {
    feature = 16;
    break;
  }
  case 'tích hợp phono'.toLowerCase().trim(): {
    feature = 17;
    break;
  }
  case 'usb power supply'.toLowerCase().trim(): {
    feature = 18;
    break;
  }
  case 'power filter'.toLowerCase().trim(): {
    feature = 19;
    break;
  }
  case 'digital filter'.toLowerCase().trim(): {
    feature = 20;
    break;
  }
}

switch (e?.parentElement.innerText.toLowerCase()) {
  case 'native dsd'.toLowerCase().trim(): {
    feature = 22;
    break;
  }
  case 'bluetooth'.toLowerCase().trim(): {
    feature = 23;
    break;
  }
  case 'wifi'.toLowerCase().trim(): {
    feature = 24;
    break;
  }
  case 'otg support'.toLowerCase().trim(): {
    feature = 25;
    break;
  }
  case 'usb dac'.toLowerCase().trim(): {
    feature = 26;
    break;
  }
  case 'line out'.toLowerCase().trim(): {
    feature = 27;
    break;
  }
  case 'balance out'.toLowerCase().trim(): {
    feature = 28;
    break;
  }
  case 'digital out'.toLowerCase().trim(): {
    feature = 29;
    break;
  }
}

switch (e?.parentElement.innerText.toLowerCase()) {
  case 'airplay'.toLowerCase().trim(): {
    feature = 31;
    break;
  }
  case 'wifi'.toLowerCase().trim(): {
    feature = 32;
    break;
  }
  case 'multi-room'.toLowerCase().trim(): {
    feature = 33;
    break;
  }
  case 'tích hợp dac'.toLowerCase().trim(): {
    feature = 34;
    break;
  }
  case 'tích hợp amply'.toLowerCase().trim(): {
    feature = 35;
    break;
  }
  case 'tích hợp phono'.toLowerCase().trim(): {
    feature = 36;
    break;
  }
  case 'trợ lý ảo'.toLowerCase().trim(): {
    feature = 37;
    break;
  }
}

switch (e?.parentElement.innerText.toLowerCase()) {
  case 'bluetooth'.toLowerCase().trim(): {
    feature = 39;
    break;
  }
  case 'tích hợp phono'.toLowerCase().trim(): {
    feature = 40;
    break;
  }
  case 'tích hợp tonearm'.toLowerCase().trim(): {
    feature = 41;
    break;
  }
  case 'tích hợp cartridge'.toLowerCase().trim(): {
    feature = 42;
    break;
  }
}
