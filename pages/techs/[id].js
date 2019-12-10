import React from 'react'
import Logo from '../../components/Logo'
import { useRouter } from 'next/router'
import metadata from '../../data/metadata.yaml'
import techs from '../../data/techs.yaml'
import tests from '../../data/tests.yaml'
import criteria from '../../data/criteria.yaml'
import NextSeo from 'next-seo'
import SEO from '../../next-seo.config'

const Tech = ({ query }) => {
  const router = useRouter()
  const { id } = router.query
  const trueId = id.replace(/.html$/,'') // '.html' is appended to the routing path when exporting, so remove it.
  const tech = techs[trueId];
  const criterion_ids = Object.keys(criteria).filter(
    key => criteria[key].techs.includes(trueId)
  );
  const test_ids = Object.keys(tests).filter(
    key => tests[key].techs.includes(trueId)
  );
  return (
    <>
      <NextSeo config={Object.assign(SEO, {title:'達成方法' + trueId})}/>
      <Logo/>
      <h1>アクセシビリティ・サポーテッド（AS）情報：達成方法{trueId}</h1>
      <ul>
        <li>公開日：{metadata.pubDate}</li>
        <li>作成者：{metadata.author}</li>
        <li><a href="../">戻る</a></li>
      </ul>
      <h2>{trueId}: {tech.title}</h2>
      <h3>関連する達成基準</h3>
      <ul>
        {criterion_ids.map(criterion_id => (
        <li key={criterion_id}>
          <a href={'../criteria/' + criterion_id + '.html'}>{criterion_id} {criteria[criterion_id].title} (等級{criteria[criterion_id].level})</a>
        </li>
        ))}
      </ul>
      <h3>関連するテストケース</h3>
      <ul>
        {test_ids.map(test_id => (
        <li key={test_id}>
          <a href={'../results/' + test_id + '.html'}>テスト{test_id}</a>
        </li>
        ))}
      </ul>
    </>
  )
}

export default Tech;
