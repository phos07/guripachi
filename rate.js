
document.getElementById("ratehakai1").value = localStorage.getItem("hakai1R");
document.getElementById("ratehakai3").value = localStorage.getItem("hakai3R");
document.getElementById("ratehakai5").value = localStorage.getItem("hakai5R");
document.getElementById("ratehakai7").value = localStorage.getItem("hakai7R");
document.getElementById("ratehakai10").value = localStorage.getItem("hakai10R");
document.getElementById("ratehakai15").value = localStorage.getItem("hakai15R");
document.getElementById("ratehakai30").value = localStorage.getItem("hakai30R");
document.getElementById("ratehakai60").value = localStorage.getItem("hakai60R");
document.getElementById("ratehakai120").value = localStorage.getItem("hakai120R");
document.getElementById("ratehakaiinf").value = localStorage.getItem("hakaiinfR");

document.getElementById("ratekakuseihakai1").value = localStorage.getItem("kakuseihakai1R");
document.getElementById("ratekakuseihakai3").value = localStorage.getItem("kakuseihakai3R");
document.getElementById("ratekakuseihakai5").value = localStorage.getItem("kakuseihakai5R");

document.getElementById("ratebonuscut1").value = localStorage.getItem("bonuscut1R");
document.getElementById("ratebonuscut5").value = localStorage.getItem("bonuscut5R");
document.getElementById("ratebonuscut10").value = localStorage.getItem("bonuscut10R");
document.getElementById("ratebonuscut15").value = localStorage.getItem("bonuscut15R");
document.getElementById("ratebonuscut30").value = localStorage.getItem("bonuscut30R");
document.getElementById("ratebonuscut60").value = localStorage.getItem("bonuscut60R");
document.getElementById("ratebonuscut120").value = localStorage.getItem("bonuscut120R");
document.getElementById("ratebonuscutinf").value = localStorage.getItem("bonuscutinfR");

document.getElementById("ratenonstop60").value = localStorage.getItem("nonstop60R");
document.getElementById("ratenonstop120").value = localStorage.getItem("nonstop120R");
document.getElementById("ratenonstopinf").value = localStorage.getItem("nonstopinfR");
document.getElementById("ratemasterinf").value = localStorage.getItem("masterinfR");

document.getElementById("ratedia").value = localStorage.getItem("diaR");
document.getElementById("ratehakaigacha").value = localStorage.getItem("hakaigachaR");
document.getElementById("rateemerald").value = localStorage.getItem("emeraldR");
document.getElementById("ratesuperemerald").value = localStorage.getItem("superemeraldR");
document.getElementById("ratecrazy").value = localStorage.getItem("crazyR");
document.getElementById("ratehakaigame").value = localStorage.getItem("hakaigameR");
document.getElementById("ratechokugame").value = localStorage.getItem("chokugameR");
document.getElementById("ratebike").value = localStorage.getItem("bikeR");
document.getElementById("ratemissile").value = localStorage.getItem("missileR");

document.getElementById("rate3L").value = localStorage.getItem("3LR");
document.getElementById("rate3N").value = localStorage.getItem("3NR");
document.getElementById("rate3H").value = localStorage.getItem("3HR");

document.getElementById("rate5L").value = localStorage.getItem("5LR");
document.getElementById("rate5N").value = localStorage.getItem("5NR");
document.getElementById("rate5H").value = localStorage.getItem("5HR");

document.getElementById("rate7L").value = localStorage.getItem("7LR");
document.getElementById("rate7N").value = localStorage.getItem("7NR");
document.getElementById("rate7H").value = localStorage.getItem("7HR");

document.getElementById("ratebattleN").value = localStorage.getItem("battleNR");
document.getElementById("ratebattleC").value = localStorage.getItem("battleCR");
document.getElementById("ratebattleH").value = localStorage.getItem("battleHR");
document.getElementById("ratebattleSH").value = localStorage.getItem("battleSHR");

document.getElementById("rateaooni").value = localStorage.getItem("aooniR");
document.getElementById("ratefes").value = localStorage.getItem("fesR");

document.getElementById("rateshifukuP").value = localStorage.getItem("shifukuPR");
document.getElementById("rateshifukuL").value = localStorage.getItem("shifukuLR");
document.getElementById("rateshifukuN").value = localStorage.getItem("shifukuNR");

