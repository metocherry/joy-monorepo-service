import { AutoRc } from 'auto';
import { INpmConfig } from '@auto-it/npm';

enum SEMVER {
  major = 'major',
  premajor = 'premajor',
  minor = 'minor',
  preminor = 'preminor',
  patch = 'patch',
  prepatch = 'prepatch',
  noVersion = ''
}

const npmOptions: INpmConfig = {
  subPackageChangelogs: true,
  monorepoChangelog: true
};

/** Auto configuration */
export default function rc(): AutoRc {
  return {
    noVersionPrefix: true,
    noDefaultLabels: true,
    plugins: [
      'released',
      ['npm', npmOptions],
    ],
    labels: [
      {
        name: 'semver/major',
        changelogTitle: '💥 Breaking Change',
        description: 'Increment the major version when merged',
        releaseType: SEMVER.major,
        color: '#C5000B',
        overwrite: true
      },
      {
        name: 'semver/minor',
        changelogTitle: '🚀 Enhancement',
        description: 'Increment the minor version when merged',
        releaseType: SEMVER.minor,
        color: '#F1A60E',
        overwrite: true
      },
      {
        name: 'semver/patch',
        changelogTitle: '🐛 Bug Fix',
        description: 'Increment the patch version when merged',
        releaseType: SEMVER.patch,
        color: '#870048',
        overwrite: true
      }
    ]
  };
}
