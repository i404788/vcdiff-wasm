export type Decoder = (dict: Uint8Array, delta: Uint8Array) => Uint8Array
export default function (): Promise<Decoder>