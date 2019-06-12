# Regular Usage

```
const encoder = require('vcdiff-wasm/encoder')
const base = Buffer.from('abc')
const delta = encoder(base, Buffer.from('defabcfhi'))

const decoder = require('vcdiff-wasm/decoder')
const target = decoder(base, delta)
```