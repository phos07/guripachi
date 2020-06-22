
function calculateHakai() {
  var min1 = parseInt(document.hakai.hakai1.value);
  var min3 = parseInt(document.hakai.hakai3.value);
  var min5 = parseInt(document.hakai.hakai5.value);
  var min7 = parseInt(document.hakai.hakai7.value);
  var min10 = parseInt(document.hakai.hakai10.value);
  var min15 = parseInt(document.hakai.hakai15.value);
  var min30 = parseInt(document.hakai.hakai30.value);
  var min60 = parseInt(document.hakai.hakai60.value);
  var min120 = parseInt(document.hakai.hakai120.value);
  var mininf = parseInt(document.hakai.hakaiinf.value);
  var kmin1 = parseInt(document.hakai.kakuseihakai1.value);
  var kmin3 = parseInt(document.hakai.kakuseihakai3.value);
  var kmin5 = parseInt(document.hakai.kakuseihakai5.value);

  var submin1 = min1 * localStorage.getItem("hakai1R");
  var submin3 = min3 * localStorage.getItem("hakai3R");
  var submin5 = min5 * localStorage.getItem("hakai5R");
  var submin7 = min7 * localStorage.getItem("hakai7R");
  var submin10 = min10 * localStorage.getItem("hakai10R");
  var submin15 = min15 * localStorage.getItem("hakai15R");
  var submin30 = min30 * localStorage.getItem("hakai30R");
  var submin60 = min60 * localStorage.getItem("hakai60R");
  var submin120 = min120 * localStorage.getItem("hakai120R");
  var submininf = mininf * localStorage.getItem("hakaiinfR");
  var subkmin1 = kmin1 * localStorage.getItem("kakuseihakai1R");
  var subkmin3 = kmin3 * localStorage.getItem("kakuseihakai3Rhakai1R");
  var subkmin5 = kmin5 * localStorage.getItem("kakuseihakai5Rhakai1R");

  var total = submin1 + submin3 + submin5 + submin7 + submin10 + submin15 + submin30 + submin60 + submin120 + submininf + subkmin1 + subkmin3 + subkmin5;

  document.getElementById("subtotal_hakai").innerHTML = "小計: " + total + "分";
  return total;
};

function calculateBonus() {
  var cut1 = parseInt(document.bonusnonstop.bonuscut1.value);
  var cut5 = parseInt(document.bonusnonstop.bonuscut5.value);
  var cut10 = parseInt(document.bonusnonstop.bonuscut10.value);
  var cut15 = parseInt(document.bonusnonstop.bonuscut15.value);
  var cut30 = parseInt(document.bonusnonstop.bonuscut30.value);
  var cut60 = parseInt(document.bonusnonstop.bonuscut60.value);
  var cut120 = parseInt(document.bonusnonstop.bonuscut120.value);
  var cutinf = parseInt(document.bonusnonstop.bonuscutinf.value);

  var nonstop60 = parseInt(document.bonusnonstop.nonstop60.value);
  var nonstop120 = parseInt(document.bonusnonstop.nonstop120.value);
  var nonstopinf = parseInt(document.bonusnonstop.nonstopinf.value);
  var masterinf = parseInt(document.bonusnonstop.masterinf.value);

  var subcut1 = cut1 * localStorage.getItem("bonuscut1R");
  var subcut5 = cut5 * localStorage.getItem("bonuscut5R");
  var subcut10 = cut10 * localStorage.getItem("bonuscut10R");
  var subcut15 = cut15 * localStorage.getItem("bonuscut15R");
  var subcut30 = cut30 * localStorage.getItem("bonuscut30R");
  var subcut60 = cut60 * localStorage.getItem("bonuscut60R");
  var subcut120 = cut120 * localStorage.getItem("bonuscut120R");
  var subcutinf = cutinf * localStorage.getItem("bonuscutinfR");

  var subnonstop60 = nonstop60 * localStorage.getItem("nonstop60R");
  var subnonstop120 = nonstop120 * localStorage.getItem("nonstop120R");
  var subnonstopinf = nonstopinf * localStorage.getItem("nonstopinfR");
  var submasterinf = masterinf * localStorage.getItem("masterinfR");

  var total = subcut1 + subcut5 + subcut10 + subcut15 + subcut30 + subcut60 + subcut120 + subcutinf + subnonstop60 + subnonstop120 + subnonstopinf + submasterinf;

  document.getElementById("subtotal_bonus").innerHTML = "小計: " + total + "分";
  return total;
};

