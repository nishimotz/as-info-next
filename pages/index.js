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
  <h2>1. はじめに</h2>
  <h2>2. 「アクセシビリティ・サポーテッド」の定義</h2>
  <h2>3. 「アクセシビリティ・サポーテッド」であるかどうかの判断</h2>
  <h2>4. 判断する際の注意点</h2>
  <h2>5. 達成基準ごとの解説</h2>
  <h3>等級Aの解説</h3>
  <p>解説を作成するにあたっては、問い合わせの多い達成基準から優先的に議論しており、ワーキンググループでの検討が終わり次第、順次公開していく予定である。</p>
  <ul>
    {Object.keys(criteria).map(
      key => <li>
        <a href={'criteria/' + key + '.html'}>{key} {criteria[key].title}</a>
      </li>
    )}
  </ul>
  <h3>等級AAの解説</h3>
  <p>等級AAの達成基準については、等級Aの解説作成が終わり次第、検討を始める予定である。</p>
  <h2>6. 変更履歴</h2>
</>
