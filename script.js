var app = new Vue(
  {
  el: "#app_car",
  data: {
    carTabs: [
      {title:'ID'},
      {title:'Name'},
      {title:'Type'},
      {title:'Attribute'},
    ],
    carVoices: [
      {id:'1', text: 'ID', componente:"PK", attribute:'AUTO_INCREMENT',  },
      {id:'2', text: 'Modello', componente:"VARCHAR(40)", attribute:'NotNull' },
      {id:'3', text: 'Marca', componente:"VARCHAR(40)", attribute:'NotNull' },
      {id:'4', text: 'Anno di produzione', componente:"DATE", attribute:'NotNull' },
      {id:'5', text: 'Prezzo', componente:"VARCHAR(40)", attribute:'NotNull' },
      {id:'6', text: 'Posizione', componente:"VARCHAR(20)", attribute:'Null' },
      {id:'7', text: 'Km fatti', componente:"FLOAT(8,1)", attribute:'NotNull' },
      {id:'8', text: 'Motorizzazione', componente:"VARCHAR(10)", attribute:'NotNull' },
      {id:'9', text: 'Cilindrata', componente:"MEDIUMINT", attribute:'NotNull' },
      {id:'10', text: 'Cavalli', componente:"MEDIUMINT", attribute:'NotNull' },
      {id:'11', text: 'Colore esterno', componente:"VARCHAR(15)", attribute:'Null' },
      {id:'12', text: 'Tipo di vernice', componente:"VARCHAR(15)", attribute:'Null' },
      {id:'13', text: 'Marce', componente:"TINYINT", attribute:'NotNull' },
      {id:'14', text: 'Posti a sedere', componente:"TINYINT", attribute:'NotNull' },
      {id:'15', text: 'Classe di emissione', componente:"TINYINT", attribute:'NotNull' },
      {id:'16', text: 'Emissioni CO2', componente:"TINYINT", attribute:'NotNull' },
      {id:'17', text: 'Ruote Motrici', componente:"TINYINT", attribute:'NotNull' },
      {id:'18', text: 'Immagine', componente:"VARCHAR(255)", attribute:'Default(https://mclaren.scene7.com/is/image/mclaren/P16_Urban_Front34_FINAL_LC:crop-16x9?wid=1536&hei=864)' },
    ],
  },
  methods: {

  }
})
