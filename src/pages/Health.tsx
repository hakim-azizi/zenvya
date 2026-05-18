import Chart from '../component/Chart'
import type { AgChartOptions } from "ag-charts-community";
import {gauge} from '../utils/lib';
function Health() {
 
  const ChartsData: Record<string, Partial<AgChartOptions>> =  {
    physicalActivity : {
    title: {
      text: "Nombre de pas",
    },
            data: [
        { days: "lun", 'stepsTaken': 8234, objective: 10000 },
        { days: "mar", 'stepsTaken': 10567, objective: 10000 },
        { days: "mer", 'stepsTaken': 7892, objective: 10000 },
        { days: "jeu", 'stepsTaken': 12345, objective: 10000 },
        { days: "ven", 'stepsTaken': 9876, objective: 10000 },
        { days: "sam", 'stepsTaken': 11234, objective: 10000 },
        { days: "dim", 'stepsTaken': 6543, objective: 10000 },

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
    { days: "lun", hours: 7.5, },
    { days: "mar", hours: 6.2, },
    { days: "mer", hours: 8.1, },
    { days: "jeu", hours: 7, },
    { days: "ven", hours: 6.5, },
    { days: "sam", hours: 9, },
    { days: "dim", hours: 8.5, },
  ],
   series: [{
        type: "line",
        xKey: "days",
        yKey: "hours",
        yName: "Heures",
  }],
},

qualityOfSleep: {
    title: {
      text: "Sommeil",
    },
    data: [
    { days: "lun", quality: 85, },
    { days: "mar", quality: 65, },
    { days: "mer", quality: 92, },
    { days: "jeu", quality: 78, },
    { days: "ven", quality: 70, },
    { days: "sam", quality: 95, },
    { days: "dim", quality: 90, },
  ],
  series: [{
        type: "line",
        xKey: "days",
        yKey: "quality",
        yName: "Qualité %",
  }],
},

weightChange: {
    title: {
      text: "Poids",
    },
    data: [
    { week: "S1", weight: 75.2, },
    { week: "S2", weight: 74.8, },
    { week: "S3", weight: 74.5, },
    { week: "S4", weight: 74.2, },
  ],
  series: [{
        type: "line",
        xKey: "week",
        yKey: "weight",
        yName: "Poids (kg)",
  }],
},
};

const optionsChart = (chartData: keyof typeof ChartsData): AgChartOptions => {
  return ChartsData[chartData] as AgChartOptions;
}

  return (
    <div className='content'>
      <header  className='center'>
        <h1>Santé & Forme 💪</h1>
        <p>Suivez votre activité physique, sommeil et hydratation</p>
      </header>
      <section className='information'>
        <article className='four-parts'>
          <p>Pas aujourd'hui</p>
          <p className='bold'>6543</p>
          {gauge(10000,6543)}
          <p>Objectif: 10000</p>
        </article>
        <article className='four-parts'>
          <p>Sommeil moyen</p>
          <p className='bold'>7.5</p>
          {gauge(10000,6543)}
          <p>Mars 2026</p>
        </article>
        <article className='four-parts'>
          <p>Hydratation</p>
          <p className='bold'>2.1L</p>
          {gauge(2.5,2.1)}
          <p>Objectif: 2.5L/jour</p>
        </article>
        <article className='four-parts'>
          <p>Poids actuel</p>
          <p className='bold'>74.2 kg</p>
          <p>-1.0 kg ce mois</p>
          <p>Objectif: 73kg</p>
        </article>
      </section>
      <section className='chart income-expenses'>
      <h2>Activité physique - 7 derniers jours</h2>
      <article><Chart options={optionsChart('physicalActivity')}/></article>
    </section>
    <section className='chart budget'>
      <h2>Durée de sommeil</h2>
      <article><Chart options={optionsChart('sleepDuration')}/></article>
    </section>
    <section className='chart budget'>
      <h2>qualité de sommeil</h2>
      <article><Chart options={optionsChart('qualityOfSleep')}/></article>
    </section>
          <section className='chart income-expenses'>
      <h2>Évolution du poids</h2>
      <article><Chart options={optionsChart('weightChange')}/></article>
    </section>
    <section className='ai-tip-of-the-month income-expenses'>
      <h2>💡 Conseil santé du jour</h2>
        <article>
          Votre qualité de sommeil est meilleure les jours où vous faites de l'exercice avant 18h. Essayez de maintenir cette habitude pour optimiser votre récupération!
        </article>
    </section>
    </div>
  );
}
export default Health;
