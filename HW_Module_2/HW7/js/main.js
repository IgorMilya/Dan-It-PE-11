const filterBy = (array, dataType) => {
    let newArray = array.filter(value => typeof value !== dataType);
    console.log(newArray);
}

filterBy(['hello', 'world', 23, '23', null], 'string');


//1. Опишіть своїми словами як працює метод forEach.
//2. Як очистити масив?
//3. Як можна перевірити, що та чи інша змінна є масивом?


//1. Это улучшенная версия for ... of. Это когда мы делаем то количество действий, сколько у нас элементов

//2. Через 1. [], 2. Array.length, 3. Array.splice()
//   1. let array = [1,0,7,8];
//      array = [];
//   2. let array = [1,0,7,8];
//      array.length = 0;
//   3. let array = [1,0,7,8];
//      array.splice(0, arr.length);

//3. Array.isArray()
