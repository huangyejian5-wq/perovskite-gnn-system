declare module 'react-plotly.js' {
  import { Component } from 'react';
  
  export interface PlotParams {
    data?: any[];
    layout?: any;
    config?: any;
    className?: string;
  }
  
  export default class Plot extends Component<PlotParams> {}
}