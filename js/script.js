$(document).ready(function(){
	$(".navbar ul li").mouseenter(function() {
		$(this).addClass("active")
	});
	$(".navbar ul li").mouseleave(function() {
		$(this).removeClass("active")

	});


	$(".navbar ul li").click(function() {
		$(this).addClass("active")
	});
	$(".navbar ul li").mouseleave(function() {
		$(this).removeClass("active")

	});

	var chart;

	function requestData() {
    	$.ajax({
        	url: 'php/rand.php',
        	success: function(point) {
            	var series = chart.series[0],
                	shift = series.data.length > 20; // shift if the series is 
                                                 // longer than 20

            // add the point
            	chart.series[0].addPoint(eval(point), true, shift);
            
            // call it again after one second
            	setTimeout(requestData,500);    
        },
        cache: false
    });
}

		//reqdata();
		$(document).ready(function(){
			chart = new Highcharts.Chart({
				chart: {
					renderTo: 'graph1',
					defaultSeriesType: 'spline',
					events: {
						load: requestData
					}
				},
				title: {
					text: 'Sample Live Data'
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
						text: 'Random Data',
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
					name: 'Random Data',
					data: []
				}]
			});
		});
	});