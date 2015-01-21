// 依賴 lib.js

// 漢字詞組的注音字串 => 陣列
var 注音字串轉陣列 = function(詞組注音字串, 分隔符=" ", 一聲聲符=""){
  var 聲符陣列 = ["ˊ", "ˇ", "ˋ", "˙"];
  (一聲聲符 !== "") && 聲符陣列.push(一聲聲符);
  return 詞組注音字串.split(分隔符).map(function(單字注音字串){
      if(!字串中是否含有陣列中任一元素(單字注音字串, 聲符陣列)){
      單字注音字串 += "ˉ";
    };
    return 單字注音字串;
  });
};

// 漢字單字的 注音符號 => 注音音節鍵碼
var 注音符號轉鍵碼 = function(漢字單字注音, 注音符號表="ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄧㄨㄩㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦˉˊˇˋ˙"){
  var 注音鍵碼表 = "1qaz2wsxedcrfv5tgbyhnujm8ik,9ol.0p;/- 6347";
  return 漢字單字注音.split("").map(function(符號){
    return 注音鍵碼表[注音符號表.indexOf(符號)];
  }).join("");
};

// 注音音節鍵碼 => 中介 => 漢語拼音音節編碼
var 注音鍵碼轉漢拚 = function(注音音節鍵值編碼){
  // 逆規則29，
  var 注音鍵碼表 = "1qaz2wsxedcrfv5tgbyhnujm8ik,9ol.0p;/- 6347";
  var 中介鍵碼表 = "bpmfdtnlgkhjqxZCSrzcsiuvaoeEAIOUMNKGR12345"; // 漢語拼音的擴充版(和注音一對一)
  return 注音音節鍵值編碼.split("").map(function(碼元){
    return 中介鍵碼表[注音鍵碼表.indexOf(碼元)];
  }).join("")
  // 逆規則25，
    .replace(/([iv])E/g, "$1e")
  // 逆規則24，
    .replace(/E/g, "eh")
  // 逆規則23，
    .replace(/R/g, "er")
  // 逆規則22，
    .replace(/N/g, "en")
  // 逆規則21，
    .replace(/M/g, "an")
  // 逆規則20，
    .replace(/G/g, "eng")
  // 逆規則19，
    .replace(/K/g, "ang")
  // 逆規則18，
    .replace(/U/g, "ou")
  // 逆規則17，
    .replace(/O/g, "ao")
  // 逆規則16，
    .replace(/I/g, "ei")
  // 逆規則15，
    .replace(/A/g, "ai")
  // 逆規則14，
    .replace(/^([zcsr])(\d)$/, "$1i$2")
  // 逆規則13，例子：師（"S1" ,"shi1"），沙（"Sa1", "sha1"）
    .replace(/^S(\d)$/, "shi$1").replace(/^S/, "sh")
  // 逆規則12，例子：持（"C2" ,"chi2"），查（"Ca2", "cha2"）
    .replace(/^C(\d)$/, "chi$1").replace(/^C/, "ch")
  // 逆規則11，例子：志（"Z1" ,"zhi1"），炸（"Za1", "zha1"）
    .replace(/^Z(\d)$/, "zhi$1").replace(/^Z/, "zh")
  // 逆規則09，
    .replace(/^([jqx])v/, "$1u")
  // 逆規則08，
    .replace(/^v/, "iu")
  // 逆規則07，例子：吳（"u2" ,"wu2"），挖（"ua1", "wa1"），「翁」
    .replace(/^u(\d)$/, "wu$1").replace(/^u/, "w")
  // 逆規則06，例子：易（"i4" ,"yi4"），亞（"ia3", "ya3"）
    .replace(/^i(\d)$/, "yi$1").replace(/^i/, "y")
  // 逆規則10
    .replace(/([iuv])en/g, "$1n")
  // 逆規則05，
    .replace(/ung/g, "ong")
  // 逆規則04，
    .replace(/uei/g, "ui")
  // 逆規則03，
    .replace(/iou/g, "iu");
  // 逆規則02，兒化音，微軟、雅虎、新酷音的注音輸入法皆沒有輕聲兒化音
  //.replace(/^er5$/, "r5")
};

// 注音詞彙字串 -> 拼音詞彙字串
var 注音詞彙字串轉拼音 = function(注音詞彙字串, 輸入的詞庫名){
  var 分隔符 = (輸入的詞庫名 === "yahoo") ? "," : " ";
  return 注音字串轉陣列(注音詞彙字串, 分隔符).map(function(單字注音字串){
    return 注音鍵碼轉漢拚(注音符號轉鍵碼(單字注音字串));
  }).join(" ");
};