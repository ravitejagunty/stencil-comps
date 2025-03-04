import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'stencil-components',
  globalStyle: 'src/global/styles.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: 'loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../react/src/components.ts',
      outDir: '../react/'
    }),
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      directivesProxyFile: '../angular/src/directives.ts',
      directivesArrayFile: '../angular/src/directives/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../vue/src/components.ts',
    }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
  devServer: {
    openBrowser: false, // Prevents auto-opening the browser when running dev server
  },
  extras: {
    experimentalImportInjection: true, // Enables advanced import features for Storybook
  },
};