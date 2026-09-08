import { useContext } from "react";
import { ContentContext } from "../context/ContentContext.tsx";
import Information from "../components/Information";
import AIRecommendations from "../components/AIRecommendations.tsx";
import { percent } from "../utils/Lib.tsx";

import "../style/Dashboard.css";

function Dashboard() {
  const content = useContext(ContentContext);

  if (!content) {
    return <img src="../images/loader.gif" />;
  }
  const contentInformation = content.information.dashboard;
  const contentRecommendation = content.recommendations.dashboard;
  const pointsToConsider = content.pointsToConsider.dashboard;
  const date = new Date();

  const todaySDate = `${date.toLocaleDateString("fr-FR", { weekday: "long" })} ${date.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}`;

  return (
    <div className="content content-dashboard">
      <header className="center">
        <h1>Dashboard</h1>
        <h2>Bonjour! 👋</h2>
        <p>Voici votre aperçu personnel pour aujourd'hui, {todaySDate}.</p>
      </header>
      <section className="introduction">
        <article>
          Score de Bien-être IA
          <p className="score">
            <span>{percent(7, 8)}</span> %
            <br />
            Excellent progrès cette semaine! Continuez comme ça.
          </p>
          <p className="result">🏆 Streak de 15 jours - Hydratation</p>
        </article>
        <article className="illustration">
          <p>🎯</p>
        </article>
      </section>
      <section className="information">
        {contentInformation.map((informationMap) => (
          <Information
            key={informationMap.category}
            informationArray={informationMap}
          />
        ))}
      </section>
      <section className="information">
        <h2>Recommandations IA</h2>
        {contentRecommendation.map((recommendationsMap) => (
          <AIRecommendations
            key={recommendationsMap.title}
            recommendationsArray={recommendationsMap}
          />
        ))}
      </section>
      <section className="information">
        <h2>Points d'attention</h2>
        <article className="one-part">
          <p className="points-to-consider">
            {pointsToConsider.map((pointsToConsiderMap) => (
              <span key={pointsToConsiderMap["point"]} className="border">
                ⚠️ {pointsToConsiderMap["point"]}
              </span>
            ))}
          </p>
        </article>
      </section>
    </div>
  );
}
export default Dashboard;
