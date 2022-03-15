import getFullUser from "../utils/getFullUser";

test("Returns a single user object with the corresponding ID", () => {
  const allUsers = [
    { id: 1, name: "Veta", email: "veta@gmail.com", phone: "phone1" },
    { id: 2, name: "Linus", email: "linusgel@hotmail.com", phone: "phone2" },
    { id: 3, name: "Faith", email: "fod@gmail.com", phone: "phone3" },
    { id: 4, name: "Jo", email: "jo@rooke.com", phone: "phone4" },
  ];
  expect(getFullUser(allUsers, 1)).toBeDefined();
  expect(getFullUser(allUsers, 1)).toHaveProperty("id");
  expect(getFullUser(allUsers, 1)).toHaveProperty("name");
  expect(getFullUser(allUsers, 1)).toHaveProperty("phone");
  expect(getFullUser(allUsers, 1)).toHaveProperty("email");
  expect(getFullUser(allUsers, 1)).toStrictEqual({
    id: 1,
    name: "Veta",
    email: "veta@gmail.com",
    phone: "phone1",
  });
  expect(getFullUser(allUsers, 2)).toStrictEqual({
    id: 2,
    name: "Linus",
    email: "linusgel@hotmail.com",
    phone: "phone2",
  });
});
