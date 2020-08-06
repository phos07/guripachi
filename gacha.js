document.getElementById("normal3").style.display = "none";
document.getElementById("normal3L").style.display = "none";
document.getElementById("normal3H").style.display = "none";
document.getElementById("normal5").style.display = "none";
document.getElementById("normal5L").style.display = "none";
document.getElementById("normal5H").style.display = "none";
document.getElementById("normal7").style.display = "none";
document.getElementById("normal7L").style.display = "none";
document.getElementById("normal7H").style.display = "none";
document.getElementById("battlenormal").style.display = "none";
document.getElementById("battlechance").style.display = "none";
document.getElementById("battlehot").style.display = "none";
document.getElementById("battlesuper").style.display = "none";

// normal 3 and 5
const expected_35N = [37.365, 61];
var total_3N = 0;
var total_5N = 0;
var total35 = [total_3N, total_5N];
var rolls_3N = 0;
var rolls_5N = 0;
var rolls35 = [rolls_3N, rolls_5N];

var num60_3N = 0;
var num30_3N = 0;
var num10_3N = 0;
var num5_3N = 0;
var num3_3N = 0;
var num1_3N = 0;
var num1_5N = 0;
var num3_5N = 0;
var num5_5N = 0;
var num10_5N = 0;
var num30_5N = 0;
var num60_5N = 0;

var num1 = [num1_3N, num1_5N];
var num3 = [num3_3N, num3_5N];
var num5 = [num5_3N, num5_3N];
var num10 = [num10_3N, num10_5N];
var num30 = [num30_3N, num30_5N];
var num60 = [num60_3N, num60_5N];

function toggle() {
  var value = document.getElementById("select").value;

  if (value === '0') {
    document.getElementById("normal3").style.display = "block";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value === '1') {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "block";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value === '2') {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "block";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value === '3') {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "block";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value === '4') {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "block";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value === '5') {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "block";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value === '6') {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "block";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value === '7') {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "block";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value === '8') {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "block";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value == 9) {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "block";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value == 10) {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "block";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value == 11) {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "block";
    document.getElementById("battlesuper").style.display = "none";
  } else if (value == 12) {
    document.getElementById("normal3").style.display = "none";
    document.getElementById("normal3L").style.display = "none";
    document.getElementById("normal3H").style.display = "none";
    document.getElementById("normal5").style.display = "none";
    document.getElementById("normal5L").style.display = "none";
    document.getElementById("normal5H").style.display = "none";
    document.getElementById("normal7").style.display = "none";
    document.getElementById("normal7L").style.display = "none";
    document.getElementById("normal7H").style.display = "none";
    document.getElementById("battlenormal").style.display = "none";
    document.getElementById("battlechance").style.display = "none";
    document.getElementById("battlehot").style.display = "none";
    document.getElementById("battlesuper").style.display = "block";
  }
};

const expected_7N = 84.98;
var total_7N = 0;
var rolls_7N = 0;

var num60_7N = 0;
var num30_7N = 0;
var num15_7N = 0;
var num10_7N = 0;
var num7_7N = 0;
var num5_7N = 0;
var num3_7N = 0;
var num1_7N = 0;

