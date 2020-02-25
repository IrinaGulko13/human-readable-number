module.exports = function toReadable (number) {
  let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let d= 'zero';
  numString = number.toString();
  if (number === 0) {
      return d;
  }
  if (number < 20) {
    return a[number];
  }
  if (numString.length === 2){
      return b[numString[0]]+ ' ' + a[numString[1]];
  } 
  if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0')
      return a[numString[0]] + ' hundred';  
}
}
