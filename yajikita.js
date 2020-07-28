
new gridjs.Grid({
  columns: [{
    name: "状態",
    width: "auto",
  }, {
    name: "平均出玉",
    width: "auto",
  }, {
    name: "純増",
    width: "auto",
  }, {
    name: "回転数",
    width: "auto",
  }, {
    name: "破壊持続",
    width: "auto"
  }],
  search: false,
  data: [
    ["フル破壊", "時速 約56,958枚", "約9.1枚", "時速 約6,250回転", "1.0倍"],
    ["エコ破壊", "時速 約91,381枚", "約2.9枚", "時速 約31,699回転", "約3.0倍"],
  ],
  style: {
    th: {
      "padding": "1.5%",
      "text-align": "center",
      "font-size": "100%",
    },
    td: {
      "text-align": "center",
      "padding": "1%",
    }
  }
}).render(document.getElementById("wrapper"));
