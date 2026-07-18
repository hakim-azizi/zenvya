import type { RecommendationsType } from "../type/Type.tsx";

type arrayInfo = { recommendationsArray: RecommendationsType };

function AIRecommendations({ recommendationsArray }: arrayInfo) {
  return (
    <article className="three-parts">
      <p>
        <span>{recommendationsArray["emojie"]}</span>
        <span className="border">{recommendationsArray["title"]}</span>
      </p>
      <h3>{recommendationsArray["subtitle"]}</h3>
      <p>{recommendationsArray["description"]}</p>
      <p className="border">
        Impact estimé:
        <br />
        {recommendationsArray["result"]}
      </p>
    </article>
  );
}
export default AIRecommendations;
