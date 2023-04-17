import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { FC } from 'react';

interface BarProps {
  options: any
}

export const Bar: FC<BarProps> = ({ options }) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />
}