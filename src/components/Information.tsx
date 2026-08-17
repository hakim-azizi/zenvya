import type { ArrayInfo } from "../utils/Type.tsx";
import { percent, gauge } from "../utils/Lib.tsx";

function Information({ informationArray }: ArrayInfo) {
  return (
    <article className="four-parts">
      <p>{informationArray["category"]}</p>
      <p>
        <span className="bold">
          {informationArray["value"] === ""
            ? `${percent(informationArray.percent[0], informationArray.percent[1])} %`
            : informationArray["value"]}
        </span>
        <br />
        {informationArray["information"]}
      </p>
      {informationArray["gauge"] &&
        `${percent(informationArray.percent[0], informationArray.percent[1])} %`}
      {informationArray["gauge"] &&
        gauge(informationArray.percent[0], informationArray.percent[1])}
    </article>
  );
}

export default Information;
