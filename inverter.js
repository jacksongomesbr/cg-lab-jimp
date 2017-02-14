var jimp = require('jimp');
jimp.read('imagem-download.jpg')
  .then(function(imagem){
    var w = imagem.bitmap.width;
    var h = imagem.bitmap.height;
    for(var i = 0; i < w; i++) {
      for(var j = 0; j < h; j++) {
        var cor = imagem.getPixelColor(i, j);
        var rgba = jimp.intToRGBA(cor);
        rgba.r = 255 - rgba.r;
        rgba.g = 255 - rgba.g;
        rgba.b = 255 - rgba.b;
        var hex = jimp.rgbaToInt(rgba.r, rgba.g, rgba.b, rgba.a);
        imagem.setPixelColor(hex, i, j);
      }
    }
    imagem.write('imagem-invertida.jpg');
    console.log('As cores da imagem foram invertidas com sucesso.');
    console.log('Veja o arquivo "imagem-invertida.jpg"');
  })
  .catch(function(erro){
    console.log('Ocorreu um erro ao inverter a imagem.');
    console.log(erro);
  });
