var gId = function(id){
  return document.getElementById(id);
};

var sChewingSample = "倩女幽魂	ㄑㄧㄢˋ ㄋㄩˇ ㄧㄡ ㄏㄨㄣˊ 	16	278448	16	16\n專有名詞	ㄓㄨㄢ ㄧㄡˇ ㄇㄧㄥˊ ㄘˊ 	195	1734375	195	195\n春江花月夜	ㄔㄨㄣ ㄐㄧㄤ ㄏㄨㄚ ㄩㄝˋ ㄧㄝˋ 	2	131087	1	1\n英雄所見略同	ㄧㄥ ㄒㄩㄥˊ ㄙㄨㄛˇ ㄐㄧㄢˋ ㄌㄩㄝˋ ㄊㄨㄥˊ 	11	138882	11	11\n適當的時候	ㄕˋ ㄉㄤˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ 	1	1633397	1	1";
var sYahooSample = "倩女幽魂	ㄑㄧㄢˋ,ㄋㄩˇ,ㄧㄡ,ㄏㄨㄣˊ	-1.0	0.0\n專有名詞	ㄓㄨㄢ,ㄧㄡˇ,ㄇㄧㄥˊ,ㄘˊ	-1.0	0.0\n春江花月夜	ㄔㄨㄣ,ㄐㄧㄤ,ㄏㄨㄚ,ㄩㄝˋ,ㄧㄝˋ	-1.0	0.0\n英雄所見略同	ㄧㄥ,ㄒㄩㄥˊ,ㄙㄨㄛˇ,ㄐㄧㄢˋ,ㄌㄩㄝˋ,ㄊㄨㄥˊ	-1.0	0.0\n適當的時候	ㄕˋ,ㄉㄤˋ,ㄉㄜ˙,ㄕˊ,ㄏㄡˋ	-1.0	0.0";

var input_dict = gId('input_dict');
var input_textarea = gId('input_textarea');
var output_textarea = gId('output_textarea');

var gInputDictName = function(el){
  return el.getElementsByTagName('option')[el.selectedIndex].value;    
};

var setInputSample = function(inputDictName){
  input_textarea.value = (inputDictName === "yahoo") ? sYahooSample : sChewingSample;
};
setInputSample(gInputDictName(input_dict));

input_dict.addEventListener('change', function(){
  setInputSample(gInputDictName(input_dict));
});

var handler = function(){
  input_textarea.value = '';
  input_textarea.removeEventListener('click', handler);
  input_textarea.addEventListener('click', function(){
    input_textarea.select();
  });
};
input_textarea.addEventListener('click', handler);

output_textarea.addEventListener('click', function(){
  output_textarea.select();
});

gId('conv_btn').addEventListener('click', function(){
  var conv_btn = gId('conv_btn');
  conv_btn.disabled = true;

  var 注音詞庫陣列 = 注音詞庫格式化(gId('input_textarea').value);
  var 拼音詞庫陣列 = 詞庫轉換(注音詞庫陣列, gInputDictName(input_dict));
  gId('output_textarea').value = 詞庫陣列轉字串(拼音詞庫陣列);
  
  conv_btn.removeAttribute('disabled');
});