import { fn } from '../fn';

test('add : a, b인자를 받아서 합한 값을 리턴', ()=> {
  // fn.add(1, 2)를 하면 3이 될거라 기대한다.
  expect(fn.add(1, 2)).toBe(3)
})

test('make user: 이름과 나이를 전달받아서 객체를 반환', ()=>{
  // 이렇게 객체를 만드는 경우에는 toBe를 쓰면 false가 나온다.
  // 객체는 depth가 깊을 수 있기 때문에 재귀적으로 들어가는 toEqual/toStrictEqual을 toBe대신 써줘야 한다
  expect(fn.makeUser("Mike", 25)).toEqual({
  // expect(fn.makeUser("Mike", 25)).toBe({ // X
    name: "Mike",
    age: 25
  })
})

// it('name is Mike', done => {
//   // async 1. done()
//   fn.getName((name) => {
//     expect(name).toBe("Mike");
//     done();
//   });
// })
// it('age is 30', () => {
//   // async 2. Promise()
//   return fn.getAge().then(age => {
//     expect(age).toBe(30);
//   });
// })

// it('age is 30', async () => {
//   // async 3. async/await
// 	await expect(fn.getAge()).resolves.toBe(30)
// });

// let num = 1; 
// test('1+1 = 2', () => {
//   num = fn.add(num, 1)
//   expect(num).toBe(2)
// })
// test('1+2 = 3', () => {
//   fn.add(num, 2)
//   expect(num).toBe(3)
// })

// beforeEach

// let num;
// beforeEach(()=>{
//   num = 1;
// })
// test('1+1 = 2', () => {
//   num = fn.add(num, 1)
//   expect(num).toBe(2)
// })
// test('1+2 = 3', () => {
//   num = fn.add(num, 2)
//   expect(num).toBe(3)
// })

// // beforeAll/afterAll
// let user;
// beforeAll(async()=>{
//   user = await fn.connectUserDB();
// })

// afterAll(async () => {
//   return await fn.disConnectUserDB();
// })

// test('User name is Mike', () => {
//   expect(user.name).toBe("Mike")
// })
// test('Mike is 30', () => {
//   expect(user.age).toBe(30)
// })

// mockFn
// function forEach(items, callback) {
//   for (let index = 0; index < items.length; index++) {
//     callback(items[index]);
//   }
// }
// const mockCallback = jest.fn(x => 42 + x);

// mockCallback(0);
// mockCallback(1);
// // The mock function is called twice
// test('1', ()=>{
//   expect(mockCallback.mock.calls.length).toBe(2);
// })

// test('2', ()=>{
//   // The first argument of the first call to the function was 0
//   expect(mockCallback.mock.calls[0][0]).toBe(0);
// })
// test('3', ()=>{
//   expect(mockCallback.mock.calls[1][0]).toBe(1);
//   // The first argument of the second call to the function was 1
// })

// test('4', ()=>{
//   // The return value of the first call to the function was 42
//   expect(mockCallback.mock.results[0].value).toBe(42);
// })

// jest.mock('../fn')
// fn.connectUserDB().mockReturnValue({name: "Mike", age: 30})
// test('test', async ()=>{
//   const user = await fn.connectUserDB();
//   expect(user.name).toEqual("Mike");
// })