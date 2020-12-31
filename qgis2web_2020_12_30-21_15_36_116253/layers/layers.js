var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_test_buses_1 = new ol.format.GeoJSON();
var features_test_buses_1 = format_test_buses_1.readFeatures(json_test_buses_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_buses_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_buses_1.addFeatures(features_test_buses_1);
var lyr_test_buses_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_test_buses_1, 
                style: style_test_buses_1,
                interactive: true,
    title: 'test_buses<br />\
    <img src="styles/legend/test_buses_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/test_buses_1_1.png" /> 0 - 14664<br />\
    <img src="styles/legend/test_buses_1_2.png" /> 14664 - 16505<br />\
    <img src="styles/legend/test_buses_1_3.png" /> 16505 - 18072<br />\
    <img src="styles/legend/test_buses_1_4.png" /> 18072 - 25197<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_test_buses_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_test_buses_1];
lyr_test_buses_1.set('fieldAliases', {'field_1': 'field_1', 'fromfile': 'fromfile', 'vehicleID': 'vehicleID', 'latitude': 'latitude', 'longitude': 'longitude', 'gpstimestamp': 'gpstimestamp', 'gps_speed': 'gps_speed', 'gps_speed_timestamp': 'gps_speed_timestamp', 'gps_altitude': 'gps_altitude', 'gps_altitude_timestamp': 'gps_altitude_timestamp', 'fuel_used': 'fuel_used', 'fuel_used_timestamp': 'fuel_used_timestamp', 'dates': 'dates', 'max_time_stamp': 'max_time_stamp', 'min_time_stamp': 'min_time_stamp', 'inside_testbed': 'inside_testbed', 'fuel_num': 'fuel_num', });
lyr_test_buses_1.set('fieldImages', {'field_1': 'Range', 'fromfile': 'Range', 'vehicleID': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'gpstimestamp': 'TextEdit', 'gps_speed': 'TextEdit', 'gps_speed_timestamp': 'TextEdit', 'gps_altitude': 'TextEdit', 'gps_altitude_timestamp': 'TextEdit', 'fuel_used': 'TextEdit', 'fuel_used_timestamp': 'TextEdit', 'dates': 'DateTime', 'max_time_stamp': 'TextEdit', 'min_time_stamp': 'TextEdit', 'inside_testbed': 'TextEdit', 'fuel_num': 'TextEdit', });
lyr_test_buses_1.set('fieldLabels', {'field_1': 'inline label', 'fromfile': 'inline label', 'vehicleID': 'header label', 'latitude': 'inline label', 'longitude': 'inline label', 'gpstimestamp': 'inline label', 'gps_speed': 'inline label', 'gps_speed_timestamp': 'inline label', 'gps_altitude': 'inline label', 'gps_altitude_timestamp': 'inline label', 'fuel_used': 'inline label', 'fuel_used_timestamp': 'inline label', 'dates': 'inline label', 'max_time_stamp': 'inline label', 'min_time_stamp': 'inline label', 'inside_testbed': 'inline label', 'fuel_num': 'inline label', });
lyr_test_buses_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});