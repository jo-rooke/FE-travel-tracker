import hideEmail from "../utils/hideEmail";

test("starrs out some of the email user for privacy", () => {
  expect(hideEmail("joely.email@gmail.com")).toStrictEqual(
    "joely.*****@gmail.com"
  ); //tests long emails
  expect(hideEmail("joely@gmail.com")).toStrictEqual("j****@gmail.com"); // tests short emails
});
