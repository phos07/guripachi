
new gridjs.Grid({
  columns: [{
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
    ["時速 約88,264枚", "約2.5枚", "時速 約35,690.5回転", "約1.0倍"]
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
