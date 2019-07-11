function groupWords(groupOfWords) {
  let dict = {};

  for (let word of groupOfWords) {
    let key = word.split('').sort().join('');
  
    if (Object.keys(dict).includes(key)) {
      dict[key].push(word);
    } else {
      dict[key] = [];
      dict[key].push(word);
    }
  }
  
  let i = 1;
  for (let key in dict) {
    let val = dict[key];
    console.log(`${i}. ${val.join(' - ')}`);
    i++;
  }
}

// execute
let words = ['VMRCO', 'VORCM', 'MCRTOX', 'ZXTAC', 'XZATC', 'XMTCOR', 'OXVS', 'AZTXC', 'VXOS', 'RZAT', 'MRCOTX', 'SVXO', 'TRAZ', 'ZTAR', 'MVOCR'];
groupWords(words);