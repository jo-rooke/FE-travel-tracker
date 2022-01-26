import IUser from "../interfaces/IUser";

export default function getFullUser(userArr: IUser[], id: number): IUser {
  return userArr.filter((user) => user.id === id)[0];
}
