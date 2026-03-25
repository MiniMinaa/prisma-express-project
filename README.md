# prisma-express-project

How to run:
npm install
npx prisma migrate dev
npx prisma db seed
node index.ts
Routes
GET /userlanguages

Returns all users

GET /userlanguages/

Returns users filtered by language

POST /userlanguages

Creates a new user

PUT /userlanguages/

Updates user languages

DELETE /userlanguages/underage

Deletes all users under 18

Features
Prisma ORM
Express API
Seeded database
