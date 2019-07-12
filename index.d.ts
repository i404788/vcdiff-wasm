export type Encoder = (dict: Uint8Array, target: Uint8Array) => Uint8Array
export type Decoder = (dict: Uint8Array, delta: Uint8Array) => Uint8Array

export default function (): Promise<{ encoder: Encoder, decoder: Decoder }>