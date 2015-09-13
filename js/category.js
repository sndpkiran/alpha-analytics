var chart1;
	var chart2;
	var chart3;
	var chart4;
	var chart5;
	Highcharts.createElement('link', {
   href: '//fonts.googleapis.com/css?family=Unica+One',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
   colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
         ]
      },
      style: {
         fontFamily: "'Unica One', sans-serif"
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};
Highcharts.setOptions(Highcharts.theme);

	function requestData1() {
    	$.ajax({
        	url: 'php/car.php',
        	success: function(point) {
            	var series = chart1.series[0],
                	shift = series.data.length > 20; // shift if the series is 
                                                 // longer than 20

            // add the point
            	chart1.series[0].addPoint(eval(point), true, shift);
            
            // call it again after one second
            	setTimeout(requestData1,500);    
        },
        cache: false
    });
}	

	$(document).ready(function(){
			chart1 = new Highcharts.Chart({
				chart: {
					renderTo: 'cat-graph1',
					defaultSeriesType: 'spline',
					events: {
						load: requestData1
					}
				},
				title: {
					text: 'Cars',
				},
				xAxis: {
					type: 'datetime',
					tickPixelInterval: 150,
					maxZoom: 20 * 1000
				},
				yAxis: {
					minPadding: 0.5,
					maxPadding: 0.5,
					title: {
						text: 'Ad Count',
						margin: 100
					}
				},
				plotOptions: {
            		series: {
                		marker: {
                    		enabled: false
               		}
           		}
        	},
				series: [{
					name: 'Car Ads Data',
					data: []
				}]
			});
		});

		function requestData2() {
    	$.ajax({
        	url: 'php/mob.php',
        	success: function(point) {
            	var series = chart2.series[0],
                	shift = series.data.length > 20; // shift if the series is 
                                                 // longer than 20

            // add the point
            	chart2.series[0].addPoint(eval(point), true, shift);
            
            // call it again after one second
            	setTimeout(requestData2,500);    
        },
        cache: false
    });
}	

	$(document).ready(function(){
			chart2 = new Highcharts.Chart({
				chart: {
					renderTo: 'cat-graph2',
					defaultSeriesType: 'spline',
					events: {
						load: requestData2
					}
				},
				title: {
					text: 'Mobile Phones',
				},
				xAxis: {
					type: 'datetime',
					tickPixelInterval: 150,
					maxZoom: 20 * 1000
				},
				yAxis: {
					minPadding: 0.5,
					maxPadding: 0.5,
					title: {
						text: 'Ad Count',
						margin: 100
					}
				},
				plotOptions: {
            		series: {
                		marker: {
                    		enabled: false
               		}
           		}
        	},
				series: [{
					name: 'Mobile Phones Ads Data',
					data: []
				}]
			});
		});

		function requestData3() {
    	$.ajax({
        	url: 'php/book.php',
        	success: function(point) {
            	var series = chart3.series[0],
                	shift = series.data.length > 20; // shift if the series is 
                                                 // longer than 20

            // add the point
            	chart3.series[0].addPoint(eval(point), true, shift);
            
            // call it again after one second
            	setTimeout(requestData3,500);    
        },
        cache: false
    });
}	

	$(document).ready(function(){
			chart3 = new Highcharts.Chart({
				chart: {
					renderTo: 'cat-graph3',
					defaultSeriesType: 'spline',
					events: {
						load: requestData3
					}
				},
				title: {
					text: 'Books & Magazines',
				},
				xAxis: {
					type: 'datetime',
					tickPixelInterval: 150,
					maxZoom: 20 * 1000
				},
				yAxis: {
					minPadding: 0.5,
					maxPadding: 0.5,
					title: {
						text: 'Ad Count',
						margin: 100
					}
				},
				plotOptions: {
            		series: {
                		marker: {
                    		enabled: false
               		}
           		}
        	},
				series: [{
					name: 'Books-Magazine Ads Data',
					data: []
				}]
			});
		});

		function requestData4() {
    	$.ajax({
        	url: 'php/fur.php',
        	success: function(point) {
            	var series = chart4.series[0],
                	shift = series.data.length > 20; // shift if the series is 
                                                 // longer than 20

            // add the point
            	chart4.series[0].addPoint(eval(point), true, shift);
            
            // call it again after one second
            	setTimeout(requestData4,500);    
        },
        cache: false
    });
}	

	$(document).ready(function(){
			chart4 = new Highcharts.Chart({
				chart: {
					renderTo: 'cat-graph4',
					defaultSeriesType: 'spline',
					events: {
						load: requestData4
					}
				},
				title: {
					text: 'Home & Office Furniture',
				},
				xAxis: {
					type: 'datetime',
					tickPixelInterval: 150,
					maxZoom: 20 * 1000
				},
				yAxis: {
					minPadding: 0.5,
					maxPadding: 0.5,
					title: {
						text: 'Ad Count',
						margin: 100
					}
				},
				plotOptions: {
            		series: {
                		marker: {
                    		enabled: false
               		}
           		}
        	},
				series: [{
					name: 'Furniture Ads Data',
					data: []
				}]
			});
		});

		function requestData5() {
    	$.ajax({
        	url: 'php/tv.php',
        	success: function(point) {
            	var series = chart5.series[0],
                	shift = series.data.length > 20; // shift if the series is 
                                                 // longer than 20

            // add the point
            	chart5.series[0].addPoint(eval(point), true, shift);
            
            // call it again after one second
            	setTimeout(requestData5,500);    
        },
        cache: false
    });
}	

	$(document).ready(function(){
			chart5 = new Highcharts.Chart({
				chart: {
					renderTo: 'cat-graph5',
					defaultSeriesType: 'spline',
					events: {
						load: requestData5
					}
				},
				title: {
					text: 'TV & Multimedia',
				},
				xAxis: {
					type: 'datetime',
					tickPixelInterval: 150,
					maxZoom: 20 * 1000
				},
				yAxis: {
					minPadding: 0.5,
					maxPadding: 0.5,
					title: {
						text: 'Ad Count',
						margin: 100
					}
				},
				plotOptions: {
            		series: {
                		marker: {
                    		enabled: false
               		}
           		}
        	},
				series: [{
					name: 'TV-Multimedia Ads Data',
					data: []
				}]
			});
		});