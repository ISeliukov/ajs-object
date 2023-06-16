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
    let res = -1;
    if (b.key === arr[0] || (b.key === arr[1])) {
      res = 1;
    } else if ((a.key === arr[0]) || (a.key === arr[1])) {
      res = -1;
    } else if (a.key > b.key) {
      res = 1;
    } else { // if (a.key < b.key) {
      res = -1;
    }
    return res;
  });
  return arrsort;
}

export function getAttack({ special, ...otherParams } = {}) {
  const mas = [];
  for (let i = 0; i < special.length; i += 1) {
    //    const attributes = mas[i];
    //    console.log(attributes);
    // if (Object.prototype.hasOwnProperty.call(attributes, 'desription') === false) {
    //  attributes.desription = 'Описание недоступно';
    // }
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[i];
    console.log(id, name, icon, description);
    mas.push({
      id,
      name,
      icon,
      description,
    });
  }
  console.log(otherParams);

  return mas;
}

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

const mas = orderByProps(obj, ['name', 'level']);
console.log(mas);
const masatck = getAttack(character);
console.log(masatck);