function normal7() {

  document.getElementById("result7N").innerHTML = "";

  for (var i = 0; i < 7; i++) {
    var rand = Math.floor(Math.random()*100);
    if (rand > 91) {
      num60_7N += 1;
      document.getElementById("result7N").insertAdjacentHTML("beforeend", "確率破壊60分<br>");
      total_7N += 60;
    } else if (rand > 83) {
      num30_7N += 1;
      document.getElementById("result7N").insertAdjacentHTML("beforeend", "確率破壊30分<br>");
      total_7N += 30;
    } else if (rand > 73) {
      num15_7N += 1;
      document.getElementById("result7N").insertAdjacentHTML("beforeend", "確率破壊15分<br>");
      total_7N += 15;
    } else if (rand > 61) {
      num10_7N += 1;
      document.getElementById("result7N").insertAdjacentHTML("beforeend", "確率破壊10分<br>");
      total_7N += 10;
    } else if (rand > 49) {
      num7_7N += 1;
      document.getElementById("result7N").insertAdjacentHTML("beforeend", "確率破壊7分<br>");
      total_7N += 7;
    } else if (rand > 34) {
      num5_7N += 1;
      document.getElementById("result7N").insertAdjacentHTML("beforeend", "確率破壊5分<br>");
      total_7N += 5;
    } else if (rand > 19) {
      num3_7N += 1;
      document.getElementById("result7N").insertAdjacentHTML("beforeend", "確率破壊3分<br>");
      total_7N += 3;
    } else if (rand > -1) {
      num1_7N += 1;
      document.getElementById("result7N").insertAdjacentHTML("beforeend", "確率破壊1分<br>");
      total_7N += 1;
    } else {
      console.log("error");
      document.getElementById("result7N").insertAdjacentHTML("beforeend", "確率破壊エラー分<br>");
      break;
    }
  }

  rolls_7N += 1
  var expected = expected_7N * rolls_7N;
  var exp = Math.round(expected * 10000) / 10000;
  var plusminus = total_7N - expected;
  var gain = Math.round(plusminus * 10000) / 10000;

  var cards = rolls_7N * 7;
  var p60 = Math.round((num60_7N/cards)*10000) / 100;
  var p30 = Math.round((num30_7N/cards)*10000) / 100;
  var p15 = Math.round((num15_7N/cards)*10000) / 100;
  var p10 = Math.round((num10_7N/cards)*10000) / 100;
  var p7 = Math.round((num7_7N/cards)*10000) / 100;
  var p5 = Math.round((num5_7N/cards)*10000) / 100;
  var p3 = Math.round((num3_7N/cards)*10000) / 100;
  var p1 = Math.round((num1_7N/cards)*10000) / 100;
  document.getElementById("total7N").innerHTML = "ガチャ試行回数: " + rolls_7N + "回<br>" ;
  document.getElementById("total7N").insertAdjacentHTML("beforeend", "合計分数:" + total_7N + "分<br>合計期待値: " + exp + "分 （" + gain + "分)<br><br>");
  document.getElementById("total7N").insertAdjacentHTML("beforeend", "破壊1分: " + num1_7N + "枚 (" + p1 + "%)<br>破壊3分: " + num3_7N + "枚 (" + p3 + "%)<br>破壊5分: " + num5_7N + "枚 (" + p5 + "%)<br>破壊7分: " + num7_7N + "枚 (" + p7 + "%)<br>破壊10分: " + num10_7N + "枚 (" + p10 + "%)<br>破壊15分: " + num15_7N + "枚 (" + p15 + "%)<br>破壊30分: " + num30_7N + "枚 (" + p30 + "%)<br>破壊60分: " + num60_7N + "枚 (" + p60 + "%)<br>");
};

function reset7() {
  var list = [num1_7N, num3_7N, num5_7N, num7_7N, num10_7N, num15_7N, num30_7N, num60_7N];

  for (var i = 0; i < 7; i++) {
    var pre = list[i];
    pre[i] = 0;
  }

  rolls_7N = 0;
  total_7N = 0;

  document.getElementById("total7N").innerHTML = "";

  document.getElementById("total7N").innerHTML = "ガチャ試行回数: 0回<br>";
  document.getElementById("total7N").insertAdjacentHTML("beforeend", "合計分数:0分<br>合計期待値: 0分 （0分)<br><br>");
  document.getElementById("total7N").insertAdjacentHTML("beforeend", "破壊1分: 0枚 (0%)<br>破壊3分: 0枚 (0%)<br>破壊5分: 0枚 (0%)<br>破壊7分: 0枚 (0%)<br>破壊10分: 0枚 (0%)<br>破壊15分: 0枚 (0%)<br>破壊30分: 0枚 (0%)<br>破壊60分: 0枚 (0%)<br>");
}


