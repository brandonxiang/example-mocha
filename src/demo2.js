function findHighestWord(essay){
  var wordNum = {};
  var words = essay.split(/,|.|\s+/);
  for(var i =0 ; i< words.length;i++){
    var num = 0;
    for(var j=i+1;j< words.length;j++){
      if(words[i]===words[j]){
        words.splice(j,1);
        num ++;
      }
    }
    wordNum[words[i]]= num;
  }
  var max = 0;
  for(word in wordNum){
    if(wordNum.word > max){
      max = wordNum.word;
    }
  }
  return max;
}

module.exports = findHighestWord;
