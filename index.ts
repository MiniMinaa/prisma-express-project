import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/userlanguages", async (req, res) => {
  try {
    const users = await prisma.userLanguage.findMany();
    res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
    res.status(500).send("Unknown error");
  }
});

app.get("/userlanguages/:language", async (req, res) => {
  const { language } = req.params;
  const users = await prisma.userLanguage.findMany({
    where: {
      languages: {
        contains: language,
      },
    },
  });

  res.json(users);
});

app.post("/userlanguages", async (req, res) => {
  const { name, email, languages, age } = req.body;
  const user = await prisma.userLanguage.create({
    data: { name, email, languages, age },
  });

  res.json(user);
});

app.put("/userlanguages/:email", async (req, res) => {
  const { email } = req.params;
  const { languages } = req.body;
  const user = await prisma.userLanguage.update({
    where: { email },
    data: { languages },
  });
  res.json(user);
});

app.delete("/userlanguages/underage", async (req, res) => {
  const result = await prisma.userLanguage.deleteMany({
    where: {
      age: {
        lt: 18,
      },
    },
  });

  res.json({
    message: `${result.count} users deleted`,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
