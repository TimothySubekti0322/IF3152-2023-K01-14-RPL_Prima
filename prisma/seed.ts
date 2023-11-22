import { PrismaClient } from "@prisma/client";
import Class from "./seed/classData";
import User from "./seed/userData";
import Instructor from "./seed/instructorData";
import Student from "./seed/studentData";
import Vehicle from "./seed/vehicleData";

const prisma = new PrismaClient();

// Vehicle Data

async function main() {
  const classSeeds = Class.map(async (data) => {
    const classData = await prisma.class.create({
      data,
    });
    return classData;
  });

  const userSeeds = User.map(async (data) => {
    const userData = await prisma.user.create({
      data,
    });
    return userData;
  });

  const instructorSeeds = Instructor.map(async (data) => {
    const instructorData = await prisma.instructor.create({
      data,
    });
    return instructorData;
  });

  const studentSeeds = Student.map(async (data) => {
    const studentData = await prisma.student.create({
      data,
    });
    return studentData;
  });

  const vehicleSeeds = Vehicle.map(async (data) => {
    const vehicleData = await prisma.vehicle.create({
      data,
    });
    return vehicleData;
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
