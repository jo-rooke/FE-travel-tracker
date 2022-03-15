import sanitiseTimestamp from "../utils/sanitiseTimestamp";

test("Returns a single user object with the corresponding ID", () => {
  expect(sanitiseTimestamp("2022-01-07T11:19:55.556Z")).toBeDefined();
  expect(sanitiseTimestamp("2022-01-07T11:19:55.556Z")).toMatch(
    /[0-2][0-9]:[0-9][0-9], [0-3][0-9]-[0-1][0-9]-[0-2][0-9][0-9][0-9]/
  );
  expect(sanitiseTimestamp("2022-01-07T11:19:55.556Z")).toStrictEqual(
    "11:19, 07-01-2022"
  );
});
