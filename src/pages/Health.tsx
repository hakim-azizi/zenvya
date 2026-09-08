import { useContext } from "react";
import { ContentContext } from "../context/ContentContext.tsx";
import Information from "../components/Information";
import Chart from "../components/Chart";
import { optionsChart } from "../utils/Lib";

function Health() {
  const content = useContext(ContentContext);

  if (!content) {
    return <img src="../images/loader.gif" />;
  }
  const contentInformation = content.information.health;
  return (
    <div className="content content-charts">
      <header className="center">
        <h1>Santé & Forme 💪</h1>
        <p>Suivez votre activité physique, sommeil et hydratation</p>
      </header>
      <section className="information">
        {contentInformation.map((informationMap) => (
          <Information
            key={informationMap.category}
            informationArray={informationMap}
          />
        ))}
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
