import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 *
 The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '🧠 Berpikir Komputasional',
      items: [
        'berpikir-komputasional/pengertian',
        'berpikir-komputasional/empat-teknik',
        'berpikir-komputasional/manfaat',
      ],
    },
    {
      type: 'category',
      label: '📊 Google Sheets',
      items: [
        'google-sheets/dasar',
        'google-sheets/formulas',
        'google-sheets/functions',
        'google-sheets/sorting-filtering',
      ],
    },
  ],
};

export default sidebars;
