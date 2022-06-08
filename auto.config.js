const npmOptions = {
  subPackageChangelogs: true,
  monorepoChangelog: true
};

module.exports = function rc() {
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
        releaseType: 'major',
        color: '#C5000B',
        overwrite: true
      },
      {
        name: 'semver/minor',
        changelogTitle: '🚀 Enhancement',
        description: 'Increment the minor version when merged',
        releaseType: 'minor',
        color: '#F1A60E',
        overwrite: true
      },
      {
        name: 'semver/patch',
        changelogTitle: '🐛 Bug Fix',
        description: 'Increment the patch version when merged',
        releaseType: 'patch',
        color: '#870048',
        overwrite: true
      }
    ]
  };
}