function calculateGacha() {
  var dia = parseInt(document.gacha.dia.value);
  var hakaigacha = parseInt(document.gacha.hakaigacha.value);
  var emerald = parseInt(document.gacha.emerald.value);
  var superemerald = parseInt(document.gacha.superemerald.value);
  var crazy = parseInt(document.gacha.crazy.value);
  var hakaigame = parseInt(document.gacha.hakaigame.value);
  var chokugame = parseInt(document.gacha.chokugame.value);
  var bike = parseInt(document.gacha.bike.value);
  var missile = parseInt(document.gacha.missile.value);

  var threeL = parseInt(document.gacha.light3.value);
  var threeN = parseInt(document.gacha.normal3.value);
  var threeH = parseInt(document.gacha.hyper3.value);

  var fiveL = parseInt(document.gacha.light5.value);
  var fiveN = parseInt(document.gacha.normal5.value);
  var fiveH = parseInt(document.gacha.hyper5.value);

  var sevenL = parseInt(document.gacha.light7.value);
  var sevenN = parseInt(document.gacha.normal7.value);
  var sevenH = parseInt(document.gacha.hyper7.value);

  var battleN = parseInt(document.gacha.battleN.value);
  var battleC = parseInt(document.gacha.battleC.value);
  var battleH = parseInt(document.gacha.battleH.value);
  var battleSH = parseInt(document.gacha.battleSH.value);

  var aooni = parseInt(document.gacha.aooni.value);
  var fes = parseInt(document.gacha.fes.value);

  var shifukuP = parseInt(document.gacha.shifukuP.value);
  var shifukuL = parseInt(document.gacha.shifukuL.value);
  var shifukuN = parseInt(document.gacha.shifukuN.value);

  var subdia = dia * localStorage.getItem("diaR");
  var subhakaigacha = hakaigacha * localStorage.getItem("hakaigachaR");
  var subemerald = emerald * localStorage.getItem("emeraldR");
  var subsuperemerald = superemerald * localStorage.getItem("superemeraldR");
  var subcrazy = crazy * localStorage.getItem("crazyR");
  var subhakaigame = hakaigame * localStorage.getItem("hakaigameR");
  var subchokugame = chokugame * localStorage.getItem("chokugameR");
  var subbike = bike * localStorage.getItem("bikeR");
  var submissile = missile * localStorage.getItem("missileR");

  var subthreeL = threeL * localStorage.getItem("3LR");
  var subthreeN = threeN * localStorage.getItem("3NR");
  var subthreeH = threeH * localStorage.getItem("3HR");

  var subfiveL = fiveL * localStorage.getItem("5LR");
  var subfiveN = fiveN * localStorage.getItem("5NR");
  var subfiveH = fiveH * localStorage.getItem("5HR");

  var subsevenL = sevenL * localStorage.getItem("7LR");
  var subsevenN = sevenN * localStorage.getItem("7NR");
  var subsevenH = sevenH * localStorage.getItem("7HR");

  var subbattleN = battleN * localStorage.getItem("battleNR");
  var subbattleC = battleC * localStorage.getItem("battleCR");
  var subbattleH = battleH * localStorage.getItem("battleHR");
  var subbattleSH = battleSH * localStorage.getItem("battleSHR");

  var subaooni = aooni * localStorage.getItem("aooniR");
  var subfes = fes * localStorage.getItem("fesR");

  var subshifukuP = shifukuP * localStorage.getItem("shifukuPR");
  var subshifukuL = shifukuL * localStorage.getItem("shifukuLR");
  var subshifukuN = shifukuN * localStorage.getItem("shifukuNR");

  var total = subdia + subhakaigacha + subemerald + subsuperemerald + subcrazy + subhakaigame + subchokugame + subbike + submissile + subthreeL + subthreeN + subthreeH + subfiveL + subfiveN + subfiveH + subsevenL + subsevenN + subsevenH + subbattleN + subbattleC + subbattleH + subbattleSH + subaooni + subfes + subshifukuP + subshifukuL + subshifukuN;

  document.getElementById("subtotal_gacha").innerHTML = "小計: " + total + "分";
  return total;

};

