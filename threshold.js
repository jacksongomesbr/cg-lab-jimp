var jimp = require('jimp');
var t = 100;

function threshold_filter(v, t) {
  if (v <= t) {
    return 0;
  } else {
    return 255;
  }
}

jimp.read('imagem-download.jpg')
  .then(function(imagem){
    var w = imagem.bitmap.width;
    var h = imagem.bitmap.height;
    imagem = imagem.greyscale();

    for(var i = 0; i < w; i++) {
      for(var j = 0; j < h; j++) {
        var cor = imagem.getPixelColor(i, j);
        var rgba = jimp.intToRGBA(cor);

        rgba.r = threshold_filter(rgba.r, t);
        rgba.g = rgba.r;
        rgba.b = rgba.r;

        var hex = jimp.rgbaToInt(rgba.r, rgba.g, rgba.b, rgba.a);
        imagem.setPixelColor(hex, i, j);
      }
    }
    imagem.write('imagem-threshold.jpg');
    console.log('A operação de threshold foi aplicada com sucesso.');
    console.log('Veja o arquivo "imagem-threshold.jpg"');
  })
  .catch(function(erro){
    console.log('Ocorreu aplicar a operação de threshold na imagem.');
    console.log(erro);
  });
