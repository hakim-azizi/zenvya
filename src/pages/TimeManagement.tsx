import Chart from "../component/Chart";
import { gauge, percent, optionsChart } from "../utils/lib";

function TimeManagement() {
  return (
    <div className="content content-charts">
      <header className="center">
        <h1>Gestion du Temps ⏰</h1>
        <p>
          Analysez comment vous utilisez votre temps et optimisez votre
          productivité
        </p>
      </header>
      <section className="information">
        <article className="four-parts">
          <p>Temps total suivi</p>
          <p className="bold">168h</p>
          <p>Cette semaine</p>
        </article>
        <article className="four-parts">
          <p>Temps focus moyen</p>
          <p className="bold">5.2h</p>
          <p>{`${percent(2847, 3500)}% vs semaine dernière`}</p>
        </article>
        <article className="four-parts">
          <p>Distractions/jour</p>
          <p className="bold">2.1h</p>
          <p>À réduire</p>
        </article>
        <article className="four-parts">
          <p>Temps libre</p>
          <p className="bold">30h</p>
          <p>Cette semaine</p>
        </article>
      </section>
      <section className="chart budget">
        <h2>Répartition hebdomadaire</h2>
        <article>
          <Chart options={optionsChart("weeklyBreakdown")} />
        </article>
      </section>
      <section className="chart budget">
        <h2>Détails par catégorie</h2>
        <article>
          <p>
            <span>Travail</span>
            <span>
              <span className="bold">42h</span> / 168h
            </span>
          </p>
          <div>
            {gauge(42, 168, "linear-gauge-color-1")}
            <p className="bold">{`${percent(42, 168)}%`}</p>
          </div>
          <p>
            <span>Sommeil</span>
            <span>
              <span className="bold">52h</span> / 168h
            </span>
          </p>
          <div>
            {gauge(52, 168, "linear-gauge-color-2")}
            <p className="bold">{`${percent(52, 168)}%`}</p>
          </div>
          <p>
            <span>famille</span>
            <span>
              <span className="bold">18h</span> / 168h
            </span>
          </p>
          <div>
            {gauge(18, 168, "linear-gauge-color-3")}
            <p className="bold">{`${percent(18, 168)}%`}</p>
          </div>
          <p>
            <span>Sport</span>
            <span>
              <span className="bold">6h</span> / 168h
            </span>
          </p>
          <div>
            {gauge(6, 168, "linear-gauge-color-4")}
            <p className="bold">{`${percent(6, 168)}%`}</p>
          </div>
          <p>
            <span>Loisirs</span>
            <span>
              <span className="bold">14h</span> / 168h
            </span>
          </p>
          <div>
            {gauge(14, 168, "linear-gauge-color-5")}
            <p className="bold">{`${percent(14, 168, true)}%`}</p>
          </div>
          <p>
            <span>Tâches ménagères</span>
            <span>
              <span className="bold">8h</span> / 168h
            </span>
          </p>
          <div>
            {gauge(8, 168, "linear-gauge-color-6")}
            <p className="bold">{`${percent(8, 168, true)}%`}</p>
          </div>
          <p>
            <span>Réseaux sociaux</span>
            <span>
              <span className="bold">12h</span> / 168h
            </span>
          </p>
          <div>
            {gauge(12, 168, "linear-gauge-color-7")}
            <p className="bold">{`${percent(12, 168, true)}%`}</p>
          </div>
          <p>
            <span>Autres</span>
            <span>
              <span className="bold">16h</span> / 168h
            </span>
          </p>
          <div>
            {gauge(16, 168, "linear-gauge-color-8")}
            <p className="bold">{`${percent(16, 168, true)}%`}</p>
          </div>
        </article>
      </section>
      <section className="chart chart income-expenses">
        <h2>Temps focus vs distractions</h2>
        <article>
          <Chart options={optionsChart("TimeForFocusAndDistractions")} />
        </article>
      </section>
    </div>
  );
}
export default TimeManagement;
