export const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age)=> ({
    name,
    age
  }),
  getName: (callback) => {
    const name = "Mike";
    setTimeout(()=> {
      callback(name)
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(age)
      }, 3000);
    })
  },
  connectUserDB: () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve({
          name: "Mike",
          age: 30
        })
      }, 3000)
    })
  },
  disConnectUserDB: () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve()
      }, 3000)
    })
  }
}
