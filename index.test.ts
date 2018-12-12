const sweetch = require("./");

const cases = [["a", 1], ["b", 2]];

test("sweetch basics", () => {
  expect(sweetch("a", ...cases)).toBe(1);
  expect(sweetch("x", ...cases)).toBe(null);
  expect(sweetch("x", ...cases, "default")).toBe("default");
});
