import type { InformationType } from "../type/Type.tsx";

type arrayInfo = { informationArray: InformationType };

function Information({ informationArray }: arrayInfo) {
  return (
    <article className="four-parts">
      <p>{informationArray["category"]}</p>
      <p>
        <span className="bold">{informationArray["value"]}</span>
        <br />
        {informationArray["information"]}
      </p>
      {informationArray["percent"]}
      {informationArray["gauge"]}
    </article>
  );
}

export default Information;
