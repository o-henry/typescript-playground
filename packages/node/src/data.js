import faker from "@faker-js/faker";

faker.seed(1000);

let people = [];

for (let i = 0; i < 1000; i++) {
  let f_name = faker.name.firstName();
  let l_name = faker.name.lastName();

  let ob = {
    first_name: f_name,
    last_name: l_name,
    email: faker.internet.email(f_name, l_name),
    phone: faker.phone.phoneNumber(),
    job_title: faker.name.jobTitle(),
  };

  people.push(ob);
}
