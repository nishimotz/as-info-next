import React from 'react'
import Logo from '../components/Logo'
import criteria from '../data/criteria.yaml'
import NextSeo from 'next-seo'
import SEO from '../next-seo.config'

export default () => 
<>
  <NextSeo config={Object.assign(SEO, {title:'ホーム'})}/>
  <Logo/>
  <h1>アクセシビリティ・サポーテッド（AS）情報：2019年*月版</h1>
  <ul>
    <li>公開日：2019年*月*日</li>
    <li>作成者：ウェブアクセシビリティ基盤委員会（WAIC）実装ワーキンググループ（WG2）</li>
    <li>前のバージョン：<a href="https://waic.jp/docs/as/info/201406/index.html">2014年6月版</a></li>
  </ul>
  <h2>達成基準ごとの検証結果</h2>
  <ul>
    {Object.keys(criteria).map(
      key => <li key={key}>
        <a href={'criteria/' + key + '.html'}>{key} {criteria[key].title}</a>
      </li>
    )}
  </ul>
</>
