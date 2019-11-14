import React from 'react'
import Logo from '../../components/Logo'
import { useRouter } from 'next/router'
import criteria from '../../data/criteria.yaml'
import techs from '../../data/techs.yaml'
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
          {criterion.techs.map(key => (
          <tr key={key} className="ok">
            <td>
              <a href={'../techs/' + key + '.html'}>{key}: {techs[key].title}</a>
            </td>
            <td>{techs[key].target}</td>
            <td></td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Criterion;
