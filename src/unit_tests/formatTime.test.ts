import formatTime from "../utils/formatTime";

test("Convert timestamp to human readable date and time", () => {
  expect(formatTime("2022-01-07T11:19:55.556Z")).toMatch(
    /[0-2][0-9]:[0-9][0-9]/
  );
  expect(formatTime("2022-01-07T23:19:55.556Z")).toStrictEqual("23:19");
  expect(formatTime("1999-04-19T18:16:55.556Z")).toStrictEqual("18:16");
  expect(formatTime("2022-12-25T04:45.556Z")).toStrictEqual("04:45");
});
