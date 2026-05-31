import { AgCharts } from "ag-charts-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  LegendModule,
  CategoryAxisModule,
  LineSeriesModule,
  NumberAxisModule,
} from "ag-charts-community";
import type { AgChartOptions } from "ag-charts-community";

ModuleRegistry.registerModules([
  AllCommunityModule,
  CategoryAxisModule,
  LegendModule,
  LineSeriesModule,
  NumberAxisModule,
]);

type Props = {
  options: AgChartOptions;
};

const Chart = ({ options }: Props) => {
  return <AgCharts options={options} />;
};

export default Chart;
