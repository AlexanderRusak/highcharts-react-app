import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { PieChartOptions } from '../../interfaces/charts';


interface PieProps {
  options: PieChartOptions,
}


export const Pie: React.FC<PieProps> = ({ options }) => {


  return <HighchartsReact
    containerProps={{ className: 'pie' }}
    highcharts={Highcharts} options={options} />;
};