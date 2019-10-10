import React from 'react'
import Logo from '../../components/Logo'
import { useRouter } from 'next/router'
import criteria from '../../data/criteria.yaml'
import NextSeo from 'next-seo'
import SEO from '../../next-seo.config'

const Criterion = ({ query }) => {
  const router = useRouter()
  const { id } = router.query
  const trueId = id.replace(/.html$/,'') // '.html' is appended to the routing path when exporting, so remove it.
  const criterion = criteria[trueId];
  return (
    <>
      <NextSeo config={Object.assign(SEO, {title:'達成基準' + trueId})}/>
      <Logo/>
      <h1>アクセシビリティ・サポーテッド（AS）情報：達成基準{trueId}</h1>
      <ul>
        <li>公開日：2019年*月*日</li>
        <li>作成者：ウェブアクセシビリティ基盤委員会（WAIC）実装ワーキンググループ（WG2）</li>
        <li><a href="../">戻る</a></li>
      </ul>
      <h2>{trueId} {criterion.title} (等級{criterion.level})</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">達成方法</th>
            <th scope="col">対象</th>
            <th scope="col">達成可否</th>
          </tr>
        </thead>
        <tbody>
          <tr className="ok">
            <td>
              <a href="../techs/H2.html">H2: 隣り合った画像とテキストリンクを同じリンクの中に入れる</a>
            </td>
            <td>a要素内にあるimg要素のalt属性</td>
            <td>要注意</td>
          </tr>
          <tr className="ok">
            <td>
              <a href="../techs/H30.html">H30: a 要素のリンクの目的を説明するリンクテキストを提供する</a>
            </td>
            <td>a要素内に単一のimg要素があるケース</td>
            <td>達成可能</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Criterion;
