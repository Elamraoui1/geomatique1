var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Casablanca_1 = new ol.format.GeoJSON();
var features_Casablanca_1 = format_Casablanca_1.readFeatures(json_Casablanca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casablanca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casablanca_1.addFeatures(features_Casablanca_1);
var lyr_Casablanca_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casablanca_1, 
                style: style_Casablanca_1,
                popuplayertitle: 'Casablanca',
                interactive: true,
                title: '<img src="styles/legend/Casablanca_1.png" /> Casablanca'
            });
var format_restaurantfeuil1_2 = new ol.format.GeoJSON();
var features_restaurantfeuil1_2 = format_restaurantfeuil1_2.readFeatures(json_restaurantfeuil1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantfeuil1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantfeuil1_2.addFeatures(features_restaurantfeuil1_2);
cluster_restaurantfeuil1_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_restaurantfeuil1_2
});
var lyr_restaurantfeuil1_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_restaurantfeuil1_2, 
                style: style_restaurantfeuil1_2,
                popuplayertitle: 'restaurantfeuil1',
                interactive: true,
                title: '<img src="styles/legend/restaurantfeuil1_2.png" /> restaurantfeuil1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Casablanca_1.setVisible(true);lyr_restaurantfeuil1_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Casablanca_1,lyr_restaurantfeuil1_2];
lyr_Casablanca_1.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'REGION': 'REGION', 'CODE': 'CODE', });
lyr_restaurantfeuil1_2.set('fieldAliases', {'fid': 'fid', 'Nom du restaurant': 'Nom du restaurant', });
lyr_Casablanca_1.set('fieldImages', {'LIBELLE': 'TextEdit', 'REGION': 'TextEdit', 'CODE': 'TextEdit', });
lyr_restaurantfeuil1_2.set('fieldImages', {'fid': 'TextEdit', 'Nom du restaurant': 'TextEdit', });
lyr_Casablanca_1.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'REGION': 'inline label - visible with data', 'CODE': 'inline label - visible with data', });
lyr_restaurantfeuil1_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nom du restaurant': 'inline label - visible with data', });
lyr_restaurantfeuil1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});