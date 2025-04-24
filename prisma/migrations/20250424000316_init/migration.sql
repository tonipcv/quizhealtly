-- CreateTable
CREATE TABLE "QuizResponse" (
    "id" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "answers" JSONB,
    "hasPurchased" BOOLEAN NOT NULL DEFAULT false,
    "purchaseDate" TIMESTAMP(3),
    "planType" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,

    CONSTRAINT "QuizResponse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "QuizResponse_whatsapp_idx" ON "QuizResponse"("whatsapp");

-- CreateIndex
CREATE INDEX "QuizResponse_createdAt_idx" ON "QuizResponse"("createdAt");
