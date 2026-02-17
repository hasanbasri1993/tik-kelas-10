import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '📚 Materi Lengkap',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Kisi-kisi lengkap untuk UAS dengan materi Berpikir Komputasional dan Google Sheets
        yang disajikan dalam format yang mudah dipahami.
      </>
    ),
  },
  {
    title: '🎯 Fokus pada Konsep Inti',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Materi difokuskan pada konsep-konsep inti yang keluar di ujian,
        dilengkapi dengan contoh dan tips belajar yang efektif.
      </>
    ),
  },
  {
    title: '💡 Belajar Cepat',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Format cheat sheet yang ringkas membantu siswa belajar dengan cepat
        dan efektif sebelum ujian.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
