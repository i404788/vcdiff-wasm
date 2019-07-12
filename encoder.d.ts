type encoder = (dict: Uint8Array, target: Uint8Array) => Uint8Array
export default function (): Promise<encoder>