function calculateMisc() {
  var setting = parseInt(document.misc.setting.value);
  var checksetting = parseInt(document.misc.checksetting.value);
  var x1_5 = parseInt(document.misc.x1_5.value);
  var x2 = parseInt(document.misc.x2.value);
  var slotchoku = parseInt(document.misc.slotchoku.value);
  var pachichoku = parseInt(document.misc.pachichoku.value);
  var specialchoku = parseInt(document.misc.specialchoku.value);

  var subsetting = setting * localStorage.getItem("settingR");
  var subchecksetting = checksetting * localStorage.getItem("checksettingR");
  var subx1_5 = x1_5 * localStorage.getItem("x1_5R");
  var subx2 = x2 * localStorage.getItem("x2R");
  var subslotchoku = slotchoku * localStorage.getItem("slotchokuR");
  var subpachichoku = pachichoku * localStorage.getItem("pachichokuR");
  var subspecialchoku = specialchoku * localStorage.getItem("specialchokuR");

  var total = subsetting + subchecksetting + subx1_5 + subx2 + subslotchoku + subpachichoku + subspecialchoku;
  document.getElementById("subtotal_misc").innerHTML = "小計: " + total + "分";
  return total;
};

function calculateTotal() {
  var subhakai = calculateHakai();
  var subbonus = calculateBonus();
  var subgacha = calculateGacha();
  var submisc = calculateMisc();

  var total = subhakai + subbonus + subgacha + submisc;
  document.getElementById("total_hakai").innerHTML = "合計: " + total + "分";
  return total;
};

function saveHakai() {
  var min1 = parseInt(document.hakai.hakai1.value);
  var min3 = parseInt(document.hakai.hakai3.value);
  var min5 = parseInt(document.hakai.hakai5.value);
  var min7 = parseInt(document.hakai.hakai7.value);
  var min10 = parseInt(document.hakai.hakai10.value);
  var min15 = parseInt(document.hakai.hakai15.value);
  var min30 = parseInt(document.hakai.hakai30.value);
  var min60 = parseInt(document.hakai.hakai60.value);
  var min120 = parseInt(document.hakai.hakai120.value);
  var mininf = parseInt(document.hakai.hakaiinf.value);
  var kmin1 = parseInt(document.hakai.kakuseihakai1.value);
  var kmin3 = parseInt(document.hakai.kakuseihakai3.value);
  var kmin5 = parseInt(document.hakai.kakuseihakai5.value);

  var submin1 = min1 * localStorage.getItem("hakai1R");
  var submin3 = min3 * localStorage.getItem("hakai3R");
  var submin5 = min5 * localStorage.getItem("hakai5R");
  var submin7 = min7 * localStorage.getItem("hakai7R");
  var submin10 = min10 * localStorage.getItem("hakai10R");
  var submin15 = min15 * localStorage.getItem("hakai15R");
  var submin30 = min30 * localStorage.getItem("hakai30R");
  var submin60 = min60 * localStorage.getItem("hakai60R");
  var submin120 = min120 * localStorage.getItem("hakai120R");
  var submininf = mininf * localStorage.getItem("hakaiinfR");
  var subkmin1 = kmin1 * localStorage.getItem("kakuseihakai1R");
  var subkmin3 = kmin3 * localStorage.getItem("kakuseihakai3Rhakai1R");
  var subkmin5 = kmin5 * localStorage.getItem("kakuseihakai5Rhakai1R");

  var total = submin1 + submin3 + submin5 + submin7 + submin10 + submin15 + submin30 + submin60 + submin120 + submininf + subkmin1 + subkmin3 + subkmin5;
  return total;
};

