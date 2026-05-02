import {Fragment, useState} from 'react';

import AiHealth from '../component/AiHealth';
import AiFinance from '../component/AIFinance';
import AIProductivity from '../component/AIProductivity';
import AiHabits from '../component/AiHabits';
import AiWellBeing from '../component/AiWellBeing';

import '../style/AiConsulting.css';

function AiConsulting() {
  type Choice = "All" | "Health" | "Finance" | "Productivity" | "Habits" | "Well-being";
  const [selectChoice,setSelectChoice]=useState<Choice>('All');

  const choice = (value:Choice)=>{
    setSelectChoice(value);
  };

  const choiceArray = {
  'Health': <AiHealth />,
  'Finance': <AiFinance />,
  'Productivity': <AIProductivity />,
  'Habits': <AiHabits />,
  'Well-being': <AiWellBeing />
};
//  console.log('tableau',choiceArray[selectChoice])
  return (
    <div className="content content-dashboard content-ai">
      <header>
        <h1>Recommandations IA</h1>
        <p>Conseils personnalis&eacute;s bas&eacute;s sur l'analyse de vos donn&eacute;es</p>
      </header>
      <section className="information ">
        <h2>Analyse globale de votre vie</h2>
        <article className='three-parts'>
          <p>Points forts</p>
          <p>4</p>
        </article>
        <article className='three-parts'>
          <p>À am&eacute;liorer</p>
          <p>3</p>
        </article>
        <article className='three-parts'>
          <p>Impact potentiel</p>
          <p>+ 22 %</p>
        </article>
        <p>L'IA a analys&eacute; vos donn&eacute;es sur les 30 derniers jours et identifi&eacute; 5 recommandations personnalis&eacute;es pour am&eacute;liorer votre bien-être global.</p>
      </section>
      <section className='filter'>
        <p>Filtrer par cat&eacute;gorie</p>
        <button onClick={()=>{choice('All')}}>Toutes</button>
        <button onClick={()=>{choice('Health')}}>Sant&eacute;</button>
        <button onClick={()=>{choice('Finance')}}>Finance</button>
        <button onClick={()=>{choice('Productivity')}}>Productivit&eacute;</button>
        <button onClick={()=>{choice('Habits')}}>Habitudes</button>
        <button onClick={()=>{choice('Well-being')}}>Bien-&ecirc;tre</button>
      </section>
      {selectChoice === "All" ?
      Object.entries(choiceArray).map(([key, choiceMap]) => (
      <Fragment key={key}>
        {choiceMap}
      </Fragment>
    )) :(
    <Fragment>
      {choiceArray[selectChoice]}
    </Fragment>
  )
   };
   <section className='functioning'>
        <h2>Comment &ccedil;a marche ?</h2>
        <article className='three-parts'>
          <h3>Analyse de données</h3>
          <p>L'IA analyse vos habitudes, activités et performances sur 30 jours</p>
        </article>
        <article className='three-parts'>
          <h3>Identification de patterns</h3>
          <p>Détection des corrélations et opportunités d'amélioration</p>
        </article>
        <article className='three-parts'>
          <h3>Recommandations</h3>
          <p>Actions concrètes et personnalisées pour atteindre vos objectifs</p>
        </article>
      </section>
</div>
   );
}
export default AiConsulting;
