import Chart from "../components/Chart";
import { optionsChart } from "../utils/lib";
import { gauge } from "../utils/lib";

function Health() {
  return (
    <div className="content content-charts">
      <header className="center">
        <h1>Santé & Forme 💪</h1>
        <p>Suivez votre activité physique, sommeil et hydratation</p>
      </header>
      <section className="information">
        <article className="four-parts">
          <p>Pas aujourd'hui</p>
          <p className="bold">6543</p>
          {gauge(10000, 6543)}
          <p>Objectif: 10000</p>
        </article>
        <article className="four-parts">
          <p>Sommeil moyen</p>
          <p className="bold">7.5</p>
          {gauge(10000, 6543)}
          <p>Mars 2026</p>
        </article>
        <article className="four-parts">
          <p>Hydratation</p>
          <p className="bold">2.1L</p>
          {gauge(2.5, 2.1)}
          <p>Objectif: 2.5L/jour</p>
        </article>
        <article className="four-parts">
          <p>Poids actuel</p>
          <p className="bold">74.2 kg</p>
          <p>-1.0 kg ce mois</p>
          <p>Objectif: 73kg</p>
        </article>
      </section>
      <section className="chart income-expenses">
        <h2>Activité physique - 7 derniers jours</h2>
        <article>
          <Chart options={optionsChart("physicalActivity")} />
        </article>
      </section>
      <section className="chart budget">
        <h2>Durée de sommeil</h2>
        <article>
          <Chart options={optionsChart("sleepDuration")} />
        </article>
      </section>
      <section className="chart budget">
        <h2>qualité de sommeil</h2>
        <article>
          <Chart options={optionsChart("qualityOfSleep")} />
        </article>
      </section>
      <section className="chart income-expenses">
        <h2>Évolution du poids</h2>
        <article>
          <Chart options={optionsChart("weightChange")} />
        </article>
      </section>
      <section className="ai-tip-of-the-month income-expenses">
        <h2>💡 Conseil santé du jour</h2>
        <article>
          Votre qualité de sommeil est meilleure les jours où vous faites de
          l'exercice avant 18h. Essayez de maintenir cette habitude pour
          optimiser votre récupération!
        </article>
      </section>
    </div>
  );
}
export default Health;
