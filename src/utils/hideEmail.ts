export default function hideEmail(fullEmail: string): string {
  const splitEmail = fullEmail.split("@"); //
  const first6 = fullEmail.slice(0, 6);
  const starredOut = splitEmail[0].slice(6);
  const stars = [];
  for (let letter of starredOut) {
    letter = "*";
    stars.push(letter);
  }
  const tail = `@${splitEmail[1]}`;

  return `${first6}${stars.join("")}${tail}`;
}
