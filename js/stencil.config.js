import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
export const config = {
    namespace: 'smtt-ds',
    outputTargets: [
        reactOutputTarget({
            componentCorePackage: 'smtt-ds',
            proxiesFile: '../smtt-ds-react/src/components.ts'
        }),
        {
            type: 'dist',
            esmLoaderPath: '../loader'
        },
        {
            type: 'docs-readme'
        },
        {
            type: 'www',
            serviceWorker: null // disable service workers
        },
        {
            type: 'docs-vscode',
            file: 'dist/html.html-data.json'
        }
    ],
    globalStyle: 'src/global/app.css',
    plugins: [
        sass({
            injectGlobalPaths: ['src/scss/globals.scss']
        })
    ]
};
