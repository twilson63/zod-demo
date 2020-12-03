import * as z from 'zod'

// Promises

const numberPromise = z.promise(z.number());

// numberPromise.parse('tuna');
// // ZodError: Non-Promise type: string

// numberPromise.parse(Promise.resolve('tuna'));
// // => Promise<number>

// const test = async () => {
//   await numberPromise.parse(Promise.resolve('tuna'));
//   // ZodError: Non-number type: string

//   await numberPromise.parse(Promise.resolve(3.14));
//   // => 3.14
// };