export const graphDefaultVisualOptions = {
  autoResize: true,
  height: '800px',
  width: '100%',
  layout: {
    randomSeed: 1,
  },

  physics: {
    enabled: true,
    barnesHut: {
      springLength: 150,
      springConstant: 0.02,
      avoidOverlap: 0.2,
    },
  },

  interaction: {
    zoomView: false,
    navigationButtons: true,
  },

  edges: {
    arrows: {
      to: {
        enabled: false,
      },
      from: {
        enabled: false,
      },
    },

    width: 1.5,
    color: {
      color: '#D3D3D3',
      highlight: '#797979',
      hover: '#797979',
      opacity: 1.0,
    },
  },

  nodes: {
    fixed: {
      x: false,
      y: false,
    },
    widthConstraint: {
      minimum: 100,
      maximum: 500,
    },
    heightConstraint: {
      minimum: 50,
    },

    shape: 'box',
    size: 10,
    borderWidth: 0.5,
    borderWidthSelected: 2,
    font: {
      color: '#adaeb9',
      size: 15,
      align: 'center',
      bold: {
        color: '#bbbdc0',
        size: 15,
        vadjust: 0,
        mod: 'bold',
      },
    },
    color: {
      background: 'white',
      border: 'black',
    },
  },
};
