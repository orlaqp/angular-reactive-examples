module.exports = {
  name: 'typeahead-reactive',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/typeahead/reactive',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
