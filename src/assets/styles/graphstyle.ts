export const graphDefaultVisualOptions = {
  autoResize: true,
  height: '600px',
  layout: {
    randomSeed: 2,
    improvedLayout: true,
  },
  interaction: {
    zoomView: false,
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
    width: 1,
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
      minimum: 1,
      maximum: 200,
    },
    shape: 'box',
    size: 10,
    borderWidth: 1.5,
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
