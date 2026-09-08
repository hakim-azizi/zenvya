import { useContext } from "react";
import { ContentContext } from "../context/ContentContext.tsx";
import Information from "../components/Information";
import { gauge, percent } from "../utils/Lib";

import "../style/Habits.css";

function Habits() {
  const content = useContext(ContentContext);

  if (!content) {
    return <img src="../images/loader.gif" />;
  }
  const contentInformation = content.information.habits;
  return (
    <div className="content content-charts">
      <header className="center">
        <h1>Suivi des Habitudes 🎯</h1>
        <p>Construisez de bonnes habitudes et suivez vos progrès quotidiens</p>
      </header>
      <section className="information">
        {contentInformation.map((informationMap) => (
          <Information
            key={informationMap.category}
            informationArray={informationMap}
          />
        ))}
      </section>
      <section className="chart budget income-expenses habits">
        <h2>Mes habitudes</h2>
        <article className="border-article">
          <h3>🧘‍♀️ Méditation</h3>
          <p>Quotidien</p>
          <div style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
            <p style={{ width: "100%", marginBottom: 0 }}>Cette semaine:</p>
            <div className="days">
              <p className="center" style={{ marginTop: 0 }}>
                L<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                M<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                M<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                J<br />❌
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                V<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                S<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                D<br />✅
              </p>
            </div>
          </div>
          <div>
            {gauge(6, 7)}
            {`${percent(6, 7)}%`}
          </div>
        </article>
        <article className="border-article">
          <h3>📚 Lecture</h3>
          <p>30 min/jour</p>
          <div style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
            <p style={{ width: "100%", marginBottom: 0 }}>Cette semaine:</p>
            <div className="days">
              <p className="center" style={{ marginTop: 0 }}>
                L<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                M<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                M<br />❌
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                J<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                V<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                S<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                D<br />❌
              </p>
            </div>
          </div>
          <div>
            {gauge(5, 7)}
            {`${percent(5, 7)}%`}
          </div>
        </article>
        <article className="border-article">
          <h3>💪 Exercice</h3>
          <p>5x/semaine</p>
          <div style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
            <p style={{ width: "100%", marginBottom: 0 }}>Cette semaine:</p>
            <div className="days">
              <p className="center" style={{ marginTop: 0 }}>
                L<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                M<br />❌
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                M<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                J<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                V<br />❌
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                S<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                D<br />✅
              </p>
            </div>
          </div>
          <div>
            {gauge(5, 5)}
            {`${percent(5, 5)}%`}
          </div>
        </article>
        <article className="border-article">
          <h3>💧 Boire 2L d'eau</h3>
          <p>Quotidien</p>
          <div style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
            <p style={{ width: "100%", marginBottom: 0 }}>Cette semaine:</p>
            <div className="days">
              <p className="center" style={{ marginTop: 0 }}>
                L<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                M<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                M<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                J<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                V<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                S<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                D<br />✅
              </p>
            </div>
          </div>
          <div>
            {gauge(7, 7)}
            {`${percent(7, 7)}%`}
          </div>
        </article>
        <article className="border-article">
          <h3>✨ Gratitude</h3>
          <p>Quotidien</p>
          <div style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
            <p style={{ width: "100%", marginBottom: 0 }}>Cette semaine:</p>
            <div className="days">
              <p className="center" style={{ marginTop: 0 }}>
                L<br />❌
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                M<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                M<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                J<br />✅
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                V<br />❌
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                S<br />❌
              </p>
              <p className="center" style={{ marginTop: 0 }}>
                D<br />✅
              </p>
            </div>
          </div>
          <div>
            {gauge(4, 7)}
            {`${percent(4, 7)}%`}
          </div>
        </article>
      </section>
      <section className="new-habits center">
        <h3>Ajouter une nouvelle habitude</h3>
        <p>
          Définissez un nouvel objectif et commencez à tracker votre progression
        </p>
        <button className="bold habits-button">+ Créer une habitude</button>
      </section>
      <section className="recent-achievements chart">
        <h3>Réalisations récentes</h3>
      </section>
      <section className="ai-consultancy chart">
        <h3>💡 Conseil IA d'habitudes</h3>
        <p>
          Vos données montrent que vous êtes très régulier avec la méditation le
          matin. Pour maximiser les bénéfices, essayez de méditer à la même
          heure chaque jour (idéalement à 7h30).
        </p>
        <article className="">
          <p>Nouvelles habitudes recommandées:</p>
          <ul style={{ listStyle: "none" }}>
            <li>🌱 Journal de gratitude (3 min/jour)</li>
            <li>🚶 Marche quotidienne (20 min)</li>
          </ul>
        </article>
        <button className="bold habits-button">Ajouter ces habitudes</button>
      </section>
    </div>
  );
}
export default Habits;
