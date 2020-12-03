import * as z from 'zod'

// objects

const contact = z.object({ 
  name: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string().max(2),
    zip: z.string()
  }),
  email: z.string().email()
                         })

// parse example

// contact.safeParse({
//   name: 'Tom Wilson',
//   address: {
//     street: '123 main street',
//     city: 'Charleston', 
//     state: 'SC'
//   }
// })