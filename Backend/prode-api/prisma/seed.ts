import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const teamData: Prisma.TeamsCreateInput[]= [
    {
        name: "Argentina",
        flag: "🇦🇷"
    },
    {
        name: "Australia",
        flag: "🇦🇺"
    },
    {
        name: "Belgium",
        flag: "🇧🇪"
    },
    {
        name: "Brazil",
        flag: "🇧🇷"
    },
    {
        name: "Croatia",
        flag: "🇭🇷"
    },
    {
        name: "Canada",
        flag: "🇨🇦"
    },
    {
        name: "Cameroon",
        flag: "🇨🇲"
    },
    {
        name: "Costa Rica",
        flag: "🇨🇷"
    },
    {
        name: "Denmark",
        flag: "🇩🇰"
    },
    {
        name: "Ecuador",
        flag: "🇪🇨"
    },
    {
        name: "England",
        flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
    },
    {
        name: "France",
        flag: "🇫🇷"
    },
    {
        name: "Germany",
        flag: "🇩🇪"
    },
    {
        name: "Ghana",
        flag: "🇬🇭"
    },
    {
        name: "Iran",
        flag: "🇮🇷"
    },
    {
        name: "Japan",
        flag: "🇯🇵"
    },
    {
        name: "Korea",
        flag: "🇰🇷"
    },
    {
        name: "Mexico",
        flag: "🇲🇽"
    },
    {   
        name: "Morocco",
        flag: "🇲🇦"
    },
    {
        name: "Netherlands",
        flag: "🇳🇱"
    },
    {
        name: "Poland",
        flag: "🇵🇱",
    },
    {
        name: "Portugal",
        flag: "🇵🇹"
    },
    {
        name: "Qatar",
        flag: "🇶🇦"
    },
    {
        name: "Saudi Arabia",
        flag: "🇸🇦"
    },
    {
        name: "Senegal",
        flag: "🇸🇳"
    },
    {
        name: "Serbia",
        flag: "🇷🇸"
    },
    {
        name: "Spain",
        flag: "🇪🇸"
    },
    {
        name: "Switzerland",
        flag: "🇨🇭"
    },
    {
        name: "Tunisia",
        flag: "🇹🇳"
    },
    {
        name: "Uruguay",
        flag: "🇺🇾"
    },
    {
        name: "USA",
        flag: "🇺🇸"
    },
    {
        name: "Wales",
        flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
    }
];

async function main() {
    console.log(`Start seeding... 🌱`)
    /*
    if (await prisma.teams.count() > 0) {
        console.log(`Teams already seeded.`)
        return;
    }
    */
   
    for (const team of teamData) {
        await prisma.teams.create({
            data: team
        });
        console.log(`Created team ${team.flag}}`)
    }
    console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })