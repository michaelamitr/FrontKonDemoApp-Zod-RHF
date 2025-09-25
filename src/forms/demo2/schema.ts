import z from 'zod';

const roomTypes = ['single', 'double', 'suite'] as const;

export const bookingFormSchema = z.object({
  fullName: z.string().nonempty('Vyplňte prosím toto pole.'),
  email: z.email('Zadejte platný email.').nonempty(),
  phone: z.string().nonempty(),
  roomType: z.enum(roomTypes),
});

export type bookingFormValues = z.infer<typeof bookingFormSchema>;
