-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "Word" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "german" TEXT NOT NULL,
    "spanish" TEXT NOT NULL,
    "pronunciation" TEXT,
    "invAsociation" TEXT,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToWord" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Word_german_spanish_key" ON "Word"("german", "spanish");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToWord_AB_unique" ON "_CategoryToWord"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToWord_B_index" ON "_CategoryToWord"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToWord" ADD CONSTRAINT "_CategoryToWord_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToWord" ADD CONSTRAINT "_CategoryToWord_B_fkey" FOREIGN KEY ("B") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;
