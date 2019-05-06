var data = [{
    id: '0.0',
    parent: '',
    name: 'Sí es Paz'
  }, {
    id: '1.1',
    parent: '0.0',
    name: 'Individual'
  }, {
    id: '1.2',
    parent: '0.0',
    name: 'Imaginario'
  }, {
    id: '1.3',
    parent: '0.0',
    name: 'Colectivo'
  }, {
    id: '1.4',
    parent: '0.0',
    name: 'Lugar'
  }, 
  
  /* Individual */
  {
    id: '2.1',
    parent: '1.1',
    name: 'Libertad',
    value: 2.7
  },
  {
    id: '2.2',
    parent: '1.1',
    name: 'Espiritualidad',
    value: 2.0
  },
  {
    id: '2.3',
    parent: '1.1',
    name: 'Dios',
    value: 5.4
  },
  {
    id: '2.4',
    parent: '1.1',
    name: 'Trabajo/Empleo',
    value: 2.3
  },
  {
    id: '2.5',
    parent: '1.1',
    name: 'Hogar',
    value: 5.4
  }, 
  {
    id: '2.6',
    parent: '1.1',
    name: 'Tranquilidad',
    value: 10.4
  },
  {
    id: '2.7',
    parent: '1.1',
    name: 'Familia',
    value: 13.0
  },
  /* Imaginario */
  {
    id: '2.8',
    parent: '1.2',
    name: 'Sueños',
    value: 2.4
  },
  {
    id: '2.9',
    parent: '1.2',
    name: 'No discriminación',
    value: 6.3
  },
  {
    id: '2.10',
    parent: '1.2',
    name: 'Viajar',
    value: 1.5
  },
  {
    id: '2.11',
    parent: '1.2',
    name: 'Recuerdos',
    value: 1.1
  },
  {
    id: '2.12',
    parent: '1.2',
    name: 'No Violencia',
    value: 6.4
  },
  /* Colectivo */
  {
    id: '2.13',
    parent: '1.3',
    name: 'Vecinos',
    value: 0.8
  },
  {
    id: '2.14',
    parent: '1.3',
    name: 'Sistema de salud',
    value: 1.3
  },
  {
    id: '2.15',
    parent: '1.3',
    name: 'Deporte',
    value: 1.8
  },
  {
    id: '2.16',
    parent: '1.3',
    name: 'Acceso a educación',
    value: 3.0
  },
  {
    id: '2.17',
    parent: '1.3',
    name: 'Amigos',
    value: 3.9
  },
  {
    id: '2.18',
    parent: '1.3',
    name: 'Tradiciones Familiares',
    value: 2.2
  },
  {
    id: '2.19',
    parent: '1.3',
    name: 'Arte/Música/Cultura',
    value: 3.8
  },
  {
    id: '2.20',
    parent: '1.3',
    name: 'Recrusos naturales',
    value: 8.2
  },
  /* Lugar */
  {
    id: '2.21',
    parent: '1.4',
    name: 'Vía pública',
    value: 1.1
  },
  {
    id: '2.22',
    parent: '1.4',
    name: 'Campo/Zona rural',
    value: 1.8
  },
  {
    id: '2.23',
    parent: '1.4',
    name: 'Territorio de origen',
    value: 1.4
  },
  {
    id: '2.24',
    parent: '1.4',
    name: 'Espacios culturales',
    value: 0.7
  },
  {
    id: '2.25',
    parent: '1.4',
    name: 'Paeques/Zonas verdes',
    value: 4.3
  },
  {
    id: '2.26',
    parent: '1.4',
    name: 'Vivienda/Casa',
    value: 2.8
  },
  {
    id: '2.27',
    parent: '1.4',
    name: 'Canchas deportivas',
    value: 1.0
  },
  {
    id: '2.28',
    parent: '1.4',
    name: 'Centros educativos',
    value: 2.8
  },
  ];
  
  // Splice in transparent for the center circle
  Highcharts.getOptions().colors.splice(0, 0, 'transparent');
  
  
  Highcharts.chart('container', {
  
    chart: {
      height: '50%'
    },
  
    title: {
      text: 'Que sí es Paz para Santiago de Cali'
    },
    subtitle: {
      text: 'Source <href="https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)">Wikipedia</a>'
    },
    series: [{
      type: "sunburst",
      data: data,
      allowDrillToNode: true,
      cursor: 'pointer',
      dataLabels: {
        format: '{point.name}',
        filter: {
          property: 'innerArcLength',
          operator: '>',
          value: 16
        }
      },
      levels: [{
        level: 1,
        levelIsConstant: false,
        dataLabels: {
          filter: {
            property: 'outerArcLength',
            operator: '>',
            value: 64
          }
        }
      }, {
        level: 2,
        colorByPoint: true
      },
      {
        level: 3,
        colorVariation: {
          key: 'brightness',
          to: -0.5
        }
      }, {
        level: 4,
        colorVariation: {
          key: 'brightness',
          to: 0.5
        }
      }]
  
    }],
    tooltip: {
      headerFormat: "",
      pointFormat: 'El componente <b>{point.name}</b> para la Paz es <b>{point.value}</b>'
    }
  });