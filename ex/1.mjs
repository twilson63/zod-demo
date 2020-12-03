import * as z from 'zod';

// primitive values
z.string();
z.number();
z.bigint();
z.boolean();
z.date();

// empty types
z.undefined();
z.null();
z.void();

// catch-all types
z.any();
z.unknown();


