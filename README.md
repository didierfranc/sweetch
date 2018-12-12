# sweetch 🎛

Switch as a function, you will be able to use it everywhere, mostly when native switch will produce syntax errors.

```js
import sweetch from "sweetch";

const result = sweetch(
  key,
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
  ["e", 5],
  "default"
);

// if key === "a" result will be 1
```