function saveBonus() {
  var cut1 = parseInt(document.bonusnonstop.bonuscut1.value);
  var cut5 = parseInt(document.bonusnonstop.bonuscut5.value);
  var cut10 = parseInt(document.bonusnonstop.bonuscut10.value);
  var cut15 = parseInt(document.bonusnonstop.bonuscut15.value);
  var cut30 = parseInt(document.bonusnonstop.bonuscut30.value);
  var cut60 = parseInt(document.bonusnonstop.bonuscut60.value);
  var cut120 = parseInt(document.bonusnonstop.bonuscut120.value);
  var cutinf = parseInt(document.bonusnonstop.bonuscutinf.value);

  var nonstop60 = parseInt(document.bonusnonstop.nonstop60.value);
  var nonstop120 = parseInt(document.bonusnonstop.nonstop120.value);
  var nonstopinf = parseInt(document.bonusnonstop.nonstopinf.value);
  var masterinf = parseInt(document.bonusnonstop.masterinf.value);

  var subcut1 = cut1 * localStorage.getItem("bonuscut1R");
  var subcut5 = cut5 * localStorage.getItem("bonuscut5R");
  var subcut10 = cut10 * localStorage.getItem("bonuscut10R");
  var subcut15 = cut15 * localStorage.getItem("bonuscut15R");
  var subcut30 = cut30 * localStorage.getItem("bonuscut30R");
  var subcut60 = cut60 * localStorage.getItem("bonuscut60R");
  var subcut120 = cut120 * localStorage.getItem("bonuscut120R");
  var subcutinf = cutinf * localStorage.getItem("bonuscutinfR");

  var subnonstop60 = nonstop60 * localStorage.getItem("nonstop60R");
  var subnonstop120 = nonstop120 * localStorage.getItem("nonstop120R");
  var subnonstopinf = nonstopinf * localStorage.getItem("nonstopinfR");
  var submasterinf = masterinf * localStorage.getItem("masterinfR");

  var total = subcut1 + subcut5 + subcut10 + subcut15 + subcut30 + subcut60 + subcut120 + subcutinf + subnonstop60 + subnonstop120 + subnonstopinf + submasterinf;
  return total;
};

function saveGacha() {
  var dia = parseInt(document.gacha.dia.value);
  var hakaigacha = parseInt(document.gacha.hakaigacha.value);
  var emerald = parseInt(document.gacha.emerald.value);
  var superemerald = parseInt(document.gacha.superemerald.value);
  var crazy = parseInt(document.gacha.crazy.value);
  var hakaigame = parseInt(document.gacha.hakaigame.value);
  var chokugame = parseInt(document.gacha.chokugame.value);
  var bike = parseInt(document.gacha.bike.value);
  var missile = parseInt(document.gacha.missile.value);

  var threeL = parseInt(document.gacha.light3.value);
  var threeN = parseInt(document.gacha.normal3.value);
  var threeH = parseInt(document.gacha.hyper3.value);

  var fiveL = parseInt(document.gacha.light5.value);
  var fiveN = parseInt(document.gacha.normal5.value);
  var fiveH = parseInt(document.gacha.hyper5.value);

  var sevenL = parseInt(document.gacha.light7.value);
  var sevenN = parseInt(document.gacha.normal7.value);
  var sevenH = parseInt(document.gacha.hyper7.value);

  var battleN = parseInt(document.gacha.battleN.value);
  var battleC = parseInt(document.gacha.battleC.value);
  var battleH = parseInt(document.gacha.battleH.value);
  var battleSH = parseInt(document.gacha.battleSH.value);

  var aooni = parseInt(document.gacha.aooni.value);
  var fes = parseInt(document.gacha.fes.value);

  var shifukuP = parseInt(document.gacha.shifukuP.value);
  var shifukuL = parseInt(document.gacha.shifukuL.value);
  var shifukuN = parseInt(document.gacha.shifukuN.value);

  var subdia = dia * localStorage.getItem("diaR");
  var subhakaigacha = hakaigacha * localStorage.getItem("hakaigachaR");
  var subemerald = emerald * localStorage.getItem("emeraldR");
  var subsuperemerald = superemerald * localStorage.getItem("superemeraldR");
  var subcrazy = crazy * localStorage.getItem("crazyR");
  var subhakaigame = hakaigame * localStorage.getItem("hakaigameR");
  var subchokugame = chokugame * localStorage.getItem("chokugameR");
  var subbike = bike * localStorage.getItem("bikeR");
  var submissile = missile * localStorage.getItem("missileR");

  var subthreeL = threeL * localStorage.getItem("3LR");
  var subthreeN = threeN * localStorage.getItem("3NR");
  var subthreeH = threeH * localStorage.getItem("3HR");

  var subfiveL = fiveL * localStorage.getItem("5LR");
  var subfiveN = fiveN * localStorage.getItem("5NR");
  var subfiveH = fiveH * localStorage.getItem("5HR");

  var subsevenL = sevenL * localStorage.getItem("7LR");
  var subsevenN = sevenN * localStorage.getItem("7NR");
  var subsevenH = sevenH * localStorage.getItem("7HR");

  var subbattleN = battleN * localStorage.getItem("battleNR");
  var subbattleC = battleC * localStorage.getItem("battleCR");
  var subbattleH = battleH * localStorage.getItem("battleHR");
  var subbattleSH = battleSH * localStorage.getItem("battleSHR");

  var subaooni = aooni * localStorage.getItem("aooniR");
  var subfes = fes * localStorage.getItem("fesR");

  var subshifukuP = shifukuP * localStorage.getItem("shifukuPR");
  var subshifukuL = shifukuL * localStorage.getItem("shifukuLR");
  var subshifukuN = shifukuN * localStorage.getItem("shifukuNR");

  var total = subdia + subhakaigacha + subemerald + subsuperemerald + subcrazy + subhakaigame + subchokugame + subbike + submissile + subthreeL + subthreeN + subthreeH + subfiveL + subfiveN + subfiveH + subsevenL + subsevenN + subsevenH + subbattleN + subbattleC + subbattleH + subbattleSH + subaooni + subfes + subshifukuP + subshifukuL + subshifukuN;
  return total;
};

