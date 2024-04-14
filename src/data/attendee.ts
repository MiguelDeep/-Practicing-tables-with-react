import { faker } from '@faker-js/faker';

export const attendee = Array.from({length: 212 }).map(()=>{
  return {
    id:faker.number.int({min:2003, max:100000000}),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    createdAt: faker.date.recent({days:30}),
    checkedInAt: faker.date.recent({days: 7})
  }
})

