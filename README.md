# Regular Usage

```
async function testvcdiff () {
    const encoder = await require('vcdiff-wasm/encoder')()
    const decoder = await require('vcdiff-wasm/decoder')()

    const delta = encoder(Buffer.from('abc'), Buffer.from('defabcfhi'))
    console.log(delta)

    const target = decoder(Buffer.from('abc'), delta)
    console.log(target)
}
```