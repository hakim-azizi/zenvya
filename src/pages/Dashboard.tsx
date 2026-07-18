import Information from "../components/Information";
import AIRecommendations from "../components/AIRecommendations.tsx";
import type {
  InformationType,
  RecommendationsType,
  ConsiderType,
} from "../type/Type.tsx";
import { percent, gauge } from "../utils/lib";

import "../style/Dashboard.css";

function Dashboard() {
  const date = new Date();

  const todaySDate = `${date.toLocaleDateString("fr-FR", { weekday: "long" })} ${date.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}`;
  const informationArray: InformationType[] = [
    {
      category: "Santé",
      value: `${9241}`,
      information: "pas aujourd'hui",
      percent: `${percent(9241, 10000, true)}%`,
      gauge: gauge(9241, 10000),
    },
    {
      category: "Finances",
      value: `${percent(81, 100, true)}%`,
      information: "budjet urilisé",
      percent: "",
      gauge: gauge(81, 100),
    },
    {
      category: "Temps",
      value: `${6.5}h`,
      information: "focus aujourd'hui",
      percent: `${percent(17.5, 24, true)}%`,
      gauge: gauge(17.5, 24),
    },
    {
      category: "Habitudes",
      value: `${percent(72, 100, true)}%`,
      information: "cette semaine",
      percent: "",
      gauge: gauge(72, 100),
    },
  ];

  const recommendationsArray: RecommendationsType[] = [
    {
      emojie: "😴",
      title: "Santé",
      subtitle: "Améliorer la qualité du sommeil",
      description:
        "Vos données montrent que votre sommeil est de meilleure qualité les jours où vous faites de l'exercice. Essayez d'augmenter votre activité physique en semaine.",
      result: "+15% qualité de sommeil estimée",
    },
    {
      emojie: "💰",
      title: "Finance",
      subtitle: "Optimiser vos dépenses de loisirs",
      description:
        "Vous êtes proche de votre budget loisirs. En réduisant de 15€/semaine, vous pourriez économiser 780€/an supplémentaires.",
      result: "+780€/an d'économies",
    },
    {
      emojie: "📱",
      title: "Productivité",
      subtitle: "Réduire le temps sur les réseaux sociaux",
      description:
        "Vous passez en moyenne 1h43/jour sur les réseaux sociaux, principalement entre 20h-22h. Ce temps pourrait être réalloué à vos objectifs.",
      result: "+7h/semaine disponibles",
    },
  ];

  const pointsToConsider: ConsiderType[] = [
    {
      point: "Sommeil en semaine",
    },
    {
      point: "Temps d'écran",
    },
  ];

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
            <span>{percent(7, 8)}</span>/100
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
        {informationArray.map((informationMap) => (
          <Information informationArray={informationMap} />
        ))}
      </section>
      <section className="information">
        <h2>Recommandations IA</h2>
        {recommendationsArray.map((recommendationsMap) => (
          <AIRecommendations recommendationsArray={recommendationsMap} />
        ))}
      </section>
      <section className="information">
        <h2>Points d'attention</h2>
        <article className="one-part">
          <p className="points-to-consider">
            {pointsToConsider.map((pointsToConsiderMap) => (
              <span className="border">⚠️ {pointsToConsiderMap["point"]}</span>
            ))}
          </p>
        </article>
      </section>
    </div>
  );
}
export default Dashboard;
