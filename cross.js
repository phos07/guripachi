
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
    ["時速 約63,995枚", "約2.6枚", "時速 約24,844回転", "約3.0倍"]
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
    ["時速 約68,771枚", "検証中", "検証中", "検証中"]
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
