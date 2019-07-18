const assert = require('assert')

void (async function testvcdiff () {
  const { encoder, decoder } = await require('../index')()

  const delta = encoder(Buffer.from('abc'), Buffer.from('defabcfhi'))
  const target = decoder(Buffer.from('abc'), delta)
  assert.deepEqual(target, Buffer.from('defabcfhi'))
  console.log('[+] Basic encode/decode test')
})()