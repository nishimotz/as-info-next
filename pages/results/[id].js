import React from 'react'
import Logo from '../../components/Logo'
import H1 from '../../components/H1'
import { useRouter } from 'next/router'
import metadata from '../../data/metadata.yaml'
import tests from '../../data/tests.yaml'
import criteria from '../../data/criteria.yaml'
import techs from '../../data/techs.yaml'
import results from '../../data/results.yaml'
import NextSeo from 'next-seo'
import SEO from '../../next-seo.config'

const ResultTableRow = (props) => {
  const result = props.result;
  const contents = result.contents;
  if (contents.length === 1) {
    return (
    <tr>
      <th scope="row">{result.id}</th>
      <td><ul>
        <li>{result.os}</li>
        <li>{result.user_agent}</li>
        <li>{result.assistive_tech}</li>
        {result.assistive_tech_config && (<li>{result.assistive_tech_config}</li>)}
      </ul></td>
      <td>
        {contents[0].procedure}
      </td>
      <td>
        {contents[0].actual}
      </td>
      <td>
        {contents[0].judgment === '満たしている' ? '○' : contents[0].judgment}
      </td>
      <td>{result.comment}</td>
      <td></td>
    </tr>
    );
  }
  return (
    <>
    {contents.map((item, index) => (
      <tr key={index}>
        {index === 0 && (
          <>
            <th rowSpan={contents.length} scope="rowgroup">{result.id}</th>
            <td rowSpan={contents.length}><ul>
              <li>{result.os}</li>
              <li>{result.user_agent}</li>
              <li>{result.assistive_tech}</li>
              {result.assistive_tech_config && (<li>{result.assistive_tech_config}</li>)}
            </ul></td>
          </>
        )}
        <td>
          {item.procedure}
        </td>
        <td>
          {item.actual}
        </td>
        <td>
          {item.judgment === '満たしている' ? '○' : item.judgment}
        </td>
        {index === 0 && (
          <>
          <td rowSpan={contents.length}>{result.comment}</td>
          <td rowSpan={contents.length}></td>
          </>
        )}
      </tr>
    ))}
    </>
  )
};

const Result = ({ query }) => {
  const router = useRouter()
  const { id } = router.query
  const true_id = id.replace(/.html$/,'') // '.html' is appended to the routing path when exporting, so remove it.
  const test = tests[true_id];
  const criterion_ids = test.criteria;
  const tech_ids = test.techs;
  const result_ids = results.filter(result => result.test === true_id);
  return (
    <>
      <NextSeo config={Object.assign(SEO, {title:'テスト' + true_id})}/>
      <Logo/>
      <H1
        first='アクセシビリティ サポーテッド (AS) 情報：テストケース'
        second={`${true_id}: ${test.title}`}
      />
      <ul>
        <li>公開日：{metadata.pub_date}</li>
        <li>作成者：{metadata.author}</li>
      </ul>
      <h2>テストの対象となる達成基準</h2>
      <ul>
        {criterion_ids.map(criterion_id => (
        <li key={criterion_id}>
          <a href={'../criteria/' + criterion_id + '.html'}>{criterion_id} {criteria[criterion_id].title} (レベル{criteria[criterion_id].level})</a>
        </li>
        ))}
      </ul>
      <h2>関連する達成方法</h2>
      <ul>
        {tech_ids.map(tech_id => (
        <li key={tech_id}>
          <a href={'../techs/' + tech_id + '.html'}>{tech_id}: {techs[tech_id].title}</a>
        </li>
        ))}
      </ul>
      <h2>テスト詳細</h2>
      <ul>
        <li><a href={test.document}>テスト内容 {true_id}</a></li>
        <li><a href={test.code}>テストコード {true_id}</a></li>
      </ul>
      <h2>検証結果一覧</h2>
      <ul>
        <li>テスト結果の件数: {result_ids.length}件</li>
      </ul>
      <h2>テスト結果の詳細</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">環境</th>
            <th scope="col">操作内容</th>
            <th scope="col">得られた結果</th>
            <th scope="col">判断</th>
            <th scope="col">備考</th>
            <th scope="col">テスト実施者</th>
          </tr>
        </thead>
        <tbody>
          {result_ids.map((result, index) => (
            <ResultTableRow result={result} index={index} key={index}/>
          ))}
        </tbody>
      </table>
      <h2>ライセンス</h2>
      <p>各検証結果は、それぞれの作成者を原著作者とし、クリエイティブ・コモンズ・ライセンスの下でライセンスされています。原著作者名は、それぞれの検証結果をご覧ください。また、ご利用になる前に利用許諾条項を必ずご確認ください。</p>
      <p><a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"><img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png" alt="by-sa" width="88" height="31"/> 利用許諾条項（表示 – 継承 4.0 日本）の確認</a></p>
    </>
  )
}

export default Result;
