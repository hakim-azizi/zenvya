import { AgCharts } from "ag-charts-react";
import { AllCommunityModule, ModuleRegistry, } from "ag-charts-community";
import type { AgChartOptions } from "ag-charts-community";

ModuleRegistry.registerModules([AllCommunityModule]);

type Props = {
  options: AgChartOptions;
};

const Chart = ({ options }: Props) => {

  return <AgCharts options={options} />;
  
};

export default Chart;
