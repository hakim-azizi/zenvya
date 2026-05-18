import { Link } from "react-router-dom";
import '../style/Home.css';

function Home() {
  return (
    <>
    <div className="content content-dashboard">
      <div className="content home">
        <section>
          <p className='border'>AI-Powered Life Intelligence</p>
          <article className='slogan'>Track less.<br />
          Live more.</article>
          <article>
            ZENVYA transforme vos données quotidiennes en insights profonds pour optimiser votre bien-être, finances, et carrière — sans l'agression visuelle du tech.
            <p className='espacement'>
              <span className='begin-free'><Link to=''>Commencer gratuitement &rarr;</Link></span>
              <span className='demo'><Link to=''>Voir la d&eacute;mo  &rarr;</Link></span>
            </p>
            Aucune carte bancaire requise • Setup en 2 minutes
          </article>
        </section>
        <section className='adjust'>
          <article className='limit'>
            <ul>
              <li>Z</li>
              <li className='preview'>Live Preview</li>
            </ul>
            <div>
              <p>
                AI Score<br />
                <span>87</span>
              </p>
              <p>Trend<br />
                <span>+12%</span>
              </p>
            </div>
          </article>
          <article className='activity'>
          <ul>
            <li>Weekly Activity Heatmap</li>
            <li className='color-1'></li>
            <li className='color-2'></li>
            <li className='color-1'></li>
            <li className='color-1'></li>
            <li className='color-3'></li>
            <li className='color-2'></li>
            <li className='color-4'></li>
            <li className='color-1'></li>
            <li className='color-4'></li>
            <li className='color-4'></li>
            <li className='color-2'></li>
            <li className='color-1'></li>
            <li className='color-4'></li>
            <li className='color-1'></li>
            <li className='color-1'></li>
            <li className='color-4'></li>
            <li className='color-2'></li>
            <li className='color-1'></li>
            <li className='color-1'></li>
            <li className='color-2'></li>
            <li className='color-4'></li>
            <li className='color-4'></li>
            <li className='color-2'></li>
            <li className='color-1'></li>
            <li className='color-4'></li>
            <li className='color-2'></li>
            <li className='color-2'></li>
            <li className='color-1'></li>
            <li className='color-4'></li>
            <li className='color-1'></li>
            <li className='color-4'></li>
            <li className='color-2'></li>
            <li className='color-2'></li>
            <li className='color-1'></li>
            <li className='color-3'></li>
          </ul>
          </article>
          <article className='activity recommendation'>
            <div>
              <h2>AI Recommendation</h2>
              <p>
                Vos meilleures performances arrivent après 7h+ de sommeil. Priorisez votre repos.
              </p>
            </div>
            <p className='bottom'></p>
          </article>
        </section>
      </div>  
      <section className='dashboard information'>
          <p className='center'>
            <span className='border'>Intelligence holistique</span>
          </p>
          <h2 className='center'>Un dashboard, toute votre vie</h2>
          <p style={{width: '100%'}}>
            Santé, finances, productivité et carrière — analysés et corrélés par IA
          </p>
        <article>
          <h3>Santé & Bien-être</h3>
          Sommeil, activité, nutrition analysés en profondeur
        </article>
        <article>
          <h3>Finances intelligentes</h3>
          Budget prédictif et recommandations d'épargne
        </article>
        <article>
          <h3>Focus & Temps</h3>
          Optimisez votre productivité avec des insights comportementaux
        </article>
        <article>
          <h3>Career Coach IA</h3>
          CV scoring, matching emploi, progression salariale
        </article>
      </section>
    </div>
    <div className="content home">
        <section>
          <p className='border '>Smart Notifications</p>
          <h2>L'IA qui comprend votre rythme</h2>
          <article>
            Notifications contextuelles basées sur vos patterns comportementaux. Pas de spam, juste des insights au bon moment.
            <p className='hour'>
			<span>08:30</span>
Votre énergie est à son pic. Bloquez 2h pour votre projet prioritaire.
            </p>
            <p className='hour'>
			<span>14:00</span>
Budget loisirs à 85%. Suggestion: reporter cet achat de 3 jours.
            </p>
            <p className='hour'>
			<span>21:30</span>
Qualité de sommeil optimale après une session sport. Prévue demain?
            </p>
          </article>
        </section>
        <section>
          <aside>
          <picture className='limit photo'><img src='photo/photo-1759752394755-1241472b589d.webp' /></picture>
          </aside>
        </section>
              <section className='dashboard information career'>
          <p className='center'>
            <span className='border'>Career Intelligence</span>
          </p>
          <h2  className='center'>Votre coach carrière IA</h2>
          <p  className='center'>
            CV scoring, job matching intelligent, et insights sur votre progression professionnelle
          </p>
        <article>
          <h3>CV Score IA</h3>
          <p><span>92/100</span></p>
          <span>Analyse sémantique approfondie</span>
        </article>
        <article>
          <h3>Job Matching</h3>
          <p><span>14</span></p>
          <span>Opportunités compatibles</span>
        </article>
        <article>
          <h3>Salary Insights</h3>
          <p><span>&#43;22&#37;</span></p>
          <span>Potentiel augmentation marché</span>
        </article>
        <p className='center'><span className='testing'><Link to=''>Analyser mon CV maintenant &rarr;</Link></span></p>
      </section>
      <section className='conclusion'>
        <h2>Z</h2>
        <h3>Prêt à reprendre le contrôle?</h3>
         <p>Rejoignez les 10,000+ personnes qui optimisent leur vie avec ZENVYA</p>
         <p><span className='testing'><Link to=''>Commencer gratuitement &rarr;</Link></span></p>
      </section>
      </div>
    </>
  );
};
export default Home;
