export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

export function orderByProps(obj, arr) {
  const masprop = [];

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      masprop.push({ key: prop, value: obj[prop] });
    }
  }

  const arrsort = masprop.sort((a, b) => {
    let res = 0;
    if (b.key === arr[0] || (b.key === arr[1])) {
      res = 1;
    } else if ((a.key === arr[0]) || (a.key === arr[1])) {
      res = -1;
    } else if (a.key > b.key) {
      res = 1;
    } else if (a.key < b.key) {
      res = -1;
    } else {
      res = -1;
    }
    return res;
  });
  return arrsort;
}

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const mas = orderByProps(obj, ['name', 'level']);
console.log(mas);
