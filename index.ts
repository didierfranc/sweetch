type Scalar = string | number | boolean;

type Key = Scalar;
type Value = Scalar | {} | null;
type Case = [Key, Value];

const typesOfValues = ["string", "number", "boolean", "object"];

export default function sweetch(
  key: Key,
  ...cases: Array<Case | Value>
): Value {
  const result: Case | Value = cases.find(e => e[0] === key);

  if (result && result[1]) return result[1];

  const defaultValue: Value = cases[cases.length - 1];
  return typesOfValues.includes(typeof defaultValue) ? defaultValue : null;
}

module.exports = sweetch;
