
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
    ["12344", "1345", "12345", "12345"]
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
