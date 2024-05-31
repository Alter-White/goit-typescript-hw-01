// const objA = { name: "John" };
// const objB = { age: 25 };

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

// const mergedObj = merge(objA, objB);
// console.log(mergedObj);
