import React from 'react'
import Logo from '../../components/Logo'
import { useRouter } from 'next/router'
import metadata from '../../data/metadata.yaml'
import tests from '../../data/tests.yaml'
import criteria from '../../data/criteria.yaml'
import techs from '../../data/techs.yaml'
import results from '../../data/results.yaml'
import NextSeo from 'next-seo'
import SEO from '../../next-seo.config'

const Result = ({ query }) => {
  const router = useRouter()
  const { id } = router.query
  const trueId = id.replace(/.html$/,'') // '.html' is appended to the routing path when exporting, so remove it.
  const test = tests[trueId];
  const tech_ids = test.techs;
  const criterion_ids = Object.keys(criteria).filter((key) => {
    let found = false;
    tech_ids.forEach((tech_id) => {
      if (criteria[key].techs.includes(tech_id)) {
        found = true;
      }
    })
    return found;
  });
  const result_ids = results.filter(result => result.test === trueId);
  return (
    <>
      <NextSeo config={Object.assign(SEO, {title:'テスト' + trueId})}/>
      <Logo/>
      <h1>アクセシビリティ・サポーテッド（AS）情報：テスト{trueId}</h1>
      <ul>
        <li>公開日：{metadata.pubDate}</li>
        <li>作成者：{metadata.author}</li>
        <li><a href="../">戻る</a></li>
      </ul>
      <h2>テスト{trueId}: {test.title}</h2>
      <h3>関連する達成基準の実装方法一覧</h3>
      <ul>
        {criterion_ids.map(criterion_id => (
        <li key={criterion_id}>
          <a href={'../criteria/' + criterion_id + '.html'}>{criterion_id}: {criteria[criterion_id].title} (等級{criteria[criterion_id].level})</a>
        </li>
        ))}
      </ul>
      <h3>関連する達成方法</h3>
      <ul>
        {tech_ids.map(tech_id => (
        <li key={tech_id}>
          <a href={'../techs/' + tech_id + '.html'}>{tech_id}: {techs[tech_id].title}</a>
        </li>
        ))}
      </ul>
      <h3>テストファイル</h3>
      <ul>
        <li><a href={test.document}>{trueId}のテストの目的、テスト手順、期待される結果、テスト実施時の注意点など</a></li>
        <li><a href={test.code}>{trueId}のテストコード</a></li>
      </ul>
      <h3>対象</h3>
      <ul>
        {tech_ids.map(tech_id => (
        <li key={tech_id}>{techs[tech_id].target}</li>
        ))}
      </ul>
      <h3>テスト結果の概要</h3>
      <ul>
        <li>テストの件数: {result_ids.length}件</li>
        <li>○ の数: xx件</li>
        <li>× の数: xx件</li>
      </ul>
      <h3>テスト結果の詳細</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">行番号</th>
            <th scope="col">テストID</th>
            <th scope="col">ユーザエージェント</th>
            <th scope="col">検証結果</th>
            <th scope="col">操作手順</th>
            <th scope="col">備考</th>
          </tr>
        </thead>
        <tbody>
          {result_ids.map((result, index) => (
          <tr key={result.id} className="ok">
            <td>{index + 1}</td>
            <td>{result.id}</td>
            <td>{result.user_agent}</td>
            <td>{result.judgment}</td>
            <td>{result.procedure}</td>
            <td>{result.comment}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Result;
