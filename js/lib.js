var 注音符號表 = "ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄧㄨㄩㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦˉˊˇˋ˙";

var initFuncParam = function(param, defaultValue){
  return ((typeof(param) === 'undefined') ? defaultValue : param);
};

var 字串中是否含有陣列中任一元素 = function(字串, 陣列){
  var ii = 陣列.length;
  while(ii--){
    if(字串.indexOf(陣列[ii]) !== -1)return true;
  }
  return false;
};