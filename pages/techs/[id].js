import React from 'react'
import Logo from '../../components/Logo'
import { useRouter } from 'next/router'
import techs from '../../data/techs.yaml'
import criteria from '../../data/criteria.yaml'
import NextSeo from 'next-seo'
import SEO from '../../next-seo.config'

const Tech = ({ query }) => {
  const router = useRouter()
  const { id } = router.query
  const trueId = id.replace(/.html$/,'') // '.html' is appended to the routing path when exporting, so remove it.
  const tech = techs[trueId];
  return (
    <>
      <NextSeo config={Object.assign(SEO, {title:'達成方法' + trueId})}/>
      <Logo/>
      <h1>アクセシビリティ・サポーテッド（AS）情報：達成方法{trueId}</h1>
      <ul>
        <li>公開日：2019年*月*日</li>
        <li>作成者：ウェブアクセシビリティ基盤委員会（WAIC）実装ワーキンググループ（WG2）</li>
        <li><a href="../">戻る</a></li>
      </ul>
      <h2>{trueId}: {tech.title}</h2>
      <h3>関連する達成基準</h3>
      <ul>
        {Object.keys(criteria).filter(
          key => criteria[key].techs.includes(trueId)
        ).map(key => (
        <li key={key}>
          <a href={'../criteria/' + key + '.html'}>{key} {criteria[key].title} (等級{criteria[key].level})</a>
        </li>
        ))}
      </ul>
      <h3>関連するテストケース</h3>
      <ul>
        {tech.tests.map(key => (
        <li key={key}>
          <a href={'../results/' + key + '.html'}>テスト{key}</a>
        </li>
        ))}
      </ul>
    </>
  )
}

export default Tech;
