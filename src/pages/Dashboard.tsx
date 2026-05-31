import { percent, gauge } from "../utils/lib";

import "../style/Dashboard.css";

function Dashboard() {
  const date = new Date();

  const formatted = `${date.toLocaleDateString("fr-FR", { weekday: "long" })} ${date.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}`;

  return (
    <div className="content content-dashboard">
      <header className="center">
        <h1>Dashboard</h1>
        <h2>Bonjour! 👋</h2>
        <p>Voici votre aperçu personnel pour aujourd'hui, {formatted}.</p>
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
        <article className="four-parts">
          <p>Santé</p>
          <p>
            <span className="bold">9241</span>
            <br />
            pas aujourd'hui
          </p>
          {gauge(9241, 10000)}
        </article>
        <article className="four-parts">
          <p>Finance</p>
          <p>
            <span className="bold">{`${percent(2847, 3500)} %`}</span>
            <br />
            budget utilisé
          </p>
          {gauge(2847, 3500)}
        </article>
        <article className="four-parts">
          <p>Temps</p>
          <p>
            <span className="bold">6.5h</span>
            <br />
            focus aujourd'hui
          </p>
          {gauge(6.5, 9)}
        </article>
        <article className="four-parts">
          <p>Habitudes</p>
          <p>
            <span className="bold">{`${percent(25, 35)} %`}</span>
            <br />
            cette semaine
          </p>
          {gauge(25, 35)}
        </article>
      </section>
      <section className="information">
        <h2>Recommandations IA</h2>
        <article className="three-parts">
          <p>
            <span>😴</span>
            <span className="border">Santé</span>
          </p>
          <h3>Améliorer la qualité du sommeil</h3>
          <p>
            Vos données montrent que votre sommeil est de meilleure qualité les
            jours où vous faites de l'exercice. Essayez d'augmenter votre
            activité physique en semaine.
          </p>
          <p className="border">
            Impact estimé:
            <br />
            +15% qualité de sommeil estimée
          </p>
        </article>
        <article className="three-parts">
          <p>
            <span>💰</span>
            <span className="border">Finance</span>
          </p>
          <h3>Optimiser vos dépenses de loisirs</h3>
          <p>
            Vous êtes proche de votre budget loisirs. En réduisant de
            15€/semaine, vous pourriez économiser 780€/an supplémentaires.
          </p>
          <p className="border">
            Impact estimé:
            <br />
            +780€/an d'économies
          </p>
        </article>
        <article className="three-parts">
          <p>
            <span>📱</span>
            <span className="border">Productivité</span>
          </p>
          <h3>Réduire le temps sur les réseaux sociaux</h3>
          <p>
            Vous passez en moyenne 1h43/jour sur les réseaux sociaux,
            principalement entre 20h-22h. Ce temps pourrait être réalloué à vos
            objectifs.
          </p>
          <p className="border">
            Impact estimé:
            <br />
            +7h/semaine disponibles
          </p>
        </article>
      </section>
      <section className="information">
        <h2>Points d'attention</h2>
        <article className="one-part">
          <p>
            <span className="border">⚠️ Sommeil en semaine</span>{" "}
            <span className="border">⚠️ Temps d'écran</span>
          </p>
        </article>
      </section>
    </div>
  );
}
export default Dashboard;
