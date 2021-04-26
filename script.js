var app = new Vue(
  {
  el: "#app_car",
  data: {
    carVoices: [
      {id:'1', text: 'ID', componente:"", attribute:'PK' },
      {id:'2', text: 'Modello', componente:"VARCHAR(40)", attribute:'NotNull' },
    ],
  }
})
