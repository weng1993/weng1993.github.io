var infowindow = new google.maps.InfoWindow();
var map;
var markers = [];
var me;
var redline = [];

function init() {
	// Middle of MBTA map
	centerMBTA = new google.maps.LatLng(42.330497742, -71.095794678);
		
	// Set up map
	myOptions = {
		zoom: 11, // The larger the zoom number, the bigger the zoom
		center: centerMBTA,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
			
	// Create the map in the "map_canvas" <div>
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);


	getMyLocation();

	loadJSON(function(response) {
			// Create the markers
		tico = "t_icon.png";
		railico = "rail.png";
	  	stations = JSON.parse(response);
	  	console.log(stations);
		for(var s in stations){
			if (s.line =="Red"){
				redline.push(s);
			}
			pt = new google.maps.LatLng(s.lat, s.lng);
			markers.push(new google.maps.Marker({position: pt, title: s.title, icon: tico}));
		}
	});	

	// Render markers to map
	for (var m in markers) {

		markers[m].setMap(map);
		stopName = this.title;
		mvcObj = this;
			google.maps.event.addListener(markers[m], 'click', function() {
				stopName = this.title;
				mvcObj = this;
				content = "<strong>" + stopName + "</strong>";
				Data("http://mbtamap.herokuapp.com/mapper/station_schedule.json?stop_name="+stopName, dataReady);
				//modify content in dataready

			
			});			
	}
}	

function Data(url, ready)
{
	request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.onreadystatechange = ready;
	request.send(null);
	
}

function dataReady()
{
	if (request.readyState == 4 && request.status == 200)
	{	
		data = JSON.parse(request.responseText);
		if(data.length > 0){
			content += '<table border="1" id="schedule"><tr><th>Line</th><th>Trip #</th><th>Direction</th><th>Time Remaining</th></tr>';

			for (var i = 0; i < data.length; i++){
				c = data[i];
                content += '<tr><td>' + c.line + '</td><td>' + c.trip + '</td><td>' + c.direction + '</td><td>' + c.time_remaining + '</td></tr>';
			}
 
			content += '</table>';
		}
		else{
			content += "<p>No schedule of upcoming trains for this station<p>";
		}

	}
	else if(request.readyState == 4 && request.status == 500)
	{
		content += "<p>No schedule of upcoming trains for this station<p>";
	}
	infowindow.setContent(content);
	infowindow.open(map, mvcObj);
}

function getMyLocation() {
    if (navigator.geolocation) {
        // the navigator.geolocation object is supported on your browser
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
       		me = new google.maps.LatLng(lat, lng);
       		content = "<h2>You are here</h2>";
       		Data("http://mbtamap.herokuapp.com//mapper/find_closest_stations?lat=" + lat + "&lon=" + lng, closeReady);


        });
    }
    else {
        alert("Geolocation is not supported by your web browser.  What a shame!");
    }
}

function closeReady(){
	if (request.readyState == 4 && request.status == 200)
	{
		closest = JSON.parse(request.responseText);
		if (closest.length > 0) {
			closestPt = new google.maps.LatLng(closest[0]['station']['stop_lat'], closest[0]['station']['stop_lon']);
			content += "<p>The closest station to you is <strong>" + closest[0]['station']['stop_name'] + "</strong> which is approximately " + closest[0]['station']['distance'] + " miles away from you.";

		}
		else{
			content += "<p>There is no MBTA train station near you.</p>";
		}

	}
	else if(request.readyState == 4 && request.status == 500) {
		content += "<p>Whoops, something went wrong!  Alas, cannot find closest MBTA train station to you.</p>";
	}
	infowindow.setContent(content);
	infowindow.open(map, new google.maps.Marker({position: me, map: map, title : "Me"}));
}

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'stations.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            
            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);
     
        }
    }
    xobj.send(null);
    
}

// Call to function with anonymous callback
