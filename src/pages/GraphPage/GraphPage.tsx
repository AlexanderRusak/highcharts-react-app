import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { NavBar } from '../../components/NavBar/NavBar';


const barData = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Bar Chart',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yAxis: {
    title: {
      text: 'Amount',
    },
  },
  series: [
    {
      name: 'Sales',
      data: [10, 20, 30, 40, 50, 60],
    },
  ],
};


const pieData = {
  chart: {
    type: 'pie',
  },
  title: {
    text: 'Pie Chart',
  },
  series: [
    {
      name: 'Sales',
      data: [
        ['Jan', 10],
        ['Feb', 20],
        ['Mar', 30],
        ['Apr', 40],
        ['May', 50],
        ['Jun', 60],
      ],
    },
  ],
};


const lineData = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'Line Chart',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yAxis: {
    title: {
      text: 'Amount',
    },
  },
  series: [
    {
      name: 'Sales',
      data: [10, 20, 30, 40, 50, 60],
    },
  ],
};

const areaData = {
  chart: {
    type: 'area',
  },
  title: {
    text: 'Area Chart',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yAxis: {
    title: {
      text: 'Amount',
    },
  },
  series: [
    {
      name: 'Sales',
      data: [10, 20, 30, 40, 50, 60],
    },
  ],
};

export const GraphPage = () => {
  return (
    <>
      <NavBar />
      <div>
        <HighchartsReact highcharts={Highcharts} options={barData} />
        <HighchartsReact highcharts={Highcharts} options={pieData} />
        <HighchartsReact highcharts={Highcharts} options={lineData} />
        <HighchartsReact highcharts={Highcharts} options={areaData} />
      </div>
    </>
  );
};


