var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_converted_1 = new ol.format.GeoJSON();
var features_converted_1 = format_converted_1.readFeatures(json_converted_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_converted_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_converted_1.addFeatures(features_converted_1);
var lyr_converted_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_converted_1, 
                style: style_converted_1,
                popuplayertitle: 'converted',
                interactive: true,
    title: 'converted<br />\
    <img src="styles/legend/converted_1_0.png" /> Brīvības iela 2, Ventspils<br />\
    <img src="styles/legend/converted_1_1.png" /> Dižkalni, Ventspils<br />\
    <img src="styles/legend/converted_1_2.png" /> Durbes iela 36a, Ventspils<br />\
    <img src="styles/legend/converted_1_3.png" /> Dzintaru iela 17, Ventspils<br />\
    <img src="styles/legend/converted_1_4.png" /> Dzintaru iela 44, Ventspils<br />\
    <img src="styles/legend/converted_1_5.png" /> Dzintaru iela 50A, Ventspils<br />\
    <img src="styles/legend/converted_1_6.png" /> Dzintaru iela 52, Ventspils<br />\
    <img src="styles/legend/converted_1_7.png" /> Dzintaru iela 52C, Ventspils<br />\
    <img src="styles/legend/converted_1_8.png" /> Dzintaru iela 68, Ventspils<br />\
    <img src="styles/legend/converted_1_9.png" /> Elektriķu iela 8, Ventspils<br />\
    <img src="styles/legend/converted_1_10.png" /> Fabrikas iela 10, Ventspils<br />\
    <img src="styles/legend/converted_1_11.png" /> Fabrikas iela 14, Ventspils<br />\
    <img src="styles/legend/converted_1_12.png" /> Fabrikas iela 5a, Ventspils<br />\
    <img src="styles/legend/converted_1_13.png" /> Fabrikas iela 5B, Ventspils<br />\
    <img src="styles/legend/converted_1_14.png" /> Ganību iela 103, Ventspils<br />\
    <img src="styles/legend/converted_1_15.png" /> Gobu iela 4, Ventspils<br />\
    <img src="styles/legend/converted_1_16.png" /> I.Mičurina iela 13, Ventspils<br />\
    <img src="styles/legend/converted_1_17.png" /> I.Mičurina iela 14, Ventspils<br />\
    <img src="styles/legend/converted_1_18.png" /> I.Mičurina iela 1A, Ventspils<br />\
    <img src="styles/legend/converted_1_19.png" /> Jundas iela 4, Ventspils<br />\
    <img src="styles/legend/converted_1_20.png" /> Kaiju iela 1, Ventspils<br />\
    <img src="styles/legend/converted_1_21.png" /> Kaiju iela 5, Ventspils<br />\
    <img src="styles/legend/converted_1_22.png" /> Kaiju iela 7, Ventspils<br />\
    <img src="styles/legend/converted_1_23.png" /> Ķēči 1, Ventspils<br />\
    <img src="styles/legend/converted_1_24.png" /> Ķēči, Ventspils<br />\
    <img src="styles/legend/converted_1_25.png" /> Kurzemes iela 2, Ventspils<br />\
    <img src="styles/legend/converted_1_26.png" /> Kurzemes iela 24, Ventspils<br />\
    <img src="styles/legend/converted_1_27.png" /> Kurzemes iela 40, Ventspils<br />\
    <img src="styles/legend/converted_1_28.png" /> Kustes dambis 13, Ventspils<br />\
    <img src="styles/legend/converted_1_29.png" /> Kustes dambis 30A, Ventspils<br />\
    <img src="styles/legend/converted_1_30.png" /> Kustes dambis 40, Ventspils<br />\
    <img src="styles/legend/converted_1_31.png" /> Liepas, Ventspils<br />\
    <img src="styles/legend/converted_1_32.png" /> Maskavas iela 10, Ventspils<br />\
    <img src="styles/legend/converted_1_33.png" /> Maskavas iela 14, Ventspils<br />\
    <img src="styles/legend/converted_1_34.png" /> Maskavas iela 6, Ventspils<br />\
    <img src="styles/legend/converted_1_35.png" /> Mauru ceļš 12, Ventspils<br />\
    <img src="styles/legend/converted_1_36.png" /> Mauru ceļš 17, Ventspils<br />\
    <img src="styles/legend/converted_1_37.png" /> Mauru ceļš 27, Ventspils<br />\
    <img src="styles/legend/converted_1_38.png" /> Mauru ceļš 31, Ventspils<br />\
    <img src="styles/legend/converted_1_39.png" /> Mauru ceļš 39A, Ventspils<br />\
    <img src="styles/legend/converted_1_40.png" /> Mauru ceļš 40, Ventspils<br />\
    <img src="styles/legend/converted_1_41.png" /> Mauru ceļš 49, Ventspils<br />\
    <img src="styles/legend/converted_1_42.png" /> Mauru ceļš 53, Ventspils<br />\
    <img src="styles/legend/converted_1_43.png" /> Mauru ceļš 57, Ventspils<br />\
    <img src="styles/legend/converted_1_44.png" /> Mauru ceļš 59, Ventspils<br />\
    <img src="styles/legend/converted_1_45.png" /> Mauru ceļš 63, Ventspils<br />\
    <img src="styles/legend/converted_1_46.png" /> Mauru ceļš 69, Ventspils<br />\
    <img src="styles/legend/converted_1_47.png" /> Mauru ceļš 71, Ventspils<br />\
    <img src="styles/legend/converted_1_48.png" /> Mauru ceļš 71a, Ventspils<br />\
    <img src="styles/legend/converted_1_49.png" /> Mauru ceļš 73a, Ventspils<br />\
    <img src="styles/legend/converted_1_50.png" /> Mauru ceļš 76, Ventspils<br />\
    <img src="styles/legend/converted_1_51.png" /> Mednieku iela 1, Ventspils<br />\
    <img src="styles/legend/converted_1_52.png" /> Naftas iela 9, Ventspils<br />\
    <img src="styles/legend/converted_1_53.png" /> Ostas mežs 1, Ventspils<br />\
    <img src="styles/legend/converted_1_54.png" /> P.Stradiņa iela 29, Ventspils<br />\
    <img src="styles/legend/converted_1_55.png" /> Robežu iela 11, Ventspils<br />\
    <img src="styles/legend/converted_1_56.png" /> Rūpniecības iela 14, Ventspils<br />\
    <img src="styles/legend/converted_1_57.png" /> Rūpniecības iela 24A, Ventspils<br />\
    <img src="styles/legend/converted_1_58.png" /> Rūpniecības iela 29, Ventspils<br />\
    <img src="styles/legend/converted_1_59.png" /> Rūpniecības iela 37, Ventspils<br />\
    <img src="styles/legend/converted_1_60.png" /> Sarkanmuižas dambis 21B, Ventspils<br />\
    <img src="styles/legend/converted_1_61.png" /> Sarkanmuižas dambis 25, Ventspils<br />\
    <img src="styles/legend/converted_1_62.png" /> Siguldas iela 2, Ventspils<br />\
    <img src="styles/legend/converted_1_63.png" /> Talsu iela 103, Ventspils<br />\
    <img src="styles/legend/converted_1_64.png" /> Talsu iela 200, Ventspils<br />\
    <img src="styles/legend/converted_1_65.png" /> Talsu iela 206A, Ventspils<br />\
    <img src="styles/legend/converted_1_66.png" /> Talsu iela 59A, Ventspils<br />\
    <img src="styles/legend/converted_1_67.png" /> Talsu iela 63, Ventspils<br />\
    <img src="styles/legend/converted_1_68.png" /> Talsu iela 65A, Ventspils<br />\
    <img src="styles/legend/converted_1_69.png" /> Talsu iela 65B, Ventspils<br />\
    <img src="styles/legend/converted_1_70.png" /> Talsu iela 65C, Ventspils<br />\
    <img src="styles/legend/converted_1_71.png" /> Talsu iela 71A, Ventspils<br />\
    <img src="styles/legend/converted_1_72.png" /> Talsu iela 71B, Ventspils<br />\
    <img src="styles/legend/converted_1_73.png" /> Talsu iela 77, Ventspils<br />\
    <img src="styles/legend/converted_1_74.png" /> Tārgales iela 80, Ventspils<br />\
    <img src="styles/legend/converted_1_75.png" /> Tārgales iela 82, Ventspils<br />\
    <img src="styles/legend/converted_1_76.png" /> Tārgales iela 94, Ventspils<br />\
    <img src="styles/legend/converted_1_77.png" /> Ziemeļu iela 21, Ventspils<br />\
    <img src="styles/legend/converted_1_78.png" /> Ziemeļu iela 3, Ventspils<br />\
    <img src="styles/legend/converted_1_79.png" /> Žiperi<br />\
    <img src="styles/legend/converted_1_80.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_converted_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_converted_1];
lyr_converted_1.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'versionId': 'versionId', 'label': 'label', 'nationalCa': 'nationalCa', 'pos': 'pos', 'BrivsGbls': 'BrivsGbls', 'Kad. Nr.': 'Kad. Nr.', 'Adrese': 'Adrese', 'Platība': 'Platība', 'KOMENTĀRS': 'KOMENTĀRS', 'ZONA': 'ZONA', 'Nosaukums': 'Nosaukums', 'Apzīmejums': 'Apzīmejums', 'Jaunizveidojama zemesgabala minimālā platība (m2 )': 'Jaunizveidojama zemesgabala minimālā platība (m2 )', 'Jaunizveidojama zemesgabala maksimālā platība (m2)': 'Jaunizveidojama zemesgabala maksimālā platība (m2)', 'Maksimālais stāvu skaits': 'Maksimālais stāvu skaits', 'Maksimālais apbūves blīvums (%)': 'Maksimālais apbūves blīvums (%)', 'Maksimālā apbūves intensitāte (%)': 'Maksimālā apbūves intensitāte (%)', 'Zemesgabala minimālā brīvā teritorija (%)': 'Zemesgabala minimālā brīvā teritorija (%)', 'Maksimālais palīgizmantošan as īpatsvārs, (%)': 'Maksimālais palīgizmantošan as īpatsvārs, (%)', 'Galvenā izmantošana': 'Galvenā izmantošana', 'Papildu izmantošana': 'Papildu izmantošana', 'ZONA2': 'ZONA2', 'Nosaukums2': 'Nosaukums2', 'Apzīmejums2': 'Apzīmejums2', 'Jaunizveidojama zemesgabala minimālā platība (m2 )2': 'Jaunizveidojama zemesgabala minimālā platība (m2 )2', 'Jaunizveidojama zemesgabala maksimālā platība (m2)2': 'Jaunizveidojama zemesgabala maksimālā platība (m2)2', 'Maksimālais stāvu skaits2': 'Maksimālais stāvu skaits2', 'Maksimālais apbūves blīvums (%)2': 'Maksimālais apbūves blīvums (%)2', 'Maksimālā apbūves intensitāte (%)2': 'Maksimālā apbūves intensitāte (%)2', 'Zemesgabala minimālā brīvā teritorija (%) 2': 'Zemesgabala minimālā brīvā teritorija (%) 2', 'Maksimālais palīgizmantošan as īpatsvārs, (%)2': 'Maksimālais palīgizmantošan as īpatsvārs, (%)2', 'Galvenā izmantošana2': 'Galvenā izmantošana2', 'Papildu izmantošana2': 'Papildu izmantošana2', 'ZONA3': 'ZONA3', 'Nosaukums3': 'Nosaukums3', 'Apzīmejums3': 'Apzīmejums3', 'Jaunizveidojama zemesgabala minimālā platība (m2 )3': 'Jaunizveidojama zemesgabala minimālā platība (m2 )3', 'Jaunizveidojama zemesgabala maksimālā platība (m2)3': 'Jaunizveidojama zemesgabala maksimālā platība (m2)3', 'Maksimālais stāvu skaits3': 'Maksimālais stāvu skaits3', 'Maksimālais apbūves blīvums (%)3': 'Maksimālais apbūves blīvums (%)3', 'Maksimālā apbūves intensitāte (%)3': 'Maksimālā apbūves intensitāte (%)3', 'Zemesgabala minimālā brīvā teritorija (%) 3': 'Zemesgabala minimālā brīvā teritorija (%) 3', 'Maksimālais palīgizmantošan as īpatsvārs, (%)3': 'Maksimālais palīgizmantošan as īpatsvārs, (%)3', 'Galvenā izmantošana3': 'Galvenā izmantošana3', 'Papildu izmantošana3': 'Papildu izmantošana3', });
lyr_converted_1.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'pos': 'TextEdit', 'BrivsGbls': 'TextEdit', 'Kad. Nr.': 'TextEdit', 'Adrese': 'TextEdit', 'Platība': 'TextEdit', 'KOMENTĀRS': 'TextEdit', 'ZONA': 'TextEdit', 'Nosaukums': 'TextEdit', 'Apzīmejums': 'TextEdit', 'Jaunizveidojama zemesgabala minimālā platība (m2 )': 'TextEdit', 'Jaunizveidojama zemesgabala maksimālā platība (m2)': 'TextEdit', 'Maksimālais stāvu skaits': 'TextEdit', 'Maksimālais apbūves blīvums (%)': 'TextEdit', 'Maksimālā apbūves intensitāte (%)': 'TextEdit', 'Zemesgabala minimālā brīvā teritorija (%)': 'TextEdit', 'Maksimālais palīgizmantošan as īpatsvārs, (%)': 'TextEdit', 'Galvenā izmantošana': 'TextEdit', 'Papildu izmantošana': 'TextEdit', 'ZONA2': 'TextEdit', 'Nosaukums2': 'TextEdit', 'Apzīmejums2': 'TextEdit', 'Jaunizveidojama zemesgabala minimālā platība (m2 )2': 'TextEdit', 'Jaunizveidojama zemesgabala maksimālā platība (m2)2': 'TextEdit', 'Maksimālais stāvu skaits2': 'TextEdit', 'Maksimālais apbūves blīvums (%)2': 'TextEdit', 'Maksimālā apbūves intensitāte (%)2': 'TextEdit', 'Zemesgabala minimālā brīvā teritorija (%) 2': 'TextEdit', 'Maksimālais palīgizmantošan as īpatsvārs, (%)2': 'TextEdit', 'Galvenā izmantošana2': 'TextEdit', 'Papildu izmantošana2': 'TextEdit', 'ZONA3': 'TextEdit', 'Nosaukums3': 'TextEdit', 'Apzīmejums3': 'TextEdit', 'Jaunizveidojama zemesgabala minimālā platība (m2 )3': 'TextEdit', 'Jaunizveidojama zemesgabala maksimālā platība (m2)3': 'TextEdit', 'Maksimālais stāvu skaits3': 'TextEdit', 'Maksimālais apbūves blīvums (%)3': 'TextEdit', 'Maksimālā apbūves intensitāte (%)3': 'TextEdit', 'Zemesgabala minimālā brīvā teritorija (%) 3': 'TextEdit', 'Maksimālais palīgizmantošan as īpatsvārs, (%)3': 'TextEdit', 'Galvenā izmantošana3': 'TextEdit', 'Papildu izmantošana3': 'TextEdit', });
lyr_converted_1.set('fieldLabels', {'gml_id': 'hidden field', 'areaValue': 'hidden field', 'areaValue_': 'hidden field', 'beginLifes': 'hidden field', 'endLifespa': 'hidden field', 'localId': 'hidden field', 'namespace': 'hidden field', 'versionId': 'hidden field', 'label': 'inline label - visible with data', 'nationalCa': 'hidden field', 'pos': 'hidden field', 'BrivsGbls': 'hidden field', 'Kad. Nr.': 'inline label - visible with data', 'Adrese': 'inline label - visible with data', 'Platība': 'inline label - visible with data', 'KOMENTĀRS': 'inline label - visible with data', 'ZONA': 'inline label - visible with data', 'Nosaukums': 'inline label - visible with data', 'Apzīmejums': 'inline label - visible with data', 'Jaunizveidojama zemesgabala minimālā platība (m2 )': 'inline label - visible with data', 'Jaunizveidojama zemesgabala maksimālā platība (m2)': 'inline label - visible with data', 'Maksimālais stāvu skaits': 'inline label - visible with data', 'Maksimālais apbūves blīvums (%)': 'inline label - visible with data', 'Maksimālā apbūves intensitāte (%)': 'inline label - visible with data', 'Zemesgabala minimālā brīvā teritorija (%)': 'inline label - visible with data', 'Maksimālais palīgizmantošan as īpatsvārs, (%)': 'inline label - visible with data', 'Galvenā izmantošana': 'inline label - visible with data', 'Papildu izmantošana': 'inline label - visible with data', 'ZONA2': 'hidden field', 'Nosaukums2': 'hidden field', 'Apzīmejums2': 'hidden field', 'Jaunizveidojama zemesgabala minimālā platība (m2 )2': 'hidden field', 'Jaunizveidojama zemesgabala maksimālā platība (m2)2': 'hidden field', 'Maksimālais stāvu skaits2': 'hidden field', 'Maksimālais apbūves blīvums (%)2': 'hidden field', 'Maksimālā apbūves intensitāte (%)2': 'hidden field', 'Zemesgabala minimālā brīvā teritorija (%) 2': 'hidden field', 'Maksimālais palīgizmantošan as īpatsvārs, (%)2': 'hidden field', 'Galvenā izmantošana2': 'hidden field', 'Papildu izmantošana2': 'hidden field', 'ZONA3': 'hidden field', 'Nosaukums3': 'hidden field', 'Apzīmejums3': 'hidden field', 'Jaunizveidojama zemesgabala minimālā platība (m2 )3': 'hidden field', 'Jaunizveidojama zemesgabala maksimālā platība (m2)3': 'hidden field', 'Maksimālais stāvu skaits3': 'hidden field', 'Maksimālais apbūves blīvums (%)3': 'hidden field', 'Maksimālā apbūves intensitāte (%)3': 'hidden field', 'Zemesgabala minimālā brīvā teritorija (%) 3': 'hidden field', 'Maksimālais palīgizmantošan as īpatsvārs, (%)3': 'hidden field', 'Galvenā izmantošana3': 'hidden field', 'Papildu izmantošana3': 'hidden field', });
lyr_converted_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});