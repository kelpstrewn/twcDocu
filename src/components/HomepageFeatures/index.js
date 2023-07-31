import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Themes',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This history includes cross-generational recurrances of events and activities
      </>
    ),
  },
  {
    title: 'Father and son',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
My father, Tom Curham died recently. I am his eldest son, Stephen Curham, and have decided to record some of what I know of his life and of the family history.
      </>
    ),
  },
  {
    title: 'Other stuff',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        There have been previous iterations of kelpstrewn.com, (life in the shallows) and some of these have been continued in a separate section of this site.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
