let Home ={
  name: 'home',
  model:{
    home:[],
  },
  view(model){
   return ` this is home ${model.home.length}`
  },
  controller(){

  }
}

export default Home