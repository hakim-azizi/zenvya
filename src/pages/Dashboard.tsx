import "../style/Dashboard.css"
function Dashboard() {
  return (
    <div className="content content-dashboard">
      <header>
        <h1>Dashboard</h1>
        <h2>Bonjour! 👋</h2>
        <p>Voici votre aperçu personnel pour aujourd'hui, Lundi 6 Avril 2026</p>
      </header>
      <section className="introduction">
        <article>
          Score de Bien-être IA
          <p className="score"><span>87</span>/100</p>
          <p className="result">🏆 Streak de 15 jours - Hydratation</p>
        </article>
        <article className="illustration">
          <p>🎯</p>
        </article>
      </section>
      <section className="information">
        <article>santé</article>
        <article>finance</article>
        <article>Temps</article>
        <article>Habitude</article>
      </section>
    </div>
    
  );
}
export default Dashboard;
