import React from 'react'
import Logo from '../../components/Logo'
import { useRouter } from 'next/router'
import techs from '../../data/techs.yaml'
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
        <li><a href="../criteria/1.1.1.html">1.1.1非テキストコンテンツに関する達成基準 (等級A)</a></li>
        <li><a href="../criteria/2.4.4.html">2.4.4文脈におけるリンクの目的に関する達成基準 (等級A)</a></li>
      </ul>
      <h3>関連するテストケース</h3>
      <ul>
        <li><a href="../results/0001-01.html">テスト0001-01</a></li>
      </ul>
    </>
  )
}

export default Tech;
