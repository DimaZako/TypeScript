const greeting: string = "Привіт, світ!";
const age: number = 15;
const isActive: boolean = true;

interface User {
  name: string;
  age: number;
  active: boolean;
}

const user: User = {
  name: "Дмитро",
  age: 20,
  active: true
};

console.log(greeting);
console.log(`Користувач ${user.name} має ${user.age} років. Активний: ${user.active}`);
