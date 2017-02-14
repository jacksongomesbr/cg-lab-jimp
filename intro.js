var jimp = require('jimp');
jimp.read('https://c2.staticflickr.com/8/7301/12734559244_681345a5b8_b.jpg')
  .then(function(imagem){
    console.log('dados da imagem:');
    console.log('largura: ' + imagem.bitmap.width);
    console.log('altura: ' + imagem.bitmap.height);
  })
  .catch(function(erro){
    console.log('Ocorreu um erro ao baixar a imagem');
  });