function normal35(x, y) {
  var idlist_result = ["result3N", "result5N"];
  var idlist_total = ["total3N", "total5N"];
  var numrolls = [3, 5];

  document.getElementById(idlist_result[y]).innerHTML = "";

  for (var i = 0; i < x; i++) {
    var rand = Math.floor(Math.random()*100);
    if (rand > 89) {
      num60[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊60分<br>");
      total35[y] += 60;
    } else if (rand > 79) {
      num30[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊30分<br>");
      total35[y] += 30;
    } else if (rand > 69) {
      num10[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊10分<br>");
      total35[y] += 10;
    } else if (rand > 44) {
      num5[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊5分<br>");
      total35[y] += 5;
    } else if (rand > 19) {
      num3[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊3分<br>");
      total35[y] += 3;
    } else if (rand > -1) {
      num1[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊1分<br>");
      total35[y] += 1;
    } else {
      console.log("error");
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊エラー分<br>");
      break;
    }
  }

  rolls35[y] += 1
  var expected = expected_35N[y] * rolls35[y];
  var exp = Math.round(expected * 10000) / 10000;
  var plusminus = total35[y] - expected;
  var gain = Math.round(plusminus * 10000) / 10000;

  var cards = rolls35[y] * numrolls[y];
  var p60 = Math.round((num60[y]/cards)*10000) / 100;
  var p30 = Math.round((num30[y]/cards)*10000) / 100;
  var p10 = Math.round((num10[y]/cards)*10000) / 100;
  var p5 = Math.round((num5[y]/cards)*10000) / 100;
  var p3 = Math.round((num3[y]/cards)*10000) / 100;
  var p1 = Math.round((num1[y]/cards)*10000) / 100;
  document.getElementById(idlist_total[y]).innerHTML = "ガチャ試行回数: " + rolls35[y] + "回<br>" ;
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "合計分数:" + total35[y] + "分<br>合計期待値: " + exp + "分 （" + gain + "分)<br><br>");
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "破壊1分: " + num1[y] + "枚 (" + p1 + "%)<br>破壊3分: " + num3[y] + "枚 (" + p3 + "%)<br>破壊5分: " + num5[y] + "枚 (" + p5 + "%)<br>破壊10分: " + num10[y] + "枚 (" + p10 + "%)<br>破壊30分: " + num30[y] + "枚 (" + p30 + "%)<br>破壊60分: " + num60[y] + "枚 (" + p60 + "%)<br>");
};

function reset35(y) {
  var list = [num1, num3, num5, num10, num30, num60];
  var idlist_result = ["result3N", "result5N"];
  var idlist_total = ["total3N", "total5N"];

  for (var i = 0; i < 6; i++) {
    var pre = list[i];
    pre[i] = 0;
  }

  rolls35[y] = 0;
  total35[y] = 0;

  document.getElementById(idlist_result[y]).innerHTML = "";

  document.getElementById(idlist_total[y]).innerHTML = "ガチャ試行回数: 0回<br>";
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "合計分数:0分<br>合計期待値: 0分 （0分)<br><br>");
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "破壊1分: 0枚 (0%)<br>破壊3分: 0枚 (0%)<br>破壊5分: 0枚 (0%)<br>破壊10分: 0枚 (0%)<br>破壊30分: 0枚 (0%)<br>破壊60分: 0枚 (0%)<br>");
}


// light 3 and 5 and 7
const expected_357L = [16.344, 27.24, 38.136];
var total_3L = 0;
var total_5L = 0;
var total_7L = 0;
var total357L = [total_3L, total_5L, total_7L];
var rolls_3L = 0;
var rolls_5L = 0;
var rolls_7L = 0;
var rolls357L = [rolls_3L, rolls_5L, rolls_7L];

var num60_3L = 0;
var num30_3L = 0;
var num15_3L = 0;
var num10_3L = 0;
var num7_3L = 0;
var num5_3L = 0;
var num3_3L = 0;
var num1_3L = 0;

var num60_5L = 0;
var num30_5L = 0;
var num15_5L = 0;
var num10_5L = 0;
var num7_5L = 0;
var num5_5L = 0;
var num3_5L = 0;
var num1_5L = 0;

var num60_7L = 0;
var num30_7L = 0;
var num15_7L = 0;
var num10_7L = 0;
var num7_7L = 0;
var num5_7L = 0;
var num3_7L = 0;
var num1_7L = 0;

var num1_357L = [num1_3L, num1_5L, num1_7L];
var num3_357L = [num3_3L, num3_5L, num3_7L];
var num5_357L = [num5_3L, num5_5L, num5_7L];
var num7_357L = [num7_3L, num7_5L, num7_7L];
var num10_357L = [num10_3L, num10_5L, num10_7L];
var num15_357L = [num15_3L, num15_5L, num15_7L];
var num30_357L = [num30_3L, num30_5L, num30_7L];
var num60_357L = [num60_3L, num60_5L, num60_7L];

function light357(x, y) {
  var idlist_result = ["result3L", "result5L", "result7L"];
  var idlist_total = ["total3L", "total5L", "total7L"];
  var numrolls = [3, 5, 7];

  document.getElementById(idlist_result[y]).innerHTML = "";

  for (var i = 0; i < x; i++) {
    var rand = Math.floor(Math.random()*10000);
    if (rand > 9974) {
      num60_357L[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊60分<br>");
      total357L[y] += 60;
    } else if (rand > 9949) {
      num30_357L[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊30分<br>");
      total357L[y] += 30;
    } else if (rand > 9899) {
      num15_357L[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊15分<br>");
      total357L[y] += 15;
    } else if (rand > 7919) {
      num10_357L[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊10分<br>");
      total357L[y] += 10;
    } else if (rand > 5939) {
      num7_357L[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊7分<br>");
      total357L[y] += 7;
    } else if (rand > 3959) {
      num5_357L[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊5分<br>");
      total357L[y] += 5;
    } else if (rand > 1979) {
      num3_357L[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊3分<br>");
      total357L[y] += 3;
    } else if (rand > -1) {
      num1_357L[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊1分<br>");
      total357L[y] += 1;
    } else {
      console.log("error");
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊エラー分<br>");
      break;
    }
  }

  rolls357L[y] += 1
  var expected = expected_357L[y] * rolls357L[y];
  var exp = Math.round(expected * 10000) / 10000;
  var plusminus = total357L[y] - expected;
  var gain = Math.round(plusminus * 10000) / 10000;

  var cards = rolls357L[y] * numrolls[y];
  var p60 = Math.round((num60_357L[y]/cards)*10000) / 100;
  var p30 = Math.round((num30_357L[y]/cards)*10000) / 100;
  var p15 = Math.round((num15_357L[y]/cards)*10000) / 100;
  var p10 = Math.round((num10_357L[y]/cards)*10000) / 100;
  var p7 = Math.round((num7_357L[y]/cards)*10000) / 100;
  var p5 = Math.round((num5_357L[y]/cards)*10000) / 100;
  var p3 = Math.round((num3_357L[y]/cards)*10000) / 100;
  var p1 = Math.round((num1_357L[y]/cards)*10000) / 100;
  document.getElementById(idlist_total[y]).innerHTML = "ガチャ試行回数: " + rolls357L[y] + "回<br>" ;
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "合計分数:" + total357L[y] + "分<br>合計期待値: " + exp + "分 （" + gain + "分)<br><br>");
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "破壊1分: " + num1_357L[y] + "枚 (" + p1 + "%)<br>破壊3分: " + num3_357L[y] + "枚 (" + p3 + "%)<br>破壊5分: " + num5_357L[y] + "枚 (" + p5 + "%)<br>破壊7分: " + num7_357L[y] + "枚 (" + p7 + "%)<br>破壊10分: " + num10_357L[y] + "枚 (" + p10 + "%)<br>破壊15分: " + num15_357L[y] + "枚 (" + p15 + "%)<br>破壊30分: " + num30_357L[y] + "枚 (" + p30 + "%)<br>破壊60分: " + num60_357L[y] + "枚 (" + p60 + "%)<br>");
};

function reset357L(y) {
  var list = [num1_357L, num3_357L, num5_357L, num7_357L, num10_357L, num15_357L, num30_357L, num60_357L];
  var idlist_result = ["result3L", "result5L", "result7L"];
  var idlist_total = ["total3L", "total5L", "total7L"];

  for (var i = 0; i < 8; i++) {
    var pre = list[i];
    pre[i] = 0;
  }

  rolls357L[y] = 0;
  total357L[y] = 0;

  document.getElementById(idlist_result[y]).innerHTML = "";

  document.getElementById(idlist_total[y]).innerHTML = "ガチャ試行回数: 0回<br>";
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "合計分数:0分<br>合計期待値: 0分 （0分)<br><br>");
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "破壊1分: 0枚 (0%)<br>破壊3分: 0枚 (0%)<br>破壊5分: 0枚 (0%)<br>破壊7分: 0枚 (0%)<br>破壊10分: 0枚 (0%)<br>破壊15分: 0枚 (0%)<br>破壊30分: 0枚 (0%)<br>破壊60分: 0枚 (0%)<br>");
}



// hyper 3 and 5 and 7
const expected_357H = [60.535, 100.875, 141.225];
var total_3H = 0;
var total_5H = 0;
var total_7H = 0;
var total357H = [total_3H, total_5H, total_7H];
var rolls_3H = 0;
var rolls_5H = 0;
var rolls_7H = 0;
var rolls357H = [rolls_3H, rolls_5H, rolls_7H];

var num60_3H = 0;
var num30_3H = 0;
var num15_3H = 0;
var num10_3H = 0;
var num1_3H = 0;

var num60_5H = 0;
var num30_5H = 0;
var num15_5H = 0;
var num10_5H = 0;
var num1_5H = 0;

var num60_7H = 0;
var num30_7H = 0;
var num15_7H = 0;
var num10_7H = 0;
var num1_7H = 0;

var num1_357H = [num1_3H, num1_5H, num1_7H];
var num10_357H = [num10_3H, num10_5H, num10_7H];
var num15_357H = [num15_3H, num15_5H, num15_7H];
var num30_357H = [num30_3H, num30_5H, num30_7H];
var num60_357H = [num60_3H, num60_5H, num60_7H];

function hyper357(x, y) {
  var idlist_result = ["result3H", "result5H", "result7H"];
  var idlist_total = ["total3H", "total5H", "total7H"];

  document.getElementById(idlist_result[y]).innerHTML = "";

  for (var i = 0; i < x; i++) {
    var rand = Math.floor(Math.random()*1000);
    if (rand > 899) {
      num60_357H[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊60分<br>");
      total357H[y] += 60;
    } else if (rand > 699) {
      num30_357H[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊30分<br>");
      total357H[y] += 30;
    } else if (rand > 374) {
      num15_357H[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊15分<br>");
      total357H[y] += 15;
    } else if (rand > 49) {
      num10_357H[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊10分<br>");
      total357H[y] += 10;
    } else if (rand > -1) {
      num1_357H[y] += 1;
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊1分<br>");
      total357H[y] += 1;
    } else {
      document.getElementById(idlist_result[y]).insertAdjacentHTML("beforeend", "確率破壊エラー分<br>");
      break;
    }
  }

  rolls357H[y] += 1
  var expected = expected_357H[y] * rolls357H[y];
  var exp = Math.round(expected * 10000) / 10000;
  var plusminus = total357H[y] - expected;
  var gain = Math.round(plusminus * 10000) / 10000;

  var cards = rolls357H[y] * x;
  var p60 = Math.round((num60_357H[y]/cards)*10000) / 100;
  var p30 = Math.round((num30_357H[y]/cards)*10000) / 100;
  var p15 = Math.round((num15_357H[y]/cards)*10000) / 100;
  var p10 = Math.round((num10_357H[y]/cards)*10000) / 100;
  var p1 = Math.round((num1_357H[y]/cards)*10000) / 100;
  document.getElementById(idlist_total[y]).innerHTML = "ガチャ試行回数: " + rolls357H[y] + "回<br>" ;
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "合計分数:" + total357H[y] + "分<br>合計期待値: " + exp + "分 （" + gain + "分)<br><br>");
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "破壊1分: " + num1_357H[y] + "枚 (" + p1 + "%)<br>破壊10分: " + num10_357H[y] + "枚 (" + p10 + "%)<br>破壊15分: " + num15_357H[y] + "枚 (" + p15 + "%)<br>破壊30分: " + num30_357H[y] + "枚 (" + p30 + "%)<br>破壊60分: " + num60_357H[y] + "枚 (" + p60 + "%)<br>");
};

function reset357H(y) {
  var list = [num1_357H, num10_357H, num15_357H, num30_357H, num60_357H];
  var idlist_result = ["result3H", "result5H", "result7H"];
  var idlist_total = ["total3H", "total5H", "total7H"];

  for (var i = 0; i < 5; i++) {
    var pre = list[i];
    pre[i] = 0;
  }

  rolls357H[y] = 0;
  total357H[y] = 0;

  document.getElementById(idlist_result[y]).innerHTML = "";

  document.getElementById(idlist_total[y]).innerHTML = "ガチャ試行回数: 0回<br>";
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "合計分数:0分<br>合計期待値: 0分 （0分)");
  document.getElementById(idlist_total[y]).insertAdjacentHTML("beforeend", "破壊1分: 0枚 (0%)<br>破壊10分: 0枚 (0%)<br>破壊15分: 0枚 (0%)<br>破壊30分: 0枚 (0%)<br>破壊60分: 0枚 (0%)<br>");
}

var rateBN = 0;
function aurabattlenormal() {

  var colorAura = 0;

  var percent = Math.floor(Math.random()*100);
  if (percent > 98) {
    rateBN = 10;
    colorAura = 4;
  } else if (percent > 95) {
    rateBN = 19;
    colorAura = 3;
  } else if (percent > 79) {
    rateBN = 28;
    colorAura = 2;
  } else if (percent > -1) {
    rateBN = 34;
    colorAura = 1;
  }

  if (colorAura === 4) {
    var random = Math.floor(Math.random()*100);
    if (random > 89) {
      document.getElementById("resultBN").innerHTML = "<h1 class='testRainbow'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > 24) {
      document.getElementById("resultBN").innerHTML = "<h1 class='testRed'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > 9) {
      document.getElementById("resultBN").innerHTML = "<h1 class='testGreen'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > -1) {
      document.getElementById("resultBN").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    }
  } else if (colorAura === 3) {
    var random = Math.floor(Math.random()*100);
    if (random > 34) {
      document.getElementById("resultBN").innerHTML = "<h1 class='testRed'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > 19) {
      document.getElementById("resultBN").innerHTML = "<h1 class='testGreen'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > -1) {
      document.getElementById("resultBN").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    }
  } else if (colorAura === 2) {
    var random = Math.floor(Math.random()*100);
    if (random > 69) {
      document.getElementById("resultBN").innerHTML = "<h1 class='testGreen'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > -1) {
      document.getElementById("resultBN").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    }
  } else if (colorAura === 1) {
    document.getElementById("resultBN").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
  }


  document.getElementById("resultBN").insertAdjacentHTML("beforeend", "<button type='button' class='btn btn-primary' onClick='battlenormal()'>TAP</button>");

};

function battlenormal() {

  var num = 0;
  var go = true;

  while (go) {
    var rand = Math.floor(Math.random()*100);

    if (num == 0) {
      num += 1;
    } else if (rand > rateBN) {
      num += 1;
    } else {
      go = false;
    };
  };

  var rainbow = 0;
  var gold = 0;
  var silver = 0;

  for (var i = 0; i < num; i++) {
    var rand = Math.floor(Math.random()*10000);

    if (rand > 9665) {
      rainbow += 1;
    } else if (rand > 6665) {
      gold += 1;
    } else if (rand > -1) {
      silver += 1;
    } else {
      break;
    }
  }

  var readrate = 99 - rateBN;
  document.getElementById("resultBN").innerHTML = "継続回数: " + num + "回<br>";
  document.getElementById("resultBN").insertAdjacentHTML("beforeend", "継続率は" + readrate + "%でした。<br><br>銀の宝玉: " + silver + "個<br>金の宝玉: " + gold + "個<br>虹の宝玉: " + rainbow + "個");
};

var rateBC = 0;
function aurabattlechance() {

  var colorAura = 0;

  var percent = Math.floor(Math.random()*100);
  if (percent > 94) {
    rateBC = 10;
    colorAura = 4;
  } else if (percent > 79) {
    rateBC = 19;
    colorAura = 3;
  } else if (percent > -1) {
    rateBC = 28;
    colorAura = 2;
  }

  if (colorAura === 4) {
    var random = Math.floor(Math.random()*100);
    if (random > 89) {
      document.getElementById("resultBC").innerHTML = "<h1 class='testRainbow'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > 24) {
      document.getElementById("resultBC").innerHTML = "<h1 class='testRed'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > 9) {
      document.getElementById("resultBC").innerHTML = "<h1 class='testGreen'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > -1) {
      document.getElementById("resultBC").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    }
  } else if (colorAura === 3) {
    var random = Math.floor(Math.random()*100);
    if (random > 34) {
      document.getElementById("resultBC").innerHTML = "<h1 class='testRed'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > 19) {
      document.getElementById("resultBC").innerHTML = "<h1 class='testGreen'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > -1) {
      document.getElementById("resultBC").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    }
  } else if (colorAura === 2) {
    var random = Math.floor(Math.random()*100);
    if (random > 69) {
      document.getElementById("resultBC").innerHTML = "<h1 class='testGreen'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > -1) {
      document.getElementById("resultBC").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    }
  } else if (colorAura === 1) {
    document.getElementById("resultBC").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
  }


  document.getElementById("resultBC").insertAdjacentHTML("beforeend", "<button type='button' class='btn btn-primary' onClick='battlechance()'>TAP</button>");

};

function battlechance() {

  var num = 0;
  var go = true;


  while (go) {
    var rand = Math.floor(Math.random()*100);

    if (num == 0) {
      num += 1;
    } else if (rand > rateBC) {
      num += 1;
    } else {
      go = false;
    };
  };

  var rainbow = 0;
  var gold = 0;
  var silver = 0;

  for (var i = 0; i < num; i++) {
    var rand = Math.floor(Math.random()*10000);

    if (rand > 9665) {
      rainbow += 1;
    } else if (rand > 6665) {
      gold += 1;
    } else if (rand > -1) {
      silver += 1;
    } else {
      break;
    }
  }

  var readrate = 99 - rateBC;
  document.getElementById("resultBC").innerHTML = "継続回数: " + num + "回<br>";
  document.getElementById("resultBC").insertAdjacentHTML("beforeend", "継続率は" + readrate + "%でした。<br><br>銀の宝玉: " + silver + "個<br>金の宝玉: " + gold + "個<br>虹の宝玉: " + rainbow + "個");
};


var rateBH = 0;
function aurabattlehot() {

  var colorAura = 0;

  var percent = Math.floor(Math.random()*100);
  if (percent > 74) {
    rateBH = 10;
    colorAura = 4;
  } else if (percent > -1) {
    rateBH = 19;
    colorAura = 3;
  }


  if (colorAura === 4) {
    var random = Math.floor(Math.random()*100);
    if (random > 89) {
      document.getElementById("resultBH").innerHTML = "<h1 class='testRainbow'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > 24) {
      document.getElementById("resultBH").innerHTML = "<h1 class='testRed'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > 9) {
      document.getElementById("resultBH").innerHTML = "<h1 class='testGreen'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > -1) {
      document.getElementById("resultBH").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    }
  } else if (colorAura === 3) {
    var random = Math.floor(Math.random()*100);
    if (random > 34) {
      document.getElementById("resultBH").innerHTML = "<h1 class='testRed'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > 19) {
      document.getElementById("resultBH").innerHTML = "<h1 class='testGreen'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > -1) {
      document.getElementById("resultBH").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    }
  } else if (colorAura === 2) {
    var random = Math.floor(Math.random()*100);
    if (random > 69) {
      document.getElementById("resultBH").innerHTML = "<h1 class='testGreen'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > -1) {
      document.getElementById("resultBH").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    }
  } else if (colorAura === 1) {
    document.getElementById("resultBH").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
  }


  document.getElementById("resultBH").insertAdjacentHTML("beforeend", "<button type='button' class='btn btn-primary' onClick='battlehot()'>TAP</button>");

};

function battlehot() {

  var num = 0;
  var go = true;

  while (go) {
    var rand = Math.floor(Math.random()*100);

    if (num == 0) {
      num += 1;
    } else if (rand > rateBH) {
      num += 1;
    } else {
      go = false;
    };
  };

  var rainbow = 0;
  var gold = 0;
  var silver = 0;

  for (var i = 0; i < num; i++) {
    var rand = Math.floor(Math.random()*10000);

    if (rand > 9665) {
      rainbow += 1;
    } else if (rand > 6665) {
      gold += 1;
    } else if (rand > -1) {
      silver += 1;
    } else {
      break;
    }
  }

  var readrate = 99 - rateBH;
  document.getElementById("resultBH").innerHTML = "継続回数: " + num + "回<br>";
  document.getElementById("resultBH").insertAdjacentHTML("beforeend", "継続率は" + readrate + "%でした。<br><br>銀の宝玉: " + silver + "個<br>金の宝玉: " + gold + "個<br>虹の宝玉: " + rainbow + "個");
};

function aurabattlesuper() {

    var random = Math.floor(Math.random()*100);
    if (random > 89) {
      document.getElementById("resultBS").innerHTML = "<h1 class='testRainbow'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > 24) {
      document.getElementById("resultBS").innerHTML = "<h1 class='testRed'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > 9) {
      document.getElementById("resultBS").innerHTML = "<h1 class='testGreen'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    } else if (random > -1) {
      document.getElementById("resultBS").innerHTML = "<h1 class='testBlue'>NEXT BATTLE</h1><br><br><br><br><br><br>";
    };

  document.getElementById("resultBS").insertAdjacentHTML("beforeend", "<button type='button' class='btn btn-primary' onClick='battlesuper()'>TAP</button>");
};

function battlesuper() {

  var rateBS = 10;
  var num = 0;
  var go = true;

  while (go) {
    var rand = Math.floor(Math.random()*100);

    if (num == 0) {
      num += 1;
    } else if (rand > rateBS) {
      num += 1;
    } else {
      go = false;
    };
  };

  var rainbow = 0;
  var gold = 0;
  var silver = 0;

  for (var i = 0; i < num; i++) {
    var rand = Math.floor(Math.random()*10000);

    if (rand > 9665) {
      rainbow += 1;
    } else if (rand > 6665) {
      gold += 1;
    } else if (rand > -1) {
      silver += 1;
    } else {
      break;
    }
  }

  var readrate = 99 - rateBS;
  document.getElementById("resultBS").innerHTML = "継続回数: " + num + "回<br>";
  document.getElementById("resultBS").insertAdjacentHTML("beforeend", "継続率は" + readrate + "%でした。<br><br>銀の宝玉: " + silver + "個<br>金の宝玉: " + gold + "個<br>虹の宝玉: " + rainbow + "個");
};
