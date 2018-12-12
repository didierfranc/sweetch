declare type Scalar = string | number | boolean;
declare type Key = Scalar;
declare type Value = Scalar | {} | null;
declare type Case = [Key, Value];
export default function sweetch(key: Key, ...cases: Array<Case | Value>): Value;
export {};
