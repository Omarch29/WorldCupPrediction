-- CreateTable
CREATE TABLE "Matches" (
    "id" SERIAL NOT NULL,
    "teamA_id" INTEGER,
    "teamB_id" INTEGER,
    "time" TIMESTAMP(6) NOT NULL,
    "TeamA_Score" INTEGER NOT NULL,
    "TeamB_Score" INTEGER NOT NULL,
    "TeamA_penalties" INTEGER,
    "TeamB_penalties" INTEGER,
    "playoffs" BOOLEAN NOT NULL,

    CONSTRAINT "Matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "flag" TEXT,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guesses" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "match_id" INTEGER NOT NULL,
    "Team_winner" TEXT NOT NULL,
    "Team_a_score" INTEGER NOT NULL,
    "Team_b_score" INTEGER NOT NULL,
    "time" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Guesses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "username" TEXT,
    "password" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teams_name_key" ON "Teams"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_teamA_id_fkey" FOREIGN KEY ("teamA_id") REFERENCES "Teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_teamB_id_fkey" FOREIGN KEY ("teamB_id") REFERENCES "Teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Guesses" ADD CONSTRAINT "match_guess" FOREIGN KEY ("match_id") REFERENCES "Matches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Guesses" ADD CONSTRAINT "user_guesses" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
