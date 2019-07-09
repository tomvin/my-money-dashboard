module.exports = {
  name: 'my-money-dashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/my-money-dashboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
