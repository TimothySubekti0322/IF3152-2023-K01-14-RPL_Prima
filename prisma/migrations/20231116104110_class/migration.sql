-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL,
    "session" INTEGER NOT NULL,
    "transmission" TEXT NOT NULL,
    "vehicleType" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);
