var version = require('./')
var test = require('tape')

test('a regex for GLSL version statements', function (t) {
  t.equal(version.test('#version 300'), true)
  t.equal(version.test('#version 300 blah // special'), true)
  t.equal(version.test('#version 330'), true)
  t.equal(version.exec('#version 300 es // comment')[1], '300 es')
  t.equal(version.exec('#version 300 special // comment')[1], '300 special')
  t.equal(version.test('#version'), false)
  t.end()
})
