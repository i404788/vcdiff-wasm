type encoder = (dict: Uint8Array, target: Uint8Array) => Uint8Array
type decoder = (dict: Uint8Array, delta: Uint8Array) => Uint8Array

export default function (): Promise<{ encoder: encoder, decoder: decoder }>