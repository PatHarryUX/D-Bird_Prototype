       var map;
        
        var marker;
        
        var geosearchControl;

            $(document).ready(function () {
                
                map = L.map('map', {touchZoom: false}).setView([40.709792, -73.991547], 10);
 
                geosearchControl = new L.Control.GeoSearch({
                    provider: new L.GeoSearch.Provider.Google()
                }).addTo(map);
                
                map.on('geosearch_showlocation', function(e) {
                    console.log(e.Location.X)
                    if (marker){
                        map.removeLayer(marker)
                        marker=undefined
                        }
                    $('#entry_563161073').val(e.Location.Y); 
            $('#entry_195156901').val(e.Location.X);
                });
                
                               
                L.tileLayer('https://{s}.tiles.mapbox.com/v3/ebrelsford.ho06j5h0/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>'
                }).addTo(map);
             
                $.getJSON('queens.geojson', function (data) {
                    L.geoJson(data, {
                        onEachFeature: function (feature, layer) {
                            layer.bindPopup('area: ' + feature.properties.area);
                        }
                    }).addTo(map);
                });
         
                
                
        function onMapClick(e) {
                    if(geosearchControl._positionMarker){
                        map.removeLayer(geosearchControl._positionMarker)
                        geosearchControl._positionMarker=undefined
                    }
                    if (marker){
                        map.removeLayer(marker);
                    }
                    marker=L.marker(e.latlng).addTo(map);
            $('#entry_563161073').val(e.latlng.lat)
            $('#entry_195156901').val(e.latlng.lng)
            } 

          map.on('click', onMapClick);        
            });












       