document.getElementById("ratesetting").value = localStorage.getItem("settingR");
document.getElementById("ratechecksetting").value = localStorage.getItem("checksettingR");
document.getElementById("ratex1_5").value = localStorage.getItem("x1_5R");
document.getElementById("ratex2").value = localStorage.getItem("x2R");
document.getElementById("rateslotchoku").value = localStorage.getItem("slotchokuR");
document.getElementById("ratepachichoku").value = localStorage.getItem("pachichokuR");
document.getElementById("ratespecialchoku").value = localStorage.getItem("specialchokuR");

function pushRates() {
var rateHakai1 = parseFloat(document.ratehakai.ratehakai1.value);
var rateHakai3 = parseFloat(document.ratehakai.ratehakai3.value);
var rateHakai5 = parseFloat(document.ratehakai.ratehakai5.value);
var rateHakai7 = parseFloat(document.ratehakai.ratehakai7.value);
var rateHakai10 = parseFloat(document.ratehakai.ratehakai10.value);
var rateHakai15 = parseFloat(document.ratehakai.ratehakai15.value);
var rateHakai30 = parseFloat(document.ratehakai.ratehakai30.value);
var rateHakai60 = parseFloat(document.ratehakai.ratehakai60.value);
var rateHakai120 = parseFloat(document.ratehakai.ratehakai120.value);
var rateHakaiInf = parseFloat(document.ratehakai.ratehakaiinf.value);

var rateKakuseiHakai1 = parseFloat(document.ratehakai.ratekakuseihakai1.value);
var rateKakuseiHakai3 = parseFloat(document.ratehakai.ratekakuseihakai3.value);
var rateKakuseiHakai5 = parseFloat(document.ratehakai.ratekakuseihakai5.value);

var rateBonusCut1 = parseFloat(document.ratebonusnonstop.ratebonuscut1.value);
var rateBonusCut5 = parseFloat(document.ratebonusnonstop.ratebonuscut5.value);
var rateBonusCut10 = parseFloat(document.ratebonusnonstop.ratebonuscut10.value);
var rateBonusCut15 = parseFloat(document.ratebonusnonstop.ratebonuscut15.value);
var rateBonusCut30 = parseFloat(document.ratebonusnonstop.ratebonuscut30.value);
var rateBonusCut60 = parseFloat(document.ratebonusnonstop.ratebonuscut60.value);
var rateBonusCut120 = parseFloat(document.ratebonusnonstop.ratebonuscut120.value);
var rateBonusCutInf = parseFloat(document.ratebonusnonstop.ratebonuscutinf.value);

var rateNonstop60 = parseFloat(document.ratebonusnonstop.ratenonstop60.value);
var rateNonstop120 = parseFloat(document.ratebonusnonstop.ratenonstop120.value);
var rateNonstopInf = parseFloat(document.ratebonusnonstop.ratenonstopinf.value);
var rateMasterInf = parseFloat(document.ratebonusnonstop.ratemasterinf.value);

var rateDia = parseFloat(document.rategacha.ratedia.value);
var rateHakaiGacha = parseFloat(document.rategacha.ratehakaigacha.value);
var rateEmerald = parseFloat(document.rategacha.rateemerald.value);
var rateSuperEmerald = parseFloat(document.rategacha.ratesuperemerald.value);
var rateCrazy = parseFloat(document.rategacha.ratecrazy.value);
var rateHakaiGame = parseFloat(document.rategacha.ratehakaigame.value);
var rateChokuGame = parseFloat(document.rategacha.ratechokugame.value);
var rateBike = parseFloat(document.rategacha.ratebike.value);
var rateMissile = parseFloat(document.rategacha.ratemissile.value);

var rate3Light = parseFloat(document.rategacha.rate3L.value);
var rate3Normal = parseFloat(document.rategacha.rate3N.value);
var rate3Hyper = parseFloat(document.rategacha.rate3H.value);

var rate5Light = parseFloat(document.rategacha.rate5L.value);
var rate5Normal = parseFloat(document.rategacha.rate5N.value);
var rate5Hyper = parseFloat(document.rategacha.rate5H.value);

var rate7Light = parseFloat(document.rategacha.rate7L.value);
var rate7Normal = parseFloat(document.rategacha.rate7N.value);
var rate7Hyper = parseFloat(document.rategacha.rate7H.value);

var rateBattleNormal = parseFloat(document.rategacha.ratebattleN.value);
var rateBattleChance = parseFloat(document.rategacha.ratebattleC.value);
var rateBattleHot = parseFloat(document.rategacha.ratebattleH.value);
var rateBattleSuperHot = parseFloat(document.rategacha.ratebattleSH.value);

var rateAoOni = parseFloat(document.rategacha.rateaooni.value);
var rateFes = parseFloat(document.rategacha.ratefes.value);

var rateShifukuPuchi = parseFloat(document.rategacha.rateshifukuP.value);
var rateShifukuLight = parseFloat(document.rategacha.rateshifukuL.value);
var rateShifukuNormal = parseFloat(document.rategacha.rateshifukuN.value);

var rateSetting = parseFloat(document.ratemisc.ratesetting.value);
var rateCheckSetting = parseFloat(document.ratemisc.ratechecksetting.value);
var ratex1_5 = parseFloat(document.ratemisc.ratex1_5.value);
var ratex2 = parseFloat(document.ratemisc.ratex2.value);
var rateSlotchoku = parseFloat(document.ratemisc.rateslotchoku.value);
var ratePachichoku = parseFloat(document.ratemisc.ratepachichoku.value);
var rateSpecialchoku = parseFloat(document.ratemisc.ratespecialchoku.value);

localStorage.setItem("hakai1R", rateHakai1);
localStorage.setItem("hakai3R", rateHakai3);
localStorage.setItem("hakai5R", rateHakai5);
localStorage.setItem("hakai7R", rateHakai7);
localStorage.setItem("hakai10R", rateHakai10);
localStorage.setItem("hakai15R", rateHakai15);
localStorage.setItem("hakai30R", rateHakai30);
localStorage.setItem("hakai60R", rateHakai60);
localStorage.setItem("hakai120R", rateHakai120);
localStorage.setItem("hakaiinfR", rateHakaiInf);
localStorage.setItem("kakuseihakai1R", rateKakuseiHakai1);
localStorage.setItem("kakuseihakai3R", rateKakuseiHakai3);
localStorage.setItem("kakuseihakai5R", rateKakuseiHakai5);

localStorage.setItem("bonuscut1R", rateBonusCut1);
localStorage.setItem("bonuscut5R", rateBonusCut5);
localStorage.setItem("bonuscut10R", rateBonusCut10);
localStorage.setItem("bonuscut15R", rateBonusCut15);
localStorage.setItem("bonuscut30R", rateBonusCut30);
localStorage.setItem("bonuscut60R", rateBonusCut60);
localStorage.setItem("bonuscut120R", rateBonusCut120);
localStorage.setItem("bonuscutinfR", rateBonusCutInf);

localStorage.setItem("nonstop60R", rateNonstop60);
localStorage.setItem("nonstop120R", rateNonstop120);
localStorage.setItem("nonstopinfR", rateNonstopInf);
localStorage.setItem("masterinfR", rateMasterInf);

localStorage.setItem("diaR", rateDia);
localStorage.setItem("hakaigachaR", rateHakaiGacha);
localStorage.setItem("emeraldR", rateEmerald);
localStorage.setItem("superemeraldR", rateSuperEmerald);
localStorage.setItem("crazyR", rateCrazy);
localStorage.setItem("hakaigameR", rateHakaiGame);
localStorage.setItem("chokugameR", rateChokuGame);
localStorage.setItem("bikeR", rateBike);
localStorage.setItem("missileR", rateMissile);

localStorage.setItem("3LR", rate3Light);
localStorage.setItem("3NR", rate3Normal);
localStorage.setItem("3HR", rate3Hyper);

localStorage.setItem("5LR", rate5Light);
localStorage.setItem("5NR", rate5Normal);
localStorage.setItem("5HR", rate5Hyper);

localStorage.setItem("7LR", rate7Light);
localStorage.setItem("7NR", rate7Normal);
localStorage.setItem("7HR", rate7Hyper);

localStorage.setItem("battleNR", rateBattleNormal);
localStorage.setItem("battleCR", rateBattleChance);
localStorage.setItem("battleHR", rateBattleHot);
localStorage.setItem("battleSHR", rateBattleSuperHot);

localStorage.setItem("aooniR", rateAoOni);
localStorage.setItem("fesR", rateFes);

localStorage.setItem("shifukuPR", rateShifukuPuchi);
localStorage.setItem("shifukuLR", rateShifukuLight);
localStorage.setItem("shifukuNR", rateShifukuNormal);

localStorage.setItem("settingR", rateSetting);
localStorage.setItem("checksettingR", rateCheckSetting);
localStorage.setItem("x1_5R", ratex1_5);
localStorage.setItem("x2R", ratex2);
localStorage.setItem("slotchokuR", rateSlotchoku);
localStorage.setItem("pachichokuR", ratePachichoku);
localStorage.setItem("specialchokuR", rateSpecialchoku);

alert("保存しました")
window.location.href = "rate.html";
}

