import Chart from "../component/Chart";
import { percent, gauge } from "../utils/lib";
import { optionsChart } from "../utils/lib";

import "../style/Finance.css";

function Finance() {
  return (
    <div className="content content-charts">
      <header className="center">
        <h1>Finances Personnelles 💰</h1>
        <p>Gérez votre budget, suivez vos dépenses et économies</p>
      </header>
      <section className="information">
        <article className="four-parts">
          <p>Budget mensuel</p>
          <p>3500€</p>
          <p>Mars 2026</p>
        </article>
        <article className="four-parts">
          <p>Dépensé</p>
          <p>2847€</p>
          {gauge(2847, 3500)}
          <p>{`${percent(2847, 3500)}%`} du budget</p>
        </article>
        <article className="four-parts">
          <p>Restant</p>
          <p>653€</p>
          <p>✓ Dans le budget</p>
        </article>
        <article className="four-parts">
          <p>Économies</p>
          <p>12450€</p>
          {gauge(12450, 20000)}
          <p>Objectif: 20000€</p>
        </article>
      </section>
      <section className="chart budget">
        <h2>Dépenses par catégorie</h2>
        <article>
          <p>
            <span>Logement</span>
            <span>
              <span className="bold">1200€</span> / 1300€
            </span>
          </p>
          <div>
            {gauge(1200, 1300, "linear-gauge-color-1")}
            <p className="bold">{`${percent(1200, 1300)}%`}</p>
          </div>
          <p>
            <span>Santé</span>
            <span>
              <span className="bold">155€</span> / 200€
            </span>
          </p>
          <div>
            {gauge(155, 200, "linear-gauge-color-2")}
            <p className="bold">{`${percent(155, 200)}%`}</p>
          </div>
          <p>
            <span>Loisir</span>
            <span>
              <span className="bold">285€</span> / 300€
            </span>
          </p>
          <div>
            {gauge(285, 300, "linear-gauge-color-3")}
            <p className="bold">{`${percent(285, 300)}%`}</p>
          </div>
          <p>
            <span>Transport</span>
            <span>
              <span className="bold">320€</span> / 400€
            </span>
          </p>
          <div>
            {gauge(320, 400, "linear-gauge-color-4")}
            <p className="bold">{`${percent(320, 400)}%`}</p>
          </div>
          <p>
            <span>Alimentation</span>
            <span>
              <span className="bold">487€</span> / 500€
            </span>
          </p>
          <div>
            {gauge(487, 500, "linear-gauge-color-5")}
            <p className="bold">{`${percent(487, 500, true)}%`}</p>
          </div>
          <p>
            <span>Autres</span>
            <span>
              <span className="bold">400€</span> / 800€
            </span>
          </p>
          <div>
            {gauge(400, 800, "linear-gauge-color-6")}
            <p className="bold">{`${percent(400, 800, true)}%`}</p>
          </div>
        </article>
      </section>
      <section className="chart budget">
        <h2>Répartition du budget</h2>
        <article>
          <Chart options={optionsChart("budgetAllocation")} />
        </article>
      </section>
      <section className="chart income-expenses">
        <h2>Évolution revenus vs dépenses</h2>
        <article>
          <Chart options={optionsChart("ChangesInIncomeAndExpenses")} />
        </article>
      </section>

      <section className="chart points-consider">
        <h2>Points d'attention</h2>
        <ul>
          <li>Budget "Autres" dépassé de 50%</li>
          <li>Dépenses en hausse par rapport au mois dernier</li>
        </ul>
      </section>
      <section className="chart performances">
        <h2>Bonnes performances</h2>
        <ul>
          <li>Économies en progression: +12% ce mois</li>
          <li>Budget alimentation bien respecté</li>
        </ul>
      </section>
      <section className="ai-tip-of-the-month income-expenses">
        <h2>💡 Conseil IA du mois</h2>
        <article>
          En réduisant vos dépenses de loisirs de seulement 15€/semaine, vous
          pourriez économiser 780€ supplémentaires par an. Commencez par réviser
          vos abonnements inutilisés.
        </article>
        <button className="view-my-subscriptions bold">
          Voir mes abonnements
        </button>
        <button className="more-advice bold">Plus de conseils</button>
      </section>
    </div>
  );
}

export default Finance;
