zingchart.THEME="classic";
var myConfig = {
    "background-color":"transparent",
    "type":"line",
    "title":{
        "text":"Annual Viewers (In Millions)",
        "color":"#333",
        "background-color":"transparent",
        "width":"60%",
        "font-size":"30px",
        "text-align":"center",
        "font-family":"Century Gothic",
    },
    "subtitle":{
        "text":" ",
        "text-align":"center",
        "width":"60%"
    },
	"legend":{
        "layout":"x1",
        "margin-top":"5%",
        "border-width":"0",
        "shadow":false,
        "marker":{
            "cursor":"hand",
            "border-width":"0"
        },
        "background-color":"white",
        "item":{
            "cursor":"hand",
            "font-size":"15px",
        },
        "toggle-action":"remove"
    },
	"scaleX":{
        "values":"2014:2017:1",
        "max-items":8
	},
	"scaleY":{
        "line-color":"#333"
	},
    "tooltip":{
        "text":"%t: %v million viewers in %k"
    },
	"plot":{
        "line-width":3,
        "marker":{
            "size":2
        },
        "selection-mode":"multiple",
        "background-mode":"graph",
        "selected-state":{
            "line-width":4
        },
        "background-state":{
            "line-color":"#eee",
            "marker":{
                "background-color":"none"
            }
        }
	},
    "plotarea":{
        "margin":"15% 25% 10% 7%"
    },
	"series":[
        {
            "values":[0.589,0.596,1.113,0.7],
            "text":"MSNBC",
            "line-color":"#CC00FF",
            "marker":{
                "background-color":"#A8A8A8",
                "border-color":"#A8A8A8"
            }
        },
        {
            "values":[1.41,1.553,1.402,1.6],
            "text":"Discovery",
            "line-color":"#3399FF",
            "marker":{
                "background-color":"#A8A8A8",
                "border-color":"#A8A8A8"
            }
        },
        {
            "values":[1.094,1.11,1.057,1.2],
            "text":"FoodNetwork",
            "line-color":"#FF0000",
            "marker":{
                "background-color":"#A8A8A8",
                "border-color":"#A8A8A8"
            }
        },
	]
};

zingchart.render({
	id : 'myChart',
	data : myConfig,
	height: 500,
	width: 1350
});
zingchart.THEME="classic";
var myConfig2 = {
    "background-color":"transparent",
    "type":"line",
    "title":{
        "text":"Annual Subscribers (In Millions)",
        "color":"#333",
        "background-color":"transparent",
        "width":"60%",
        "text-align":"center",
        "font-size":"30px",
        "font-family":"Century Gothic",
    },
    "subtitle":{
        "text":" ",
        "text-align":"left",
        "width":"60%"
    },
	"legend":{
        "layout":"x1",
        "margin-top":"5%",
        "border-width":"0",
        "shadow":false,
        "marker":{
            "cursor":"hand",
            "border-width":"0"
        },
        "background-color":"white",
        "item":{
            "cursor":"hand",
            "font-size":"15px",
        },
        "toggle-action":"remove"
    },
	"scaleX":{
        "values":"2014:2017:1",
        "max-items":8
	},
	"scaleY":{
        "line-color":"#333"
	},
    "tooltip":{
        "text":"%t: %v million subscribers in %k"
    },
	"plot":{
        "line-width":3,
        "marker":{
            "size":2
        },
        "selection-mode":"multiple",
        "background-mode":"graph",
        "selected-state":{
            "line-width":4
        },
        "background-state":{
            "line-color":"#eee",
            "marker":{
                "background-color":"none"
            }
        }
	},
    "plotarea":{
        "margin":"15% 25% 10% 7%"
    },
	"series":[
        {
            "values":[4.5,9,12,30],
            "text":"Hulu",
            "line-color":"#00FF00",
            "marker":{
                "background-color":"#A8A8A8",
                "border-color":"#A8A8A8"
            }
        },
        {
            "values":[6,75,90,128],
            "text":"Netflix",
            "line-color":"#FF3300",
            "marker":{
                "background-color":"#A8A8A8",
                "border-color":"#A8A8A8"
            }
        },
        {
            "values":[36,49,49,50],
            "text":"HBO",
            "line-color":"#000000",
            "marker":{
                "background-color":"#A8A8A8",
                "border-color":"#A8A8A8"
            }
        },
	]
};

zingchart.render({
	id : 'myChart2',
	data : myConfig2,
	height: 500,
	width: 1350
});

var myConfig3 = {
    "type":"bar3d",
    "background-color":"transparent",
    "3d-aspect":{
        "true3d":0,
        "y-angle":10,
        "depth":30,
    },
    "title":{
        "text":"Annual Cable vs Subscription Viewership (In Millions)",
        "height":"40px",
        "font-weight":"normal",
        "text-color":"#ffffff",
        "font-size":"30px",
        "font-family":"Century Gothic",
    },
    "legend":{
        "layout":"float",
        "background-color":"none",
        "border-color":"none",
        "item":{
            "font-color":"#333",
            "font-size":"20px",
        },
        "x":"37%",
        "y":"10%",
        "width":"90%",
        "shadow":0
    },
    "plotarea":{
        "margin":"95px 35px 50px 70px",
        "background-color":"#fff",
        "alpha":0.3
    },
    "scale-y":{
        "background-color":"#fff",
        "border-width":"1px",
        "border-color":"#333",
        "alpha":0.5,
        "format":"%v",
        "guide":{
            "line-style":"solid",
            "line-color":"#333",
            "alpha":0.2
        },
        "tick":{
            "line-color":"#333",
            "alpha":0.2
        },
        "item":{
            "font-color":"#333",
            "padding-right":"6px",
            "font-size":"20px",
        }
    },
    "scale-x":{
        "background-color":"#fff",
        "border-width":"1px",
        "border-color":"#333",
        "alpha":0.5,
        "values":["2014","2015","2016","2017"],
        "guide":{
            "visible":false
        },
        "tick":{
            "line-color":"#333",
            "alpha":0.2
        },
        "item":{
            "font-size":"20px",
            "font-color":"#333"
        }
    },
    "series":[
        {
            "values":[3.093,3.259,3.572,3.5],
            "text":"Cable",
            "background-color":"#00FFCC #3399FF",
            "border-color":"#3399FF",
            "legend-marker":{
                "border-color":"#03A9F4"
            },
            "tooltip":{
                "background-color":"#03A9F4",
                "text":"%t: %v million viewers in %k",
                "font-size":"12px",
                "padding":"6 12",
                "border-color":"none",
                "shadow":0,
                "border-radius":5
            }
        },
        {
            "values":[101,133,151,181],
            "text":"Subscription",
            "background-color":"#FF99FF #9900FF",
            "border-color":"#9900FF",
            "legend-marker":{
                "border-color":"#673AB7"
            },
            "tooltip":{
                "background-color":"#673AB7",
                "text":"%t: %v million subscribers in %k",
                "font-size":"12px",
                "padding":"6 12",
                "border-color":"none",
                "shadow":0,
                "border-radius":5
            }
        }
    ]
};

zingchart.render({
	id : 'myChart3',
	data : myConfig3,
	height: 500,
	width: 1350,
	defaults:{
	  'font-family':'sans-serif'
	}
});
