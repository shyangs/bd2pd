var gId = function(id){
  return document.getElementById(id);
};

gId('conv_btn').addEventListener('click', function(){
  var conv_btn = gId('conv_btn');
  conv_btn.disabled = true;
  
  var 注音詞庫陣列 = 注音詞庫格式化(gId('input_textarea').value);
  var 拼音詞庫陣列 = 詞庫轉換(注音詞庫陣列);
  gId('output_textarea').value = 詞庫陣列轉字串(拼音詞庫陣列);
  
  conv_btn.removeAttribute('disabled');
});