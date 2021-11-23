// dux-theme.js

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }

    var colorPalette = [
        "#60ACFC","#32D3EB","#5BC49F","#FEB64D","#FF7B7B",
        "#9287E7","#00C1E0","#9CDC82",
        '#C1232B','#27727B','#FCCE10','#E87C25','#B5C334',
        '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
    ];

    var theme = {
          color: colorPalette,
          backgroundColor: "rgba(255, 255, 255, 1)",
          textStyle: {},
          grid:{ // add by jinlei
              borderWidth: 0,
              left: 0,
              right: 0,
              top: 50,
              bottom: 10,
              containLabel: true
          },
          title: {
              show: true,
              left: 0,
              top: 10,
              textAlign: "left",
              padding: 0,
              textStyle: {
                  color: "#666666",
                  fontSize: 14
              },
              subtextStyle: {
                  color: "#999999",
                  fontSize: 12
              }
          },
          toolbox: {
              show: true,
              feature: {
                  dataView: {
                      show: true
                  },
                  restore: {
                      show: true
                  }
              },
              itemSize: 14,
              iconStyle: {
                  normal: {
                      borderColor: "#999"
                  },
                  emphasis: {
                      borderColor: "#666"
                  }
              }
          },
          legend: {
              show: false,
              selectedMode: "multiple",
              top: 20,
              right: 20,
              textStyle: {
                  fontSize: 12,
                  color: "rgb(51, 51, 51)"
              },
              data: [{
                  icon: "rect"
              }]
          },
          tooltip: {
              trigger: "axis",
              show: true,
              borderRadius: 0,
              padding: 10,
              backgroundColor: "rgba(51, 51, 51, 0.8)",
              textStyle: {
                  fontSize: 12,
                  color: "#fff"
              },
              axisPointer: {
                  type: "line",
                  lineStyle: {
                      color: "rgb(181, 181, 181)",
                      width: 1
                  },
                  crossStyle: {
                      color: "rgb(181, 181, 181)",
                      width: 1
                  }
              }
          },
          line: {
              itemStyle: {
                  normal: {
                      borderWidth: 1,
                      color: "rgb(57, 152, 252)"
                  },
                  emphasis: {
                      borderWidth: 2,
                  }
              },
              lineStyle: {
                  normal: {
                      width: 2
                  }
              },
              // areaStyle: {
              //     //为空时则不显示区域颜色
              // },
              symbolSize: 3,
              symbol: "emptyCircle",
              showSymbol: false,
              smooth: true
          },
          "radar": {
              "itemStyle": {
                  "normal": {
                      "borderWidth": 1
                  }
              },
              "lineStyle": {
                  "normal": {
                      "width": 2
                  }
              },
              "symbolSize": 4,
              "symbol": "emptyCircle",
              "smooth": false
          },
          "bar": {
              "itemStyle": {
                  "normal": {
                      "barBorderWidth": 0,
                      "barBorderColor": "#ccc"
                  },
                  "emphasis": {
                      "barBorderWidth": 0,
                      "barBorderColor": "#ccc"
                  }
              }
          },
          "pie": {
              "label": {
                  "normal": {
                      "color": "#666666",
                      "fontSize": 14
                  },
                  "emphasis": {
                      "color": "#333333",
                      "fontSize": 14

                  }
              },
              "labelLine": {
                  "normal": {
                      "lineStyle": {
                          "width": 2,
                          "type": "dotted"
                      },
                      "smooth": 0.2,
                      "length": 15,
                      "length2": 12
                  }
              },
              "itemStyle": {
                  "normal": {
                      "borderColor": "rgba(255, 255, 255, 1)",
                      "borderWidth": 2
                  },
                  "emphasis": {
                      "borderColor": "rgba(255, 255, 255, 1)",
                      "borderWidth": 2
                  }
              }
          },
          "scatter": {
              "itemStyle": {
                  "normal": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  },
                  "emphasis": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  }
              }
          },
          "boxplot": {
              "itemStyle": {
                  "normal": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  },
                  "emphasis": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  }
              }
          },
          "parallel": {
              "itemStyle": {
                  "normal": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  },
                  "emphasis": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  }
              }
          },
          "sankey": {
              "itemStyle": {
                  "normal": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  },
                  "emphasis": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  }
              }
          },
          "funnel": {
              "itemStyle": {
                  "normal": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  },
                  "emphasis": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  }
              }
          },
          "gauge": {
              "itemStyle": {
                  "normal": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  },
                  "emphasis": {
                      "borderWidth": 0,
                      "borderColor": "#ccc"
                  }
              }
          },
          "candlestick": {
              "itemStyle": {
                  "normal": {
                      "color": "#c23531",
                      "color0": "#314656",
                      "borderColor": "#c23531",
                      "borderColor0": "#314656",
                      "borderWidth": 1
                  }
              }
          },
          "graph": {
              "itemStyle": {
                  "normal": {
                      "borderWidth": 1,
                      "borderColor": "#ccc"
                  }
              },
              "lineStyle": {
                  "normal": {
                      "width": 1,
                      "color": "#aaa"
                  }
              },
              "symbolSize": 4,
              "symbol": "emptyCircle",
              "smooth": false,
              "color": [
                  "#3279fd",
                  "#6ca7ff",
                  "#ffc979",
                  "#6a5dbd",
                  "#84aefd",
                  "#5396c7",
                  "#feeacc",
                  "#a387d1"
              ],
              "label": {
                  "normal": {
                      "textStyle": {
                          "color": "#ffffff"
                      }
                  }
              }
          },
          "map": {
              "itemStyle": {
                  "normal": {
                      "areaColor": "#eee",
                      "borderColor": "#444",
                      "borderWidth": 0.5
                  },
                  "emphasis": {
                      "areaColor": "#feeacc",
                      "borderColor": "#333333",
                      "borderWidth": "0"
                  }
              },
              "label": {
                  "normal": {
                      "textStyle": {
                          "color": "#000"
                      }
                  },
                  "emphasis": {
                      "textStyle": {
                          "color": "rgb(100,0,0)"
                      }
                  }
              }
          },
          "geo": {
              "itemStyle": {
                  "normal": {
                      "areaColor": "#eee",
                      "borderColor": "#444",
                      "borderWidth": 0.5
                  },
                  "emphasis": {
                      "areaColor": "#feeacc",
                      "borderColor": "#333333",
                      "borderWidth": "0"
                  }
              },
              "label": {
                  "normal": {
                      "textStyle": {
                          "color": "#000"
                      }
                  },
                  "emphasis": {
                      "textStyle": {
                          "color": "rgb(100,0,0)"
                      }
                  }
              }
          },
          "categoryAxis": {
              "type": "category",
              "boundaryGap": false,
              "axisLine": {
                  "show": true,
                  "lineStyle": {
                      "color": "rgb(219, 219, 219)",
                      "width": 2
                  }
              },
              "axisTick": {
                  "show": false,
                  "lineStyle": {
                      "color": "#333"
                  }
              },
              "axisLabel": {
                  "show": true,
                  "margin": 10,
                  "showMaxLabel": false,
                  "textStyle": {
                      "color": "rgb(153, 153, 153)",
                      "align": "left"
                  }
              },
              "splitLine": {
                  "show": false,
                  "lineStyle": {
                      "color": [
                          "#ccc"
                      ]
                  }
              },
              "splitArea": {
                  "show": false,
                  "areaStyle": {
                      "color": [
                          "rgba(250,250,250,0.3)",
                          "rgba(200,200,200,0.3)"
                      ]
                  }
              }
          },
          "valueAxis": {
              "type": "value",
              "axisLine": {
                  "show": false,
                  "lineStyle": {
                      "color": "#333"
                  }
              },
              "axisTick": {
                  "show": false,
                  "lineStyle": {
                      "color": "#333"
                  }
              },
              "axisLabel": {
                  "show": true,
                  "textStyle": {
                      "color": "rgb(153, 153, 153)"
                  },
                  "inside": true,
                  "showMinLabel": false,
                  "margin": 0
              },
              "splitLine": {
                  "show": true,
                  "lineStyle": {
                      "color": [
                          "rgb(231, 231, 231)"
                      ],
                      "type": "dashed"
                  }
              },
              "splitArea": {
                  "show": false,
                  "areaStyle": {
                      "color": [
                          "rgba(250,250,250,0.3)",
                          "rgba(200,200,200,0.3)"
                      ]
                  }
              }
          },
          "logAxis": {
              "axisLine": {
                  "show": true,
                  "lineStyle": {
                      "color": "#333"
                  }
              },
              "axisTick": {
                  "show": true,
                  "lineStyle": {
                      "color": "#333"
                  }
              },
              "axisLabel": {
                  "show": true,
                  "textStyle": {
                      "color": "#333"
                  }
              },
              "splitLine": {
                  "show": true,
                  "lineStyle": {
                      "color": [
                          "#ccc"
                      ]
                  }
              },
              "splitArea": {
                  "show": false,
                  "areaStyle": {
                      "color": [
                          "rgba(250,250,250,0.3)",
                          "rgba(200,200,200,0.3)"
                      ]
                  }
              }
          },
          "timeAxis": {
              "axisLine": {
                  "show": true,
                  "lineStyle": {
                      "color": "#333"
                  }
              },
              "axisTick": {
                  "show": true,
                  "lineStyle": {
                      "color": "#333"
                  }
              },
              "axisLabel": {
                  "show": true,
                  "textStyle": {
                      "color": "#333"
                  }
              },
              "splitLine": {
                  "show": true,
                  "lineStyle": {
                      "color": [
                          "#ccc"
                      ]
                  }
              },
              "splitArea": {
                  "show": false,
                  "areaStyle": {
                      "color": [
                          "rgba(250,250,250,0.3)",
                          "rgba(200,200,200,0.3)"
                      ]
                  }
              }
          },
          "timeline": {
              "lineStyle": {
                  "color": "#293c55",
                  "width": 1
              },
              "itemStyle": {
                  "normal": {
                      "color": "#293c55",
                      "borderWidth": 1
                  },
                  "emphasis": {
                      "color": "#a9334c"
                  }
              },
              "controlStyle": {
                  "normal": {
                      "color": "#293c55",
                      "borderColor": "#293c55",
                      "borderWidth": 0.5
                  },
                  "emphasis": {
                      "color": "#293c55",
                      "borderColor": "#293c55",
                      "borderWidth": 0.5
                  }
              },
              "checkpointStyle": {
                  "color": "#e43c59",
                  "borderColor": "rgba(194,53,49, 0.5)"
              },
              "label": {
                  "normal": {
                      "textStyle": {
                          "color": "#293c55"
                      }
                  },
                  "emphasis": {
                      "textStyle": {
                          "color": "#293c55"
                      }
                  }
              }
          },
          "visualMap": {
              "color": [
                  "#3279fd",
                  "#eaf1fe"
              ]
          },
          "dataZoom": {
              "backgroundColor": "rgba(47,69,84,0)",
              "dataBackgroundColor": "rgba(47,69,84,0.3)",
              "fillerColor": "rgba(167,183,204,0.4)",
              "handleColor": "#a7b7cc",
              "handleSize": "100%",
              "textStyle": {
                  "color": "#333"
              }
          },
          "markPoint": {
              "label": {
                  "normal": {
                      "textStyle": {
                          "color": "#ffffff"
                      }
                  },
                  "emphasis": {
                      "textStyle": {
                          "color": "#ffffff"
                      }
                  }
              }
          }
      };

    echarts.registerTheme('dux', theme);

}));
