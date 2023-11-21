-- CreateTable
CREATE TABLE "Instruktur" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Instruktur_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instruktur_nik_key" ON "Instruktur"("nik");
