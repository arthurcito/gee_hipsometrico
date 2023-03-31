// Importar asset do polígono dos limites do estado de Roraima para gerar mapa apenas para esta região.

var dataset = ee.Image('CGIAR/SRTM90_V4');
var elevation = dataset.select('elevation');
var mapaHipso = elevation.clip(roraima); // Clip para os limites do polígono de Roraima importado dos assets.

var sld_ramp =
  '<RasterSymbolizer>' +
    '<ColorMap type="ramp" extended="false" >' +
      '<ColorMapEntry color="#3288bd" quantity="0" label="0"/>' +
      '<ColorMapEntry color="#66c2a5" quantity="30" label="30"/>' +
      '<ColorMapEntry color="#e6f598" quantity="60" label="60" />' +
      '<ColorMapEntry color="#fee08b" quantity="90" label="90" />' +
      '<ColorMapEntry color="#fdae61" quantity="120" label="120" />' +
      '<ColorMapEntry color="#f46d43" quantity="150" label="150" />' +
      '<ColorMapEntry color="#d53e4f" quantity="300" label="300" />' +
      '<ColorMapEntry color="#bf812d" quantity="600" label="600" />' +
      '<ColorMapEntry color="#8c510a" quantity="900" label="900" />' +
      '<ColorMapEntry color="#f5f5f5" quantity="1200" label="1200" />' +
    '</ColorMap>' +
  '</RasterSymbolizer>';

Map.setCenter(-60.8, 1.75, 6);
Map.addLayer(mapaHipso.sldStyle(sld_ramp), {}, 'SLD ramp');
