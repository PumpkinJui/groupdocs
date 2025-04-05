import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
export default function NotFoundContent({className}) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3" style={{ textAlign: 'center' }}>
          <Heading as="h1" className="hero__title">
            404 - Not Found
          </Heading>
          <a href="index.html" style={{ display: 'block', marginBottom: '2rem' }}>
            <img
              src="https://forthebadge.com/images/badges/uh-oh-404-no-pages-or-badges.svg"
              alt="404"
            />
          </a>
          <img
            src="/about/404/forver.jpg"
            alt="祉语供图"
          />
          <img
            src="/about/404/spudserver.jpg"
            alt="你群群文档服务器供电系统实拍"
          />
        </div>
      </div>
    </main>
  );
}
