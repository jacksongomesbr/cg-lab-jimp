var jimp = require('jimp');
jimp.read('https://c2.staticflickr.com/8/7301/12734559244_681345a5b8_b.jpg')
  .then(function(imagem){
    imagem.write('imagem-download.jpg');
    console.log('download feito com sucesso');
  })
  .catch(function(erro){
    console.log('Ocorreu um erro ao baixar a imagem');
  });
