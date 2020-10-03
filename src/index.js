 module.exports =
 function toReadable (number) {
    let str = "";
    let numberMap = new Map([
        //['zero', 0],
        ['one', 1],
        ['two', 2],
        ['three', 3],
        ['four', 4],
        ['five', 5],
        ['six', 6],
        ['seven', 7],
        ['eight', 8],
        ['nine', 9],
    ])

    let doubleDigitMap = new Map([
      ['ten', 10],
      ['eleven', 11],
      ['twelve', 12],
      ['thirteen', 13],
      ['fourteen', 14],
      ['fifteen', 15],
      ['sixteen', 16],
      ['seventeen', 17],
      ['eighteen', 18],
      ['nineteen', 19],
    ])

    let dozensMap = new Map([
      ['twenty', 2],
      ['thirty', 3],
      ['forty', 4],
      ['fifty', 5],
      ['sixty', 6],
      ['seventy', 7],
      ['eighty', 8],
      ['ninety', 9],
    ])

    if(number <= 999 && number >= 0){
        let hundredCount = Math.floor(number/100);
        let dozenCount = Math.floor((number-(hundredCount*100))/10);
        let unitCount = number-((hundredCount*100)+(dozenCount*10));

        if(hundredCount > 0){
             numberMap.forEach((value, key, map) =>{
                 if(hundredCount == value){
                     str = str + key + " hundred";
                 }
             });
        }

        if(dozenCount > 1){
          dozensMap.forEach((value, key, map) =>{
              if(dozenCount == value){
                  str = str + ' ' + key;
              }
          });
        }else if(dozenCount == 1){
          let doubleDigit = dozenCount * 10 + unitCount;

          doubleDigitMap.forEach((value, key, map) =>{
              if(doubleDigit == value){
                  str = str + ' ' + key;
              }
          });
        }

        if(dozenCount == 0 || dozenCount >= 2){
          numberMap.forEach((value, key, map) =>{
              if(unitCount == value){
                  str = str + ' ' + key;
              }
          });
        }

        if(unitCount == 0 && dozenCount == 0 && hundredCount == 0){
            str = str + 'zero';
        }
      }

      if(number <= 99 && number != 0){
          return str.slice(1);
      }
      return str;
  }
