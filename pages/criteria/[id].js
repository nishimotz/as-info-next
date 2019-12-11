import React from 'react'
import Logo from '../../components/Logo'
import { useRouter } from 'next/router'
import metadata from '../../data/metadata.yaml'
import criteria from '../../data/criteria.yaml'
import techs from '../../data/techs.yaml'
import NextSeo from 'next-seo'
import SEO from '../../next-seo.config'

const Criterion = ({ query }) => {
  const router = useRouter()
  const { id } = router.query
  const true_id = id.replace(/.html$/,'') // '.html' is appended to the routing path when exporting, so remove it.
  const criterion = criteria[true_id];
  return (
    <>
      <NextSeo config={Object.assign(SEO, {title:'達成基準' + true_id})}/>
      <Logo/>
      <h1>アクセシビリティ・サポーテッド（AS）情報：達成基準{true_id}</h1>
      <ul>
        <li>公開日：{metadata.pub_date}</li>
        <li>作成者：{metadata.author}</li>
        <li><a href="../">戻る</a></li>
      </ul>
      <h2>{true_id} {criterion.title}に関する達成基準 (等級{criterion.level})</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">達成方法</th>
            <th scope="col">対象</th>
          </tr>
        </thead>
        <tbody>
          {criterion.techs.map(tech_id => {
          const tech = techs[tech_id];
          return (
          <tr key={tech_id} className="ok">
            <td>
              {tech ? (
              <a href={'../techs/' + tech_id + '.html'}>{tech_id}: {tech.title}</a>
              ) : tech_id}
            </td>
            <td>{tech && tech.target}</td>
          </tr>
          );})}
        </tbody>
      </table>
    </>
  )
}

export default Criterion;
