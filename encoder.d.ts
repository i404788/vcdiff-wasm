export type Encoder = (dict: Uint8Array, target: Uint8Array) => Uint8Array
export default function (): Promise<Encoder>