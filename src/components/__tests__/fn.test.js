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

/*
 Jest Matchers
 #1. Boolean 
 - toBeNull
 - toBeUndefined
 - toBeDefined

 #2. Falsy/Truthy
 - toBeFalsy
 - toBeTruthy

 #3. 대소비교
 - toBeGreaterThan (크다)
 - toBeGreaterThanOrEqual (크거나 같다)
 - toBeLessThan
 - toBeLessThanOrEqual

 #4. epsilon check
 - toBeCloseTo // ex: add(0.1, 0.2).toBeCloseTo(0.3) -> true (toBe(0,3) -> false)

*/ 
