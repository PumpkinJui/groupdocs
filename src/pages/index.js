import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          欢迎来到测试群👋来了就不要走啦~ 这里是测试群的一些文档，希望它们对你有用。
        </p>
        <p className="hero__subtitle">
          在正式和本群群友交流之前，请先阅读下面的入群必读哦~！
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/rules/encounter">
            入群必读 - 新人请点我！
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎！`}
      description="awa">
      <HomepageHeader />
      <main>
        <section style={{ textAlign: 'center', lineHeight: '1.5' }}>
          <h1>群文档地址（建议收藏至浏览器书签栏）</h1>
          <p>nekoawa: https://docs.nekoawa.com（中国大陆推荐，每日 02:00/14:00更新）</p>
          <p>CloudFlare Pages: https://groupdocs.pages.dev/</p>
          <img src='/readme.jpg' alt="README" />
        </section>
      </main>
    </Layout>
  );
}
