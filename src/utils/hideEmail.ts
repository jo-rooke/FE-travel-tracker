export default function hideEmail(fullEmail: string): string {
  const splitEmail = fullEmail.split("@");
  let visible;
  let starredOut;
  if (splitEmail[0].length > 5) {
    visible = splitEmail[0].slice(0, -5);
    starredOut = splitEmail[0].slice(-5);
  } else {
    visible = splitEmail[0].slice(0, 1);
    starredOut = splitEmail[0].slice(1);
  }
  const stars = [];
  for (let letter of starredOut) {
    letter = "*";
    stars.push(letter);
  }
  const tail = `@${splitEmail[1]}`;
  return `${visible}${stars.join("")}${tail}`;
}
