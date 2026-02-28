-- CreateEnum
CREATE TYPE "CompanyStatus" AS ENUM ('DRAFT', 'SUBMITTED');

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "numberOfShareholders" INTEGER NOT NULL,
    "totalCapitalInvested" DECIMAL(18,2) NOT NULL,
    "status" "CompanyStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shareholder" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shareholder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Shareholder_companyId_idx" ON "Shareholder"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "Shareholder_companyId_firstName_lastName_key" ON "Shareholder"("companyId", "firstName", "lastName");

-- AddForeignKey
ALTER TABLE "Shareholder" ADD CONSTRAINT "Shareholder_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