function saveMisc() {
  var setting = parseInt(document.misc.setting.value);
  var checksetting = parseInt(document.misc.checksetting.value);
  var x1_5 = parseInt(document.misc.x1_5.value);
  var x2 = parseInt(document.misc.x2.value);
  var slotchoku = parseInt(document.misc.slotchoku.value);
  var pachichoku = parseInt(document.misc.pachichoku.value);
  var specialchoku = parseInt(document.misc.specialchoku.value);

  var subsetting = setting * localStorage.getItem("settingR");
  var subchecksetting = checksetting * localStorage.getItem("checksettingR");
  var subx1_5 = x1_5 * localStorage.getItem("x1_5R");
  var subx2 = x2 * localStorage.getItem("x2R");
  var subslotchoku = slotchoku * localStorage.getItem("slotchokuR");
  var subpachichoku = pachichoku * localStorage.getItem("pachichokuR");
  var subspecialchoku = specialchoku * localStorage.getItem("specialchokuR");

  var total = subsetting + subchecksetting + subx1_5 + subx2 + subslotchoku + subpachichoku + subspecialchoku;
  return total;
};
function saveTotal() {
  var subhakai = calculateHakai();
  var subbonus = calculateBonus();
  var subgacha = calculateGacha();
  var submisc = calculateMisc();
  var total = subhakai + subbonus + subgacha + submisc;
  return total;
};

function pushSaves() {

  var subA = saveHakai();
  var subB = saveBonus();
  var subC = saveGacha();
  var subD = saveMisc();
  var total = saveTotal();
  var saveDate = new Date();
  var dateYear = saveDate.getFullYear();
  var dateMonth = saveDate.getMonth() + 1;
  var dateDay = saveDate.getDate();
  dateDay = ("0" + dateDay).slice(-2);
  var dateHour = saveDate.getHours();
  dateHour = ("0" + dateHour).slice(-2);
  var dateMinutes = saveDate.getMinutes();
  dateMinutes = ("0" + dateMinutes).slice(-2);
  var dateSeconds = saveDate.getSeconds();
  dateSeconds = ("0" + dateSeconds).slice(-2);
  var stringDate = dateYear.toString() + "年" + dateMonth.toString() + "月" + dateDay.toString() + "日 " + dateHour.toString() + ":" + dateMinutes.toString() + ":" + dateSeconds.toString();
  localStorage.setItem("latestSave_subA", subA);
  localStorage.setItem("latestSave_subB", subB);
  localStorage.setItem("latestSave_subC", subC);
  localStorage.setItem("latestSave_subD", subD);
  localStorage.setItem("latestSave_total", total);
  localStorage.setItem("latestSave_date", saveDate);
  localStorage.setItem("latestSave_readableDate", stringDate);
  localStorage.setItem("check", 1);
  alert("記録しました");
  window.location.href = "save.html";
}
