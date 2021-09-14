


//array de juegos

export const juegosArray = [
    { id: 1, nombre:'Uncharted 4', portada:'https://as.com/meristation/imagenes/2015/06/03/noticia/1433346420_888162_1532451997_sumario_normal.jpg', consola: 'PS4', precio: '5400'},
    { id: 2, nombre:'Destiny', portada:'https://i.blogs.es/24080b/destiny-ps4/450_1000.jpg', consola: 'PS4', precio: '4500'},
    { id: 3, nombre:'Modern-Warfare', portada:'https://uvejuegos.com/img/caratulas/62807/Call-of-Duty-Modern-Warfare-PS4-EU.jpg', consola: 'PS4', precio: '6000'},
    { id: 4, nombre:'Resident Evil 3', portada:'https://www.ecured.cu/images/b/b4/RE_3_Remake_Portada_PS4.jpg', consola: 'PS4', precio: '8500'}
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