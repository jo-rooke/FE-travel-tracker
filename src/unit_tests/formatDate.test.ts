import formatDate from "../utils/formatDate";

test("Convert timestamp to human readable date and time", () => {
  expect(formatDate("2022-01-07T11:19:55.556Z")).toMatch(
    /[0-3][0-9]-[0-1][0-9]-[0-2][0-9][0-9][0-9]/
  );
  expect(formatDate("2022-01-07T23:19:55.556Z")).toStrictEqual("07-01-2022");
  expect(formatDate("1999-04-19T18:16:55.556Z")).toStrictEqual("19-04-1999");
  expect(formatDate("2022-12-25T04:45.556Z")).toStrictEqual("25-12-2022");
});
