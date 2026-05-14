import {useState} from 'react';
import Chart from '../component/Chart';
import {percent} from '../utils/lib';
import type { AgChartOptions } from "ag-charts-community";

import '../style/Finance.css'

function Finance() {

  const [optionsPie, setOptionsPie] = useState<AgChartOptions>({
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
  })
 
  const [optionsBar, setOptionsBar] = useState<AgChartOptions>({
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
}
  )

  return (<div className='content content-finances'>
    <header>
      <h1>Finances Personnelles 💰</h1>
      <p>Gérez votre budget, suivez vos dépenses et économies</p>
    </header>
    <section className='information'>
      <article className='four-parts'>
        <p>Budget mensuel</p>
        <p>3500€</p>
        <p>Mars 2026</p>
      </article>
      <article className='four-parts'>
        <p>Dépensé</p>
        <p>2847€</p>
        <aside className="linear-gauge">
            <span className='gauge-default' style={{width:`${percent(2847,3500,true)}%`}}>&nbsp;</span>
        </aside>
        <p>{`${percent(2847,3500)}%`} du budget</p>
      </article>
      <article className='four-parts'>
        <p>Restant</p>
        <p>653€</p>
        <p>✓ Dans le budget</p>
      </article>
      <article className='four-parts'>
        <p>Économies</p>
        <p>12450€</p>
        <aside className="linear-gauge">
            <span className='gauge-default' style={{width:`${percent(12450,20000,true)}%`}}>&nbsp;</span>
        </aside>
        <p>Objectif: 20000€</p>
      </article>
    </section>
    <section className='chart budget'>
      <h2>Dépenses par catégorie</h2>
      <article>
        <p><span>Logement</span><span><span className='bold'>1200€</span> / 1300€</span></p>
        <div>
        <aside className="linear-gauge">
          <span className='housing' style={{width:`${percent(1200,1300,true)}%`}}>&nbsp;</span>
        </aside>
        <p className='bold'>
          {`${percent(1200,1300)}%`}
        </p>
        </div>
        <p><span>Santé</span><span><span className='bold'>155€</span> / 200€</span></p>
        <div>
          <aside className="linear-gauge">
            <span className='health' style={{width:`${percent(155,200,true)}%`}}>&nbsp;</span>
          </aside>
          <p className='bold'>
            {`${percent(155,200)}%`}
          </p>
        </div>
        <p><span>Loisir</span><span><span className='bold'>285€</span> / 300€</span></p>
        <div>
          <aside className="linear-gauge">
            <span className='Hobbies' style={{width:`${percent(285,300,true)}%`}}>&nbsp;</span>
          </aside>
          <p className='bold'>
            {`${percent(285,300)}%`}
          </p>
        </div>
        <p><span>Transport</span><span><span className='bold'>320€</span> / 400€</span></p>
        <div>
          <aside className="linear-gauge">
            <span className='transportation' style={{width:`${percent(320,400,true)}%`}}>&nbsp;</span>
          </aside>
          <p className='bold'>
            {`${percent(320,400)}%`}
          </p>
        </div>
        <p><span>Alimentation</span><span><span className='bold'>487€</span> / 500€</span></p>
        <div>
          <aside className="linear-gauge">
            <span className='food' style={{width:`${percent(487,500,true)}%`}}>&nbsp;</span>
          </aside>
          <p className='bold'>
            {`${percent(487,500,true)}%`}
          </p>
        </div>
        <p><span>Autres</span><span><span className='bold'>400€</span> / 800€</span></p>
        <div>
          <aside className="linear-gauge">
            <span className='others' style={{width:`${percent(400,800,true)}%`}}>&nbsp;</span>
          </aside>
          <p className='bold'>
            {`${percent(400,800,true)}%`}
          </p>
        </div>
      </article>
    </section>
        <section className='chart budget'>
      <h2>Répartition du budget</h2>
      <article><Chart options={optionsPie}/></article>
    </section>
    <section className='chart income-expenses'>
      <h2>Évolution revenus vs dépenses</h2>
      <article><Chart options={optionsBar}/></article>
    </section>

    <section className='chart points-consider'>
      <h2>Points d'attention</h2>
      <ul>
        <li>Budget "Autres" dépassé de 50%</li>
        <li>Dépenses en hausse par rapport au mois dernier</li>
      </ul>
    </section>
    <section className='chart performances'>
      <h2>Bonnes performances</h2>
      <ul>
        <li>Économies en progression: +12% ce mois</li>
        <li>Budget alimentation bien respecté</li>
      </ul>
    </section>
        <section className='ai-tip-of-the-month income-expenses'>
          <h2>💡 Conseil IA du mois</h2>
          <article>En réduisant vos dépenses de loisirs de seulement 15€/semaine, vous pourriez économiser 780€ supplémentaires par an. Commencez par réviser vos abonnements inutilisés.</article>
          <button className='view-my-subscriptions bold'>Voir mes abonnements</button>
          <button className='more-advice bold'>Plus de conseils</button>
    </section>
  </div>
  );
}

export default Finance;
