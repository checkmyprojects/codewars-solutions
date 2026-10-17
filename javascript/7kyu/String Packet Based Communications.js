function communicationModule(packet) {

  let [ header, inst, data1, data2, footer ] = packet.match(/.{4}/g);

  let ops = {
    '0F12': (a, b) => a + b,
    'B7A2': (a, b) => a - b,
    'C3D9': (a, b) => a * b
  };

  let res = ops[inst](+data1, +data2);

  if (res < 0)
    res = 0;
  else if (res > 9999)
    res = 9999;

  return `${header}FFFF${`000${res}`.slice(-4)}0000${footer}`;

}