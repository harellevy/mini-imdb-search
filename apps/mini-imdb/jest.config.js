module.exports = {
  name: 'mini-imdb',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mini-imdb',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
