
new gridjs.Grid({
  columns: [{
    name:"状態",
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
    ["フル破壊", "検証中", "検証中", "検証中", "1.0倍"],
    ["エコ破壊", "時速 約56,063枚", "約2.7枚", "時速 約28,115回転", "約6.0倍"]
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

new gridjs.Grid({
  columns: [{
    name:"状態",
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
    ["フル破壊", "時速 約121,764枚", "約11.3枚", "時速 約11,042回転", "1.0倍"],
    ["エコ破壊", "時速 約56,063枚", "約2.7枚", "時速 約28,115回転", "約6.0倍"]
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
}).render(document.getElementById("emperor"));
