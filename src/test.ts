type StringOrNum = string | number;
type ObjWithName = { uid: StringOrNum; name: string };

const logDetails = (uid: StringOrNum, items: []) => {
  console.log(`${items} has a uid of ${uid}`);
};

const greet = (user: ObjWithName, item: []) => {
  console.log(`${item} has a uid and name of ${uid}, ${name}`);
};

const calc = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};