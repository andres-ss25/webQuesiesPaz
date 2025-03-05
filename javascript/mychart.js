import { data } from '../data/data.js';

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, 'transparent');
  
Highcharts.chart('container', {

  chart: {
    height: '40%'
  },

  title: {
    text: "Para ti, ¿Qué es Paz?"
  },
  subtitle: {
    text: 'Pregunta realizada en Santiago de Cali - Colombia'
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
    pointFormat: 'El componente <b>{point.name}</b> para la Paz es: <b>{point.value}</b> % '
  }
});