import React from 'react'
import Logo from '../../components/Logo'
import { useRouter } from 'next/router'
import results from '../../data/results.yaml'
import NextSeo from 'next-seo'
import SEO from '../../next-seo.config'

const Result = ({ query }) => {
  const router = useRouter()
  const { id } = router.query
  const trueId = id.replace(/.html$/,'') // '.html' is appended to the routing path when exporting, so remove it.
  const result = results[trueId];
  return (
    <>
      <NextSeo config={Object.assign(SEO, {title:'テスト' + trueId})}/>
      <Logo/>
      <h1>アクセシビリティ・サポーテッド（AS）情報：テスト{trueId}</h1>
      <ul>
        <li>公開日：2019年*月*日</li>
        <li>作成者：ウェブアクセシビリティ基盤委員会（WAIC）実装ワーキンググループ（WG2）</li>
        <li><a href="../">戻る</a></li>
      </ul>
      <h2>テスト{trueId}: {result.title}</h2>
      <h3>関連する達成基準の実装方法一覧</h3>
      <ul>
        <li><a href="../criteria/1.1.1.html">1.1.1非テキストコンテンツに関する達成基準 (等級A)</a></li>
        <li><a href="../criteria/2.4.4.html">2.4.4文脈におけるリンクの目的に関する達成基準 (等級A)</a></li>
      </ul>
      <h3>関連する達成方法</h3>
      <ul>
        <li><a href="../techs/H2.html">H2: 隣り合った画像とテキストリンクを同じリンクの中に入れる</a></li>
        <li><a href="../techs/H30.html">H30: a 要素のリンクの目的を説明するリンクテキストを提供する</a></li>
      </ul>
      <h3>テストファイル</h3>
      <ul>
        <li><a href={result.document}>{trueId}のテストの目的、テスト手順、期待される結果、テスト実施時の注意点など</a></li>
        <li><a href={result.code}>{trueId}のテストコード</a></li>
      </ul>
      <h3>対象</h3>
      <ul>
        <li>a要素内にあるimg要素のalt属性</li>
      </ul>
      <h3>テスト結果の概要</h3>
      <ul>
        <li>テストの件数: xx件</li>
        <li>○ の数: xx件</li>
        <li>× の数: xx件</li>
      </ul>
      <h3>テスト結果の詳細</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">行番号</th>
            <th scope="col">ユーザエージェント</th>
            <th scope="col">検証結果</th>
            <th scope="col">操作手順</th>
            <th scope="col">備考</th>
          </tr>
        </thead>
        <tbody>
          <tr className="ok">
            <td>1</td>
            <td>macOS Mojave 10.14.2 + Firefox 64.0 + VoiceOver</td>
            <td>○</td>
            <td>このデータはダミーです。</td>
            <td>(作業コメント テスト結果ID 0003)</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Result;
