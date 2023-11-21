-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "plate" TEXT NOT NULL,
    "vehicleType" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,
    "lastService" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'available',

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);
