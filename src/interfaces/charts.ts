import { CSSObject } from 'highcharts';

export interface PieChartOptions {
  chart: {
    type: 'pie';
    width?: number | string;
    height?: number | string;
    style?: CSSObject;
  };
  title: {
    text: string;
    style?: CSSObject;
  };
  tooltip?: {
    pointFormat: string;
  };
  plotOptions: {
    pie: {
      allowPointSelect?: boolean;
      cursor?: string;
      dataLabels?: {
        enabled?: boolean;
        format?: string;
        style?: CSSObject;
      };
    };
  };
  series: {
    name: string;
    data: {
      name: string;
      y: number;
      color?: string;
    }[];
    colorByPoint?: boolean;
  }[];
}


export interface BarChartOptions {
  chart: {
    type: 'bar' | 'column';
    height?: string;
  };
  title?: {
    text: string;
    style?: {
      fontSize?: string;
      fontWeight?: string;
    }
  };
  xAxis: {
    categories: string[];
    labels?: {
      style?: {
        fontSize?: string;
      }
    }
  };
  yAxis: {
    title: {
      text: string;
      style?: {
        fontSize?: string;
      }
    };
    labels?: {
      style?: {
        fontSize?: string;
      }
    }
  };
  series: {
    name: string;
    data: number[];
  }[];
  responsive?: {
    rules?: {
      condition: {
        maxWidth: number;
      },
      chartOptions: BarChartOptions;
    }[]
  };
}
