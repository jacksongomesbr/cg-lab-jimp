var jimp = require('jimp');
jimp.read('https://c2.staticflickr.com/8/7301/12734559244_681345a5b8_b.jpg')
  .then(function(imagem){
    imagem.resize(300, 200).write('imagem-redimensionada.jpg');
    console.log('Download concluído e imagem redimensionada com sucesso');
    console.log('Veja o arquivo "imagem-redimensionada.jpg"');
  })
  .catch(function(erro){
    console.log('Ocorreu um erro ao baixar a imagem');
  });
