import {orderByProps, getAttack} from '../basic.js';



test("basic test", () => {
    let result = 4;
    expect(result).toBe(4);
});

test("prop sort test", () => {
    let result = orderByProps({name: '������', health: 10, level: 2, attack: 80, defence: 40},  ["name", "level"]);

    expect(result).toEqual([
      {key: "name", value: "������"},
      {key: "level", value: 2},
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10}]);

    result = orderByProps({name: '������', health: 10, level: 2, defence: 40, attack: 80},  ["name", "level"]);

    expect(result).toEqual([
      {key: "name", value: "������"},
      {key: "level", value: 2},
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10}]);
});

test("description test", () => {

    let result = getAttack ({
      name: '������',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 9,
          name: '������������� ����',
          icon: 'http://...',
          // <- �������� ��������, �������� "�����������"
        },
      ],});
    
      console.log(result);

      expect(result[0].desription).toEqual('�������� ����������');
});
