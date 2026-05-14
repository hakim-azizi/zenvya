import {useState, useEffect} from 'react';
import '../style/AiConsultingResponse.css';

export interface contentType {
  title: string | null,
  priority: string | null,
  subTitle: string | null,
  analysis: string | null,
  recommendedAction: string | null,
  estimatedImpact: string | null
};

function AIConsultingResponse({ responseAI }: { responseAI: string }) {
const [content,setContent]=useState<Record<string, contentType | null>>({});
useEffect(()=>{
  // fetch(`${import.meta.env.VITE_API_URL}/array/consulting.json`)
  fetch(`https://zenvya.vercel.app/array/consulting.json`)
        .then((response) => response.json())
        .then((data) => setContent(data));
    }, []);
  
    if (Object.keys(content).length === 0) {
      return <img src='../images/loader.gif' />;
    }

    const dataResult = content[responseAI];

    if(!dataResult){
    return <img src='../images/loader.gif' />;
  }
  let priority ='';
  let color='';
  if(dataResult.priority === 'high'){
    priority='haute priorité';
    color='#FB2C36';
  } else if(dataResult.priority === 'medium'){
    priority='priorité moyenne';
    color='#F0B100';
  } else if(dataResult.priority === 'low'){
    priority='priorité basse';
    color='#00C950';
  } else {
    return (<section className='response'>Unknown error</section>)
  }
  return (
    <section className='response' style={{ borderLeft: `3px solid ${color}` }}>
<p>{`${dataResult.title} ${priority}`}</p>
<h2>{dataResult.subTitle}</h2>
<article className='analysis'>Analyse<p>{dataResult.analysis}</p></article>
<article className='recommended-action'>Action recommandée<p>{dataResult.recommendedAction}</p></article>
<article className='estimated-impact'>Impact estimé<p>{dataResult.estimatedImpact}</p></article>
    </section>
  );
}

export default AIConsultingResponse;
