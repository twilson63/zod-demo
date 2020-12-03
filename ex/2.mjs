import * as z from 'zod'
// parsing

const s = z.string()

// s.parse('hello')
// s.parse(63)

// s.safeParse('hello')
// s.safeParse(63)

//----- custom validation

const s1 = z.string().refine(
  v => v.length < 3, 
  { message: 'string cant be more than 2 characters.'}
)

//s1.parse('AB')
