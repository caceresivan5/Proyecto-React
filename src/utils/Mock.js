


//array de juegos

export const juegosArray = [
    { id: 1, consola: 'PS4', nombre:'Uncharted 4', portada:'https://as.com/meristation/imagenes/2015/06/03/noticia/1433346420_888162_1532451997_sumario_normal.jpg',  precio: '5400'},
    { id: 2, consola: 'PS4', nombre:'Resident Evil 3', portada:'https://www.ecured.cu/images/b/b4/RE_3_Remake_Portada_PS4.jpg',  precio: '8500'},
    { id: 3, consola: 'PS4', nombre:'Modern-Warfare', portada:'https://uvejuegos.com/img/caratulas/62807/Call-of-Duty-Modern-Warfare-PS4-EU.jpg',  precio: '6000'},
    { id: 4, consola: 'PS3', nombre:'Assassin Creed 2', portada:'https://www.neoteo.com/wp-content/images/B9EE.jpg',  precio: '8500'},
    { id: 5, consola: 'PS3', nombre:'Dead Island', portada:'http://4.bp.blogspot.com/-nbmcZw0Pyfg/UIr0wbh70HI/AAAAAAAAC1s/gerILfhQPeE/s1600/dead-island-packshot-ps3-2d-pegi.jpg',  precio: '3400'},
    { id: 6, consola: 'PS3', nombre:'The Last Of US', portada:'https://m.media-amazon.com/images/I/A1dXfW1yPNL._SL1500_.jpg',  precio: '4500'},
    { id: 7, consola: 'PC', nombre:'Call of Duty', portada:'https://uvejuegos.com/img/caratulas/56692/call-of-duty-infinite-warfare-cover-pc.jpg',  precio: '6000'},
    { id: 8, consola: 'PC', nombre:'Dishonored 2', portada:'https://uvejuegos.com/img/caratulas/55649/pc.jpg',  precio: '8500'},
    { id: 8, consola: 'PC', nombre:'Crysis 2', portada:'https://mansiondominator.files.wordpress.com/2010/04/pc-crysis-2.jpg',  precio: '8500'}
  ];

  export const getJuegos = new Promise((res, rej)=>{
      //acciones asincronicas
      let respuestas = '200'
      if(respuestas === '200'){
          setTimeout(()=>{
            res(juegosArray)
          },2000)
          
      }else{
          rej('404..')
      }
  })


  const JuegosUno = { id: 4, nombre:'Resident Evil 3', portada:'https://www.ecured.cu/images/b/b4/RE_3_Remake_Portada_PS4.jpg', consola: 'PS4', precio: '8500'}

  export const getJuegosUno = new Promise((resolve)=>{
      //acciones asincronicas
      setTimeout(()=>{
          resolve(JuegosUno)
      },2000)
  })