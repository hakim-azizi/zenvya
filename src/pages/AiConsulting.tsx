import { Fragment, useState, useRef } from "react";

import AIConsultingResponse from "../component/AIConsultingResponse";

import "../style/AiConsulting.css";

function AiConsulting() {
  type Choice =
    | "all"
    | "health"
    | "finance"
    | "productivity"
    | "habits"
    | "wellBeing";
  const [selectChoice, setSelectChoice] = useState<Choice>("all");

  const allRef = useRef<HTMLButtonElement | null>(null);
  const healthRef = useRef<HTMLButtonElement | null>(null);
  const financeRef = useRef<HTMLButtonElement | null>(null);
  const productivityRef = useRef<HTMLButtonElement | null>(null);
  const habitsRef = useRef<HTMLButtonElement | null>(null);
  const wellBeingRef = useRef<HTMLButtonElement | null>(null);

  const choiceArray = {
    health: <AIConsultingResponse responseAI="health" />,
    finance: <AIConsultingResponse responseAI="finance" />,
    productivity: <AIConsultingResponse responseAI="productivity" />,
    habits: <AIConsultingResponse responseAI="habits" />,
    wellBeing: <AIConsultingResponse responseAI="wellBeing" />,
  };

  const choice = (value: Choice) => {
    setSelectChoice(value);
  };

  return (
    <div className="content content-dashboard content-ai">
      <header className="center">
        <h1>Recommandations IA</h1>
        <p>
          Conseils personnalis&eacute;s bas&eacute;s sur l'analyse de vos
          donn&eacute;es
        </p>
      </header>
      <section className="information ">
        <h2>Analyse globale de votre vie</h2>
        <article className="three-parts">
          <p>Points forts</p>
          <p>4</p>
        </article>
        <article className="three-parts">
          <p>À am&eacute;liorer</p>
          <p>3</p>
        </article>
        <article className="three-parts">
          <p>Impact potentiel</p>
          <p>+ 22 %</p>
        </article>
        <p>
          L'IA a analys&eacute; vos donn&eacute;es sur les 30 derniers jours et
          identifi&eacute; 5 recommandations personnalis&eacute;es pour
          am&eacute;liorer votre bien-être global.
        </p>
      </section>
      <section className="filter">
        <p>Filtrer par cat&eacute;gorie</p>
        <button
          className="button-background button-all"
          onClick={() => {
            choice("all");
          }}
          ref={allRef}
        >
          Toutes
        </button>
        <button
          className="button-background button-health"
          onClick={() => {
            choice("health");
          }}
          ref={healthRef}
        >
          Sant&eacute;
        </button>
        <button
          className="button-background button-finance"
          onClick={() => {
            choice("finance");
          }}
          ref={financeRef}
        >
          Finance
        </button>
        <button
          className="button-background button-productivity"
          onClick={() => {
            choice("productivity");
          }}
          ref={productivityRef}
        >
          Productivit&eacute;
        </button>
        <button
          className="button-background button-habits"
          onClick={() => {
            choice("habits");
          }}
          ref={habitsRef}
        >
          Habitudes
        </button>
        <button
          className="button-background button-well-being"
          onClick={() => {
            choice("wellBeing");
          }}
          ref={wellBeingRef}
        >
          Bien-&ecirc;tre
        </button>
      </section>
      {selectChoice === "all" ? (
        Object.entries(choiceArray).map(([key, choiceMap]) => (
          <Fragment key={key}>{choiceMap}</Fragment>
        ))
      ) : (
        <Fragment>{choiceArray[selectChoice]}</Fragment>
      )}
      ;
      <section className="functioning">
        <h2>Comment &ccedil;a marche ?</h2>
        <article className="three-parts">
          <h3>Analyse de données</h3>
          <p>
            L'IA analyse vos habitudes, activités et performances sur 30 jours
          </p>
        </article>
        <article className="three-parts">
          <h3>Identification de patterns</h3>
          <p>Détection des corrélations et opportunités d'amélioration</p>
        </article>
        <article className="three-parts">
          <h3>Recommandations</h3>
          <p>
            Actions concrètes et personnalisées pour atteindre vos objectifs
          </p>
        </article>
      </section>
    </div>
  );
}
export default AiConsulting;
