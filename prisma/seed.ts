import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.userLanguage.createMany({
    data: [
      { name: "Alice", email: "alice@test.com", languages: "English", age: 25 },
      { name: "Bob", email: "bob@test.com", languages: "Spanish", age: 17 },
      { name: "David", email: "david@test.com", languages: "German", age: 22 },
      { name: "Frank", email: "frank@test.com", languages: "English", age: 15 },
      { name: "Ivan", email: "ivan@test.com", languages: "Russian", age: 40 },
      { name: "Julia", email: "julia@test.com", languages: "English", age: 21 },
    ],
  });
}

seed().then(() => prisma.$disconnect);
