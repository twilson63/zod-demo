import * as z from 'zod'

// string validations

z.string().min(5);
z.string().max(5);
z.string().length(5);
z.string().email();
z.string().url();
z.string().uuid();
z.string().regex(/^regex expression$/);


// number validations
z.string().min(5, { message: 'Must be 5 or more characters long' });
z.string().max(5, { message: 'Must be 5 or fewer characters long' });
z.string().length(5, { message: 'Must be exactly 5 characters long' });
z.string().email({ message: 'Invalid email address.' });
z.string().url({ message: 'Invalid url' });
z.string().uuid({ message: 'Invalid UUID' });

