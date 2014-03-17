var infowindow = new google.maps.InfoWindow();
var map;
var markers = [];
var me;
var meMarker;

var data;

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

		// Create the markers
	tico = "t_icon.png";
	railico = "rail.png";
	getMyLocation();
		pt = new google.maps.LatLng(42.352271, -71.05524200000001);
		markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: tico}));
		pt = new google.maps.LatLng(42.330154, -71.057655);
		markers.push(new google.maps.Marker({position: pt, title: "Andrew", icon: tico}));
		pt = new google.maps.LatLng(42.3884, -71.11914899999999);
		markers.push(new google.maps.Marker({position: pt, title: "Porter Square", icon: tico}));
		pt = new google.maps.LatLng(42.373362, -71.118956);
		markers.push(new google.maps.Marker({position: pt, title: "Harvard Square", icon: tico}));
		pt = new google.maps.LatLng(42.320685, -71.052391);
		markers.push(new google.maps.Marker({position: pt, title: "JFK/UMass", icon: tico}));
		pt = new google.maps.LatLng(42.31129, -71.053331);
		markers.push(new google.maps.Marker({position: pt, title: "Savin Hill", icon: tico}));
		pt = new google.maps.LatLng(42.35639457, -71.0624242);
		markers.push(new google.maps.Marker({position: pt, title: "Park Street", icon: tico}));
		pt = new google.maps.LatLng(42.342622, -71.056967);
		markers.push(new google.maps.Marker({position: pt, title: "Broadway", icon: tico}));
		pt = new google.maps.LatLng(42.275275, -71.029583);
		markers.push(new google.maps.Marker({position: pt, title: "North Quincy", icon: tico}));
		pt = new google.maps.LatLng(42.29312583, -71.06573796000001);
		markers.push(new google.maps.Marker({position: pt, title: "Shawmut", icon: tico}));
		pt = new google.maps.LatLng(42.39674, -71.121815);
		markers.push(new google.maps.Marker({position: pt, title: "Davis", icon: tico}));
		pt = new google.maps.LatLng(42.395428, -71.142483);
		markers.push(new google.maps.Marker({position: pt, title: "Alewife", icon: tico}));
		pt = new google.maps.LatLng(42.36249079, -71.08617653);
		markers.push(new google.maps.Marker({position: pt, title: "Kendall/MIT", icon: tico}));
		pt = new google.maps.LatLng(42.361166, -71.070628);
		markers.push(new google.maps.Marker({position: pt, title: "Charles/MGH", icon: tico}));
		pt = new google.maps.LatLng(42.355518, -71.060225);
		markers.push(new google.maps.Marker({position: pt, title: "Downtown Crossing", icon: tico}));
		pt = new google.maps.LatLng(42.251809, -71.005409);
		markers.push(new google.maps.Marker({position: pt, title: "Quincy Center", icon: tico}));
		pt = new google.maps.LatLng(42.233391, -71.007153);
		markers.push(new google.maps.Marker({position: pt, title: "Quincy Adams", icon: tico}));
		pt = new google.maps.LatLng(42.284652, -71.06448899999999);
		markers.push(new google.maps.Marker({position: pt, title: "Ashmont", icon: tico}));
		pt = new google.maps.LatLng(42.2665139, -71.0203369);
		markers.push(new google.maps.Marker({position: pt, title: "Wollaston", icon: tico}));
		pt = new google.maps.LatLng(42.300093, -71.061667);
		markers.push(new google.maps.Marker({position: pt, title: "Fields Corner", icon: tico}));
		pt = new google.maps.LatLng(42.365486, -71.103802);
		markers.push(new google.maps.Marker({position: pt, title: "Central Square", icon: tico}));
		pt = new google.maps.LatLng(42.2078543, -71.0011385);
		markers.push(new google.maps.Marker({position: pt, title: "Braintree", icon: tico}));
	
		pt = new google.maps.LatLng(42.383975, -71.076994);
		markers.push(new google.maps.Marker({position: pt, title: "Sullivan", icon: tico}));
		pt = new google.maps.LatLng(42.355518, -71.060225);
		markers.push(new google.maps.Marker({position: pt, title: "Downtown Crossing", icon: tico}));
		pt = new google.maps.LatLng(42.336377, -71.088961);
		markers.push(new google.maps.Marker({position: pt, title: "Ruggles", icon: tico}));
		pt = new google.maps.LatLng(42.40237, -71.077082);
		markers.push(new google.maps.Marker({position: pt, title: "Wellington", icon: tico}));
		pt = new google.maps.LatLng(42.317062, -71.104248);
		markers.push(new google.maps.Marker({position: pt, title: "Stony Brook", icon: tico}));
		pt = new google.maps.LatLng(42.363021, -71.05829);
		markers.push(new google.maps.Marker({position: pt, title: "Haymarket", icon: tico}));
		pt = new google.maps.LatLng(42.349662, -71.063917);
		markers.push(new google.maps.Marker({position: pt, title: "Tufts Medical", icon: tico}));
		pt = new google.maps.LatLng(42.331397, -71.095451);
		markers.push(new google.maps.Marker({position: pt, title: "Roxbury Crossing", icon: tico}));
		pt = new google.maps.LatLng(42.373622, -71.06953300000001);
		markers.push(new google.maps.Marker({position: pt, title: "Community College", icon: tico}));
		pt = new google.maps.LatLng(42.365577, -71.06129);
		markers.push(new google.maps.Marker({position: pt, title: "North Station", icon: tico}));
		pt = new google.maps.LatLng(42.43668, -71.07109699999999);
		markers.push(new google.maps.Marker({position: pt, title: "Oak Grove", icon: tico}));
		pt = new google.maps.LatLng(42.426632, -71.07411);
		markers.push(new google.maps.Marker({position: pt, title: "Malden Center", icon: tico}));
		pt = new google.maps.LatLng(42.323132, -71.099592);
		markers.push(new google.maps.Marker({position: pt, title: "Jackson Square", icon: tico}));
		pt = new google.maps.LatLng(42.310525, -71.10741400000001);
		markers.push(new google.maps.Marker({position: pt, title: "Green Street", icon: tico}));
		pt = new google.maps.LatLng(42.34735, -71.075727);
		markers.push(new google.maps.Marker({position: pt, title: "Back Bay", icon: tico}));
		pt = new google.maps.LatLng(42.352547, -71.062752);
		markers.push(new google.maps.Marker({position: pt, title: "Chinatown", icon: tico}));
		pt = new google.maps.LatLng(42.358978, -71.057598);
		markers.push(new google.maps.Marker({position: pt, title: "State Street", icon: tico}));
		pt = new google.maps.LatLng(42.300523, -71.113686);
		markers.push(new google.maps.Marker({position: pt, title: "Forest Hills", icon: tico}));
		pt = new google.maps.LatLng(42.341512, -71.083423);
		markers.push(new google.maps.Marker({position: pt, title: "Mass Ave", icon: tico}));
	
		pt = new google.maps.LatLng(42.374262, -71.030395);
		markers.push(new google.maps.Marker({position: pt, title: "Airport", icon: tico}));
		pt = new google.maps.LatLng(42.3796403, -71.02286539000001);
		markers.push(new google.maps.Marker({position: pt, title: "Wood Island", icon: tico}));
		pt = new google.maps.LatLng(42.386867, -71.00473599999999);
		markers.push(new google.maps.Marker({position: pt, title: "Orient Heights", icon: tico}));
		pt = new google.maps.LatLng(42.39754234, -70.99231944);
		markers.push(new google.maps.Marker({position: pt, title: "Beachmont", icon: tico}));
		pt = new google.maps.LatLng(42.359705, -71.05921499999999);
		markers.push(new google.maps.Marker({position: pt, title: "Government Center", icon: tico}));
		pt = new google.maps.LatLng(42.41342, -70.991648);
		markers.push(new google.maps.Marker({position: pt, title: "Wonderland", icon: tico}));
		pt = new google.maps.LatLng(42.361365, -71.062037);
		markers.push(new google.maps.Marker({position: pt, title: "Bowdoin", icon: tico}));
		pt = new google.maps.LatLng(42.39050067, -70.99712259);
		markers.push(new google.maps.Marker({position: pt, title: "Suffolk Downs", icon: tico}));
		pt = new google.maps.LatLng(42.40784254, -70.99253321);
		markers.push(new google.maps.Marker({position: pt, title: "Revere Beach", icon: tico}));
		pt = new google.maps.LatLng(42.36911856, -71.03952958000001);
		markers.push(new google.maps.Marker({position: pt, title: "Maverick", icon: tico}));
		pt = new google.maps.LatLng(42.359784, -71.051652);
		markers.push(new google.maps.Marker({position: pt, title: "Aquarium", icon: tico}));
		pt = new google.maps.LatLng(42.358978, -71.057598);
		markers.push(new google.maps.Marker({position: pt, title: "State Street", icon: tico}));

		pt = new google.maps.LatLng(42.281, -71.085475);
		markers.push(new google.maps.Marker({position: pt, title: "Morton Street", icon: railico}));
		pt = new google.maps.LatLng(42.379, -71.282411);
		markers.push(new google.maps.Marker({position: pt, title: "Kendal Green", icon: railico}));
		pt = new google.maps.LatLng(42.219, -70.92140000000001);
		markers.push(new google.maps.Marker({position: pt, title: "East Weymouth", icon: railico}));
		pt = new google.maps.LatLng(42.091, -71.430342);
		markers.push(new google.maps.Marker({position: pt, title: "Forge Park / 495", icon: railico}));
		pt = new google.maps.LatLng(41.878, -70.91844399999999);
		markers.push(new google.maps.Marker({position: pt, title: "Middleboro/ Lakeville", icon: railico}));
		pt = new google.maps.LatLng(42.626, -71.15965300000001);
		markers.push(new google.maps.Marker({position: pt, title: "Ballardvale", icon: railico}));
		pt = new google.maps.LatLng(42.276, -71.21485300000001);
		markers.push(new google.maps.Marker({position: pt, title: "Hersey", icon: railico}));
		pt = new google.maps.LatLng(42.246, -71.684614);
		markers.push(new google.maps.Marker({position: pt, title: "Grafton", icon: railico}));
		pt = new google.maps.LatLng(42.453, -71.137041);
		markers.push(new google.maps.Marker({position: pt, title: "Winchester Center", icon: railico}));
		pt = new google.maps.LatLng(42.086, -71.01685999999999);
		markers.push(new google.maps.Marker({position: pt, title: "Brockton", icon: railico}));
		pt = new google.maps.LatLng(42.524, -70.898903);
		markers.push(new google.maps.Marker({position: pt, title: "Salem", icon: railico}));
		pt = new google.maps.LatLng(42.255, -71.125022);
		markers.push(new google.maps.Marker({position: pt, title: "Hyde Park", icon: railico}));
		pt = new google.maps.LatLng(42.196, -71.19678399999999);
		markers.push(new google.maps.Marker({position: pt, title: "Norwood Depot", icon: railico}));
		pt = new google.maps.LatLng(42.366, -71.061251);
		markers.push(new google.maps.Marker({position: pt, title: "North Station", icon: railico}));
		pt = new google.maps.LatLng(42.574, -70.770473);
		markers.push(new google.maps.Marker({position: pt, title: "Manchester", icon: railico}));
		pt = new google.maps.LatLng(42.251, -71.00484299999999);
		markers.push(new google.maps.Marker({position: pt, title: "Quincy Center", icon: railico}));
		pt = new google.maps.LatLng(42.656, -70.62561599999999);
		markers.push(new google.maps.Marker({position: pt, title: "Rockport", icon: railico}));
		pt = new google.maps.LatLng(42.21, -71.14709999999999);
		markers.push(new google.maps.Marker({position: pt, title: "Route 128", icon: railico}));
		pt = new google.maps.LatLng(42.445, -71.14090899999999);
		markers.push(new google.maps.Marker({position: pt, title: "Wedgemere", icon: railico}));
		pt = new google.maps.LatLng(42.582, -70.884501);
		markers.push(new google.maps.Marker({position: pt, title: "North Beverly", icon: railico}));
		pt = new google.maps.LatLng(42.347, -71.07576899999999);
		markers.push(new google.maps.Marker({position: pt, title: "Back Bay", icon: railico}));
		pt = new google.maps.LatLng(42.282, -71.159932);
		markers.push(new google.maps.Marker({position: pt, title: "West Roxbury", icon: railico}));
		pt = new google.maps.LatLng(42.611, -70.706456);
		markers.push(new google.maps.Marker({position: pt, title: "West Gloucester", icon: railico}));
		pt = new google.maps.LatLng(42.504, -71.137511);
		markers.push(new google.maps.Marker({position: pt, title: "Mishawum", icon: railico}));
		pt = new google.maps.LatLng(42.462, -71.455322);
		markers.push(new google.maps.Marker({position: pt, title: "South Acton", icon: railico}));
		pt = new google.maps.LatLng(42.366, -71.061251);
		markers.push(new google.maps.Marker({position: pt, title: "North Station", icon: railico}));
		pt = new google.maps.LatLng(42.545, -71.648363);
		markers.push(new google.maps.Marker({position: pt, title: "Shirley", icon: railico}));
		pt = new google.maps.LatLng(42.347, -71.07576899999999);
		markers.push(new google.maps.Marker({position: pt, title: "Back Bay", icon: railico}));
		pt = new google.maps.LatLng(42.347, -71.07576899999999);
		markers.push(new google.maps.Marker({position: pt, title: "Back Bay", icon: railico}));
		pt = new google.maps.LatLng(42.106, -71.021078);
		markers.push(new google.maps.Marker({position: pt, title: "Montello", icon: railico}));
		pt = new google.maps.LatLng(42.3, -71.113377);
		markers.push(new google.maps.Marker({position: pt, title: "Forest Hills", icon: railico}));
		pt = new google.maps.LatLng(42.456, -71.392371);
		markers.push(new google.maps.Marker({position: pt, title: "West Concord", icon: railico}));
		pt = new google.maps.LatLng(42.366, -71.061251);
		markers.push(new google.maps.Marker({position: pt, title: "North Station", icon: railico}));
		pt = new google.maps.LatLng(42.483, -71.067233);
		markers.push(new google.maps.Marker({position: pt, title: "Greenwood", icon: railico}));
		pt = new google.maps.LatLng(42.268, -71.52362100000001);
		markers.push(new google.maps.Marker({position: pt, title: "Southborough", icon: railico}));
		pt = new google.maps.LatLng(41.979, -70.720315);
		markers.push(new google.maps.Marker({position: pt, title: "Kingston", icon: railico}));
		pt = new google.maps.LatLng(42.561, -70.81274500000001);
		markers.push(new google.maps.Marker({position: pt, title: "Beverly Farms", icon: railico}));
		pt = new google.maps.LatLng(42.285, -71.15470000000001);
		markers.push(new google.maps.Marker({position: pt, title: "Highland", icon: railico}));
		pt = new google.maps.LatLng(42.414, -71.325344);
		markers.push(new google.maps.Marker({position: pt, title: "Lincoln", icon: railico}));
		pt = new google.maps.LatLng(42.336, -71.090524);
		markers.push(new google.maps.Marker({position: pt, title: "Ruggles", icon: railico}));
		pt = new google.maps.LatLng(42.159, -71.236125);
		markers.push(new google.maps.Marker({position: pt, title: "Plimptonville", icon: railico}));
		pt = new google.maps.LatLng(42.462, -70.947794);
		markers.push(new google.maps.Marker({position: pt, title: "Lynn", icon: railico}));
		pt = new google.maps.LatLng(42.251, -71.00484299999999);
		markers.push(new google.maps.Marker({position: pt, title: "Quincy Center", icon: railico}));
		pt = new google.maps.LatLng(42.245, -70.8698);
		markers.push(new google.maps.Marker({position: pt, title: "Nantasket Junction", icon: railico}));
		pt = new google.maps.LatLng(42.658, -71.144513);
		markers.push(new google.maps.Marker({position: pt, title: "Andover", icon: railico}));
		pt = new google.maps.LatLng(42.769, -71.085998);
		markers.push(new google.maps.Marker({position: pt, title: "Bradford", icon: railico}));
		pt = new google.maps.LatLng(42.28, -71.238089);
		markers.push(new google.maps.Marker({position: pt, title: "Needham Center", icon: railico}));
		pt = new google.maps.LatLng(42.125, -71.18321299999999);
		markers.push(new google.maps.Marker({position: pt, title: "Sharon", icon: railico}));
		pt = new google.maps.LatLng(42.353, -71.055364);
		markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: railico}));
		pt = new google.maps.LatLng(42.7, -71.159797);
		markers.push(new google.maps.Marker({position: pt, title: "Lawrence", icon: railico}));
		pt = new google.maps.LatLng(42.172, -71.220704);
		markers.push(new google.maps.Marker({position: pt, title: "Windsor Gardens", icon: railico}));
		pt = new google.maps.LatLng(42.296, -71.29431099999999);
		markers.push(new google.maps.Marker({position: pt, title: "Wellesley Square", icon: railico}));
		pt = new google.maps.LatLng(42.321, -71.052555);
		markers.push(new google.maps.Marker({position: pt, title: "JFK/UMASS", icon: railico}));
		pt = new google.maps.LatLng(42.262, -71.793881);
		markers.push(new google.maps.Marker({position: pt, title: "Worcester / Union Station", icon: railico}));
		pt = new google.maps.LatLng(42.108, -70.93529599999999);
		markers.push(new google.maps.Marker({position: pt, title: "Abington", icon: railico}));
		pt = new google.maps.LatLng(42.346, -71.246658);
		markers.push(new google.maps.Marker({position: pt, title: "Auburndale", icon: railico}));
		pt = new google.maps.LatLng(42.457, -71.358051);
		markers.push(new google.maps.Marker({position: pt, title: "Concord", icon: railico}));
		pt = new google.maps.LatLng(42.353, -71.055364);
		markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: railico}));
		pt = new google.maps.LatLng(42.469, -71.06827);
		markers.push(new google.maps.Marker({position: pt, title: "Melrose Highlands", icon: railico}));
		pt = new google.maps.LatLng(42.287, -71.14606000000001);
		markers.push(new google.maps.Marker({position: pt, title: "Bellevue", icon: railico}));
		pt = new google.maps.LatLng(42.238, -71.13237599999999);
		markers.push(new google.maps.Marker({position: pt, title: "Readville", icon: railico}));
		pt = new google.maps.LatLng(42.519, -71.50264300000001);
		markers.push(new google.maps.Marker({position: pt, title: "Littleton / Rte 495", icon: railico}));
		pt = new google.maps.LatLng(42.453, -71.137041);
		markers.push(new google.maps.Marker({position: pt, title: "Winchester Center", icon: railico}));
		pt = new google.maps.LatLng(42.319, -71.06907200000001);
		markers.push(new google.maps.Marker({position: pt, title: "Uphams Corner", icon: railico}));
		pt = new google.maps.LatLng(42.121, -71.32521699999999);
		markers.push(new google.maps.Marker({position: pt, title: "Norfolk", icon: railico}));
		pt = new google.maps.LatLng(42.56, -71.59011700000001);
		markers.push(new google.maps.Marker({position: pt, title: "Ayer", icon: railico}));
		pt = new google.maps.LatLng(42.347, -71.09893700000001);
		markers.push(new google.maps.Marker({position: pt, title: "Yawkey", icon: railico}));
		pt = new google.maps.LatLng(42.398, -71.174499);
		markers.push(new google.maps.Marker({position: pt, title: "Belmont", icon: railico}));
		pt = new google.maps.LatLng(42.237, -70.90309999999999);
		markers.push(new google.maps.Marker({position: pt, title: "West Hingham", icon: railico}));
		pt = new google.maps.LatLng(42.226, -71.173806);
		markers.push(new google.maps.Marker({position: pt, title: "Dedham Corp Center", icon: railico}));
		pt = new google.maps.LatLng(42.191, -71.199748);
		markers.push(new google.maps.Marker({position: pt, title: "Norwood Central", icon: railico}));
		pt = new google.maps.LatLng(42.445, -71.14090899999999);
		markers.push(new google.maps.Marker({position: pt, title: "Wedgemere", icon: railico}));
		pt = new google.maps.LatLng(42.233, -71.16041300000001);
		markers.push(new google.maps.Marker({position: pt, title: "Endicott", icon: railico}));
		pt = new google.maps.LatLng(42.157, -71.14552999999999);
		markers.push(new google.maps.Marker({position: pt, title: "Canton Center", icon: railico}));
		pt = new google.maps.LatLng(42.209, -71.00085);
		markers.push(new google.maps.Marker({position: pt, title: "Braintree", icon: railico}));
		pt = new google.maps.LatLng(42.353, -71.055364);
		markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: railico}));
		pt = new google.maps.LatLng(42.254, -71.11927);
		markers.push(new google.maps.Marker({position: pt, title: "Fairmount", icon: railico}));
		pt = new google.maps.LatLng(42.725, -70.859436);
		markers.push(new google.maps.Marker({position: pt, title: "Rowley", icon: railico}));
		pt = new google.maps.LatLng(42.033, -71.219318);
		markers.push(new google.maps.Marker({position: pt, title: "Mansfield", icon: railico}));
		pt = new google.maps.LatLng(42.474, -70.92203600000001);
		markers.push(new google.maps.Marker({position: pt, title: "Swampscott", icon: railico}));
		pt = new google.maps.LatLng(41.986, -70.96662499999999);
		markers.push(new google.maps.Marker({position: pt, title: "Bridgewater", icon: railico}));
		pt = new google.maps.LatLng(42.561, -70.870035);
		markers.push(new google.maps.Marker({position: pt, title: "Montserrat", icon: railico}));
		pt = new google.maps.LatLng(42.277, -71.416792);
		markers.push(new google.maps.Marker({position: pt, title: "Framingham", icon: railico}));
		pt = new google.maps.LatLng(42.678, -70.840024);
		markers.push(new google.maps.Marker({position: pt, title: "Ipswich", icon: railico}));
		pt = new google.maps.LatLng(42.31, -71.276769);
		markers.push(new google.maps.Marker({position: pt, title: "Wellesley Hills", icon: railico}));
		pt = new google.maps.LatLng(42.352, -71.20733799999999);
		markers.push(new google.maps.Marker({position: pt, title: "Newtonville", icon: railico}));
		pt = new google.maps.LatLng(42.251, -71.00484299999999);
		markers.push(new google.maps.Marker({position: pt, title: "Quincy Center", icon: railico}));
		pt = new google.maps.LatLng(42.282, -71.390548);
		markers.push(new google.maps.Marker({position: pt, title: "West Natick", icon: railico}));
		pt = new google.maps.LatLng(42.421, -71.132468);
		markers.push(new google.maps.Marker({position: pt, title: "West Medford", icon: railico}));
		pt = new google.maps.LatLng(42.353, -71.055364);
		markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: railico}));
		pt = new google.maps.LatLng(42.452, -71.069518);
		markers.push(new google.maps.Marker({position: pt, title: "Wyoming Hill", icon: railico}));
		pt = new google.maps.LatLng(42.084, -70.923204);
		markers.push(new google.maps.Marker({position: pt, title: "Whitman", icon: railico}));
		pt = new google.maps.LatLng(42.638, -71.314916);
		markers.push(new google.maps.Marker({position: pt, title: "Lowell", icon: railico}));
		pt = new google.maps.LatLng(41.83, -71.413332);
		markers.push(new google.maps.Marker({position: pt, title: "Providence", icon: railico}));
		pt = new google.maps.LatLng(42.56, -70.82481300000001);
		markers.push(new google.maps.Marker({position: pt, title: "Prides Crossing", icon: railico}));
		pt = new google.maps.LatLng(42.163, -71.153374);
		markers.push(new google.maps.Marker({position: pt, title: "Canton Junction", icon: railico}));
		pt = new google.maps.LatLng(42.362, -71.26085399999999);
		markers.push(new google.maps.Marker({position: pt, title: "Brandeis/ Roberts", icon: railico}));
		pt = new google.maps.LatLng(42.293, -71.23508699999999);
		markers.push(new google.maps.Marker({position: pt, title: "Needham Heights", icon: railico}));
		pt = new google.maps.LatLng(42.347, -71.07576899999999);
		markers.push(new google.maps.Marker({position: pt, title: "Back Bay", icon: railico}));
		pt = new google.maps.LatLng(42.396, -71.034826);
		markers.push(new google.maps.Marker({position: pt, title: "Chelsea", icon: railico}));
		pt = new google.maps.LatLng(42.521, -71.10744);
		markers.push(new google.maps.Marker({position: pt, title: "Reading", icon: railico}));
		pt = new google.maps.LatLng(42.273, -71.238007);
		markers.push(new google.maps.Marker({position: pt, title: "Needham Junction", icon: railico}));
		pt = new google.maps.LatLng(42.285, -71.347641);
		markers.push(new google.maps.Marker({position: pt, title: "Natick", icon: railico}));
		pt = new google.maps.LatLng(42.546, -71.173569);
		markers.push(new google.maps.Marker({position: pt, title: "Wilmington", icon: railico}));
		pt = new google.maps.LatLng(42.242, -70.837);
		markers.push(new google.maps.Marker({position: pt, title: "Cohasset", icon: railico}));
		pt = new google.maps.LatLng(42.502, -71.075);
		markers.push(new google.maps.Marker({position: pt, title: "Wakefield", icon: railico}));
		pt = new google.maps.LatLng(42.547, -70.88516799999999);
		markers.push(new google.maps.Marker({position: pt, title: "Beverly", icon: railico}));
		pt = new google.maps.LatLng(42.287, -71.12961);
		markers.push(new google.maps.Marker({position: pt, title: "Roslindale Village", icon: railico}));
		pt = new google.maps.LatLng(42.374, -71.23659499999999);
		markers.push(new google.maps.Marker({position: pt, title: "Waltham", icon: railico}));
		pt = new google.maps.LatLng(42.255, -71.125022);
		markers.push(new google.maps.Marker({position: pt, title: "Hyde Park", icon: railico}));
		pt = new google.maps.LatLng(42.426, -71.07422699999999);
		markers.push(new google.maps.Marker({position: pt, title: "Malden Center", icon: railico}));
		pt = new google.maps.LatLng(42.386, -71.289203);
		markers.push(new google.maps.Marker({position: pt, title: "Hastings", icon: railico}));
		pt = new google.maps.LatLng(42.518, -71.13865);
		markers.push(new google.maps.Marker({position: pt, title: "Anderson/ Woburn", icon: railico}));
		pt = new google.maps.LatLng(42.321, -71.052555);
		markers.push(new google.maps.Marker({position: pt, title: "JFK/UMASS", icon: railico}));
		pt = new google.maps.LatLng(42.154, -70.95249);
		markers.push(new google.maps.Marker({position: pt, title: "South Weymouth", icon: railico}));
		pt = new google.maps.LatLng(42.353, -71.055364);
		markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: railico}));
		pt = new google.maps.LatLng(42.238, -71.13237599999999);
		markers.push(new google.maps.Marker({position: pt, title: "Readville", icon: railico}));
		pt = new google.maps.LatLng(42.387, -71.189864);
		markers.push(new google.maps.Marker({position: pt, title: "Waverley", icon: railico}));
		pt = new google.maps.LatLng(42.221, -71.18340600000001);
		markers.push(new google.maps.Marker({position: pt, title: "Islington", icon: railico}));
		pt = new google.maps.LatLng(42.319, -71.06907200000001);
		markers.push(new google.maps.Marker({position: pt, title: "Uphams Corner", icon: railico}));
		pt = new google.maps.LatLng(42.421, -71.132468);
		markers.push(new google.maps.Marker({position: pt, title: "West Medford", icon: railico}));
		pt = new google.maps.LatLng(41.942, -71.284897);
		markers.push(new google.maps.Marker({position: pt, title: "Attleboro", icon: railico}));
		pt = new google.maps.LatLng(42.324, -71.272288);
		markers.push(new google.maps.Marker({position: pt, title: "Wellesley Farms", icon: railico}));
		pt = new google.maps.LatLng(42.221, -70.9682);
		markers.push(new google.maps.Marker({position: pt, title: "Weymouth Landing/ East Braintree", icon: railico}));
		pt = new google.maps.LatLng(42.281, -71.085475);
		markers.push(new google.maps.Marker({position: pt, title: "Morton Street", icon: railico}));
		pt = new google.maps.LatLng(42.336, -71.090524);
		markers.push(new google.maps.Marker({position: pt, title: "Ruggles", icon: railico}));
		pt = new google.maps.LatLng(41.898, -71.35462099999999);
		markers.push(new google.maps.Marker({position: pt, title: "South Attleboro", icon: railico}));
		pt = new google.maps.LatLng(42.546, -71.173569);
		markers.push(new google.maps.Marker({position: pt, title: "Wilmington", icon: railico}));
		pt = new google.maps.LatLng(42.593, -71.280869);
		markers.push(new google.maps.Marker({position: pt, title: "North Billerica", icon: railico}));
		pt = new google.maps.LatLng(42.262, -71.478813);
		markers.push(new google.maps.Marker({position: pt, title: "Ashland", icon: railico}));
		pt = new google.maps.LatLng(42.321, -71.052555);
		markers.push(new google.maps.Marker({position: pt, title: "JFK/UMASS", icon: railico}));
		pt = new google.maps.LatLng(42.336, -71.090524);
		markers.push(new google.maps.Marker({position: pt, title: "Ruggles", icon: railico}));
		pt = new google.maps.LatLng(42.8, -70.880262);
		markers.push(new google.maps.Marker({position: pt, title: "Newburyport", icon: railico}));
		pt = new google.maps.LatLng(42.773, -71.08596199999999);
		markers.push(new google.maps.Marker({position: pt, title: "Haverhill", icon: railico}));
		pt = new google.maps.LatLng(42.013, -70.820832);
		markers.push(new google.maps.Marker({position: pt, title: "Halifax", icon: railico}));
		pt = new google.maps.LatLng(42.144, -71.259016);
		markers.push(new google.maps.Marker({position: pt, title: "Walpole", icon: railico}));
		pt = new google.maps.LatLng(41.981, -70.692514);
		markers.push(new google.maps.Marker({position: pt, title: "Plymouth", icon: railico}));
		pt = new google.maps.LatLng(42.353, -71.055364);
		markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: railico}));
		pt = new google.maps.LatLng(42.353, -71.055364);
		markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: railico}));
		pt = new google.maps.LatLng(42.155, -71.027518);
		markers.push(new google.maps.Marker({position: pt, title: "Holbrook/ Randolph", icon: railico}));
		pt = new google.maps.LatLng(42.349, -71.22901);
		markers.push(new google.maps.Marker({position: pt, title: "West Newton", icon: railico}));
		pt = new google.maps.LatLng(42.209, -71.00085);
		markers.push(new google.maps.Marker({position: pt, title: "Braintree", icon: railico}));
		pt = new google.maps.LatLng(42.254, -71.11927);
		markers.push(new google.maps.Marker({position: pt, title: "Fairmount", icon: railico}));
		pt = new google.maps.LatLng(42.366, -71.061251);
		markers.push(new google.maps.Marker({position: pt, title: "North Station", icon: railico}));
		pt = new google.maps.LatLng(42.269, -71.652005);
		markers.push(new google.maps.Marker({position: pt, title: "Westborough", icon: railico}));
		pt = new google.maps.LatLng(42.388, -71.119159);
		markers.push(new google.maps.Marker({position: pt, title: "Porter Square", icon: railico}));
		pt = new google.maps.LatLng(42.611, -70.874005);
		markers.push(new google.maps.Marker({position: pt, title: "Hamilton/ Wenham", icon: railico}));
		pt = new google.maps.LatLng(42.541, -71.739402);
		markers.push(new google.maps.Marker({position: pt, title: "North Leominster", icon: railico}));
		pt = new google.maps.LatLng(42.616, -70.668767);
		markers.push(new google.maps.Marker({position: pt, title: "Gloucester", icon: railico}));
		pt = new google.maps.LatLng(42.22, -70.7877);
		markers.push(new google.maps.Marker({position: pt, title: "North Scituate", icon: railico}));
		pt = new google.maps.LatLng(42.353, -71.055364);
		markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: railico}));
		pt = new google.maps.LatLng(42.124, -71.10308999999999);
		markers.push(new google.maps.Marker({position: pt, title: "Stoughton", icon: railico}));
		pt = new google.maps.LatLng(42.084, -71.39673500000001);
		markers.push(new google.maps.Marker({position: pt, title: "Franklin", icon: railico}));
		pt = new google.maps.LatLng(42.178, -70.7462);
		markers.push(new google.maps.Marker({position: pt, title: "Greenbush", icon: railico}));
		pt = new google.maps.LatLng(41.727, -71.442453);
		markers.push(new google.maps.Marker({position: pt, title: "TF Green Airport", icon: railico}));
		pt = new google.maps.LatLng(42.582, -71.79275);
		markers.push(new google.maps.Marker({position: pt, title: "Fitchburg", icon: railico}));
		pt = new google.maps.LatLng(42.043, -70.881553);
		markers.push(new google.maps.Marker({position: pt, title: "Hanson", icon: railico}));
		pt = new google.maps.LatLng(42.568, -71.159724);
		markers.push(new google.maps.Marker({position: pt, title: "North Wilmington", icon: railico}));
		pt = new google.maps.LatLng(42.518, -71.13865);
		markers.push(new google.maps.Marker({position: pt, title: "Anderson/ Woburn", icon: railico}));
		pt = new google.maps.LatLng(42.06, -71.01246);
		markers.push(new google.maps.Marker({position: pt, title: "Campello", icon: railico}));
		pt = new google.maps.LatLng(42.454, -70.97569799999999);
		markers.push(new google.maps.Marker({position: pt, title: "River Works", icon: railico}));
		pt = new google.maps.LatLng(42.396, -71.302357);
		markers.push(new google.maps.Marker({position: pt, title: "Silver Hill", icon: railico}));
		pt = new google.maps.LatLng(42.459, -71.06944799999999);
		markers.push(new google.maps.Marker({position: pt, title: "Melrose Cedar Park", icon: railico}));





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
       		Data("http://mbtamap.herokuapp.com//mapper/find_closest_stations?lat=" + me.lat + "&lon=" + me.lng, closeReady);
	infowindow.setContent(content);
			infowindow.open(map, new google.maps.Marker({position: me, map: map, title : "Me"}));
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
	}
	else if(request.readyState == 4 && request.status == 500) {
		content += "<p>There is no MBTA train station near you.</p>";
	}

}