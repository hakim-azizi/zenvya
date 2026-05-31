import type { AgChartOptions } from "ag-charts-community";

export const ChartsData: Record<string, Partial<AgChartOptions>> = {
  weeklyBreakdown: {
    data: [
      { asset: "travail: 42h", amount: 42 },
      { asset: "Sommeil: 52h", amount: 52 },
      { asset: "Famille 18h", amount: 18 },
      { asset: "Sport 6h", amount: 6 },
      { asset: "Loisir: 14h", amount: 14 },
      { asset: "Tâche menagère: 8h", amount: 8 },
      { asset: "Résaux sociaux: 12h", amount: 12 },
      { asset: "Autres: 16h", amount: 16 },
    ],
    title: {
      text: "",
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
      },
    ],
  },

  TimeForFocusAndDistractions: {
    // Data: Data to be displayed in the chart
    data: [
      { day: "Lun", focus: 6.5, distractions: 2.5 },
      { day: "Mar", focus: 7, distractions: 2 },
      { day: "Mer", focus: 5.5, distractions: 3.5 },
      { day: "Jeu", focus: 6.8, distractions: 2.2 },
      { day: "Ven", focus: 5, distractions: 3 },
      { day: "Sam", focus: 3, distractions: 1 },
      { day: "Dim", focus: 2.5, distractions: 0.5 },
    ],
    // Series: Defines which chart type and data to use
    series: [
      {
        type: "bar",
        xKey: "day",
        yKey: "focus",
        yName: "Temps focus",
        fill: "#10B981",
        cornerRadius: 8,
      },
      {
        type: "bar",
        xKey: "day",
        yKey: "distractions",
        fill: "#EF4444",
        cornerRadius: 8,
      },
    ],
    axes: {
      bottom: {
        type: "category",
      },
      left: {
        type: "number",
        max: 8,
      },
    },
  },

  ChangesInIncomeAndExpenses: {
    // Data: Data to be displayed in the chart
    data: [
      { month: "Jan", avgTemp: 2.3, revenus: 3800, dépenses: 2950 },
      { month: "Fevr", avgTemp: 6.3, revenus: 3800, dépenses: 3120 },
      { month: "Mars", avgTemp: 1, revenus: 4200, dépenses: 2847 },
    ],
    // Series: Defines which chart type and data to use
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "revenus",
        fill: "#10B981",
        cornerRadius: 8,
      },
      {
        type: "bar",
        xKey: "month",
        yKey: "dépenses",
        fill: "#EF4444",
        cornerRadius: 8,
      },
    ],
    axes: {
      bottom: {
        type: "category",
      },
      left: {
        type: "number",
        max: 6000,
      },
    },
  },

  budgetAllocation: {
    data: [
      { asset: "Logement 42%", amount: 42 },
      { asset: "Santé 5%", amount: 5 },
      { asset: "Loisirs 10%", amount: 10 },
      { asset: "Transport 11%", amount: 11 },
      { asset: "Alimentation 17%", amount: 17 },
      { asset: "Autres 14%", amount: 14 },
    ],
    title: {
      text: "",
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
      },
    ],
  },
  physicalActivity: {
    title: {
      text: "Nombre de pas",
    },
    data: [
      { days: "lun", stepsTaken: 8234, objective: 10000 },
      { days: "mar", stepsTaken: 10567, objective: 10000 },
      { days: "mer", stepsTaken: 7892, objective: 10000 },
      { days: "jeu", stepsTaken: 12345, objective: 10000 },
      { days: "ven", stepsTaken: 9876, objective: 10000 },
      { days: "sam", stepsTaken: 11234, objective: 10000 },
      { days: "dim", stepsTaken: 6543, objective: 10000 },
    ],
    // Series: Defines which chart type and data to use
    series: [
      {
        type: "bar",
        xKey: "days",
        yKey: "stepsTaken",
        yName: "Pas éffectués",
        fill: "#2910b9",
        cornerRadius: 8,
      },
      {
        type: "bar",
        xKey: "days",
        yKey: "objective",
        yName: "objectif",
        fill: "#10B981",
        cornerRadius: 8,
      },
    ],
    axes: {
      bottom: {
        type: "category",
      },
      left: {
        type: "number",
        max: 15000,
      },
    },
  },

  sleepDuration: {
    title: {
      text: "Sommeil",
    },
    data: [
      { days: "lun", hours: 7.5 },
      { days: "mar", hours: 6.2 },
      { days: "mer", hours: 8.1 },
      { days: "jeu", hours: 7 },
      { days: "ven", hours: 6.5 },
      { days: "sam", hours: 9 },
      { days: "dim", hours: 8.5 },
    ],
    series: [
      {
        type: "line",
        xKey: "days",
        yKey: "hours",
        yName: "Heures",
      },
    ],
  },

  qualityOfSleep: {
    title: {
      text: "Sommeil",
    },
    data: [
      { days: "lun", quality: 85 },
      { days: "mar", quality: 65 },
      { days: "mer", quality: 92 },
      { days: "jeu", quality: 78 },
      { days: "ven", quality: 70 },
      { days: "sam", quality: 95 },
      { days: "dim", quality: 90 },
    ],
    series: [
      {
        type: "line",
        xKey: "days",
        yKey: "quality",
        yName: "Qualité %",
      },
    ],
  },

  weightChange: {
    title: {
      text: "Poids",
    },
    data: [
      { week: "S1", weight: 75.2 },
      { week: "S2", weight: 74.8 },
      { week: "S3", weight: 74.5 },
      { week: "S4", weight: 74.2 },
    ],
    series: [
      {
        type: "line",
        xKey: "week",
        yKey: "weight",
        yName: "Poids (kg)",
      },
    ],
  },
};