function check() {
  alert(localStorage.getItem("rate3L"));
}

function initialize() {
  localStorage.setItem("hakai1R", 2.5);
  localStorage.setItem("hakai3R", 3.5);
  localStorage.setItem("hakai5R", 5.5);
  localStorage.setItem("hakai7R", 7);
  localStorage.setItem("hakai10R", 10);
  localStorage.setItem("hakai15R", 15);
  localStorage.setItem("hakai30R", 30);
  localStorage.setItem("hakai60R", 60);
  localStorage.setItem("hakai120R", 150);
  localStorage.setItem("hakaiinfR", 1400);
  localStorage.setItem("kakuseihakai1R", 10);
  localStorage.setItem("kakuseihakai3R", 30);
  localStorage.setItem("kakuseihakai5R", 50);

  localStorage.setItem("bonuscut1R", 3);
  localStorage.setItem("bonuscut5R", 5);
  localStorage.setItem("bonuscut10R", 10);
  localStorage.setItem("bonuscut15R", 10);
  localStorage.setItem("bonuscut30R", 10);
  localStorage.setItem("bonuscut60R", 10);
  localStorage.setItem("bonuscut120R", 10);
  localStorage.setItem("bonuscutinfR", 10);

  localStorage.setItem("nonstop60R", 1);
  localStorage.setItem("nonstop120R", 1);
  localStorage.setItem("nonstopinfR", 1);
  localStorage.setItem("masterinfR", 5);

  localStorage.setItem("diaR", 5);
  localStorage.setItem("hakaigachaR", 5);
  localStorage.setItem("emeraldR", 5);
  localStorage.setItem("superemeraldR", 7);
  localStorage.setItem("crazyR", 5);
  localStorage.setItem("hakaigameR", 10);
  localStorage.setItem("chokugameR", 20);
  localStorage.setItem("bikeR", 20);
  localStorage.setItem("missileR", 35);

  localStorage.setItem("3LR", 15);
  localStorage.setItem("3NR", 40);
  localStorage.setItem("3HR", 60);

  localStorage.setItem("5LR", 25);
  localStorage.setItem("5NR", 70);
  localStorage.setItem("5HR", 100);

  localStorage.setItem("7LR", 40);
  localStorage.setItem("7NR", 100);
  localStorage.setItem("7HR", 140);

  localStorage.setItem("battleNR", 20);
  localStorage.setItem("battleCR", 35);
  localStorage.setItem("battleHR", 80);
  localStorage.setItem("battleSHR", 150);

  localStorage.setItem("aooniR", 40);
  localStorage.setItem("fesR", 80);

  localStorage.setItem("shifukuPR", 20);
  localStorage.setItem("shifukuLR", 70);
  localStorage.setItem("shifukuNR", 180);

  localStorage.setItem("settingR", 1);
  localStorage.setItem("checksettingR", 5);
  localStorage.setItem("x1_5R", 5);
  localStorage.setItem("x2R", 20);
  localStorage.setItem("slotchokuR", 5);
  localStorage.setItem("pachichokuR", 5);
  localStorage.setItem("specialchokuR", 7);

  alert("数値を初期化しました");
  window.location.href = "rate.html";
}
