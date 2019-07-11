## Example

```js
async function testvcdiff () {
    const { encoder, decoder } = await require('vcdiff-wasm')()

    const delta = encoder(Buffer.from('abc'), Buffer.from('defabcfhi'))
    console.log(delta)

    const target = decoder(Buffer.from('abc'), delta)
    console.log(target)
}
```

## Only de/encoder
```js
async function onlyencoder () {
    const encoder = await require('vcdiff-wasm/encoder')()
    return encoder(Buffer.from('abc'), Buffer.from('defabcfhi'))
}

async function onlydecoder () {
    const decoder = await require('vcdiff-wasm/decoder')()
    return decoder(Buffer.from('abc'), delta)
}
```
