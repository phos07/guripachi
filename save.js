
const saves = JSON.parse(localStorage.getItem("saves")) || [];





if (localStorage.getItem("check") == 1) {
const dataSave = {
  date: localStorage.getItem("latestSave_date"),
  readableDate: localStorage.getItem("latestSave_readableDate"),
  subtotal_choku: localStorage.getItem("latestSave_subZ"),
  subtotal_hakai: localStorage.getItem("latestSave_subA"),
  subtotal_bonus: localStorage.getItem("latestSave_subB"),
  subtotal_gacha: localStorage.getItem("latestSave_subC"),
  subtotal_misc: localStorage.getItem("latestSave_subD"),
  total_hakai: localStorage.getItem("latestSave_total")
};
saves.push(dataSave);
saves.sort(function(a,b) {
  return new Date(b.date) - new Date(a.date);
});
saves.splice(10);
localStorage.setItem("saves", JSON.stringify(saves));
localStorage.setItem("check", 0);
};

console.log(saves);

document.getElementById("savedData").innerHTML = saves
  .map(saves => {
    return `${saves.readableDate}<br><br>直撃系: ${saves.subtotal_choku}分<br>破壊系: ${saves.subtotal_hakai}分<br>ボーナスカット・ノンストップ系: ${saves.subtotal_bonus}分<br>ガチャ系: ${saves.subtotal_gacha}分<br>その他: ${saves.subtotal_misc}分<br><br>合計: ${saves.total_hakai}分<br><hr>`;
  })
  .join("");
/*
function string(saves) {
  return `${saves.readableDate}<br><br>破壊系: ${saves.subtotal_hakai}分<br>ボーナスカット・ノンストップ系: ${saves.subtotal_bonus}分<br>ガチャ系: ${saves.subtotal_gacha}分<br><br>合計: ${saves.total_hakai}分<br><hr>`;
  .join('');
};
*/
function resetSaves() {
  var check = confirm("記録をリセットしますか？");
  if (check) {
  saves.length = 0;
  localStorage.setItem("saves", JSON.stringify(saves));
  alert("記録をリセットしました");
  window.location.href = "save.html";
}
};
