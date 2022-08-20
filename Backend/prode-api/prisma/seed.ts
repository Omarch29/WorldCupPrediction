import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const teamData: Prisma.TeamCreateInput[]= [
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

const matches1Data: Prisma.MatchCreateInput[] = 
[
    {
        time: "2022-11-21T07:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇸🇳" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇳🇱" } },
        stage: "Matchday 1",
        group: "A"
    },
    {
        time: "2022-11-21T13:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇶🇦" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇪🇨" } },
        stage: "Matchday 1",
        group: "A"
    },
    {
        time: "2022-11-21T10:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇮🇷" } },
        stage: "Matchday 1",
        group: "B",
    },
    {
        time: "2022-11-21T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇺🇸" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" } },
        stage: "Matchday 1",
        group: "B",
    },
    {
        time: "2022-11-22T07:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇦🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇸🇦" } },
        stage: "Matchday 1",
        group: "C",
    },
    {
        time: "2022-11-22T13:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇲🇽" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇵🇱" } },
        stage: "Matchday 1",
        group: "C",
    },
    {
        time: "2022-11-22T10:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇩🇰" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇹🇳" } },
        stage: "Matchday 1",
        group: "D",
    },
    {
        time: "2022-11-22T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇫🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇦🇺" } },
        stage: "Matchday 1",
        group: "D",
    },
    {
        time: "2022-11-23T07:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇲🇦" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇭🇷" } },
        stage: "Matchday 1",
        group: "F",
    },
    {
        time: "2022-11-23T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇧🇪" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇨🇦" } },
        stage: "Matchday 1",
        group: "F",
    },
    {
        time: "2022-11-23T10:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇩🇪" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇯🇵" } },
        stage: "Matchday 1",
        group: "E",
    },
    {
        time: "2022-11-23T13:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇪🇸" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇨🇷" } },
        stage: "Matchday 1",
        group: "E",
    },
    {
        time: "2022-11-24T07:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇨🇭" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇨🇲" } },
        stage: "Matchday 1",
        group: "G",
    },
    {
        time: "2022-11-24T13:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇵🇹" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇬🇭" } },
        stage: "Matchday 1",
        group: "H",
    },
    {
        time: "2022-11-24T10:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇺🇾" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇰🇷" } },
        stage: "Matchday 1",
        group: "H",
    },
    {
        time: "2022-11-24T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇧🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇷🇸" } },
        stage: "Matchday 1",
        group: "G",
    },
];

const matches2Data: Prisma.MatchCreateInput[] = 
[
    {
        time: "2022-11-25T07:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇮🇷" } },
        stage: "Matchday 2",
        group: "B"
    },
    {
        time: "2022-11-25T13:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇳🇱" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇪🇨" } },
        stage: "Matchday 2",
        group: "A"
    },
    {
        time: "2022-11-25T10:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇶🇦" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇸🇳" } },
        stage: "Matchday 2",
        group: "A",
    },
    {
        time: "2022-11-25T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇺🇸" } },
        stage: "Matchday 2",
        group: "B",
    },
    {
        time: "2022-11-26T07:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇹🇳" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇦🇺" } },
        stage: "Matchday 2",
        group: "D",
    },
    {
        time: "2022-11-26T13:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇫🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇩🇰" } },
        stage: "Matchday 2",
        group: "D",
    },
    {
        time: "2022-11-26T10:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇵🇱" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇸🇦" } },
        stage: "Matchday 2",
        group: "C",
    },
    {
        time: "2022-11-26T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇦🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇲🇽" } },
        stage: "Matchday 2",
        group: "C",
    },
    {
        time: "2022-11-27T07:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇯🇵" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇨🇷" } },
        stage: "Matchday 2",
        group: "E",
    },
    {
        time: "2022-11-27T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇩🇪" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇪🇸" } },
        stage: "Matchday 2",
        group: "E",
    },
    {
        time: "2022-11-27T10:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇧🇪" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇲🇦" } },
        stage: "Matchday 2",
        group: "F",
    },
    {
        time: "2022-11-27T13:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇭🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇨🇦" } },
        stage: "Matchday 2",
        group: "F",
    },
    {
        time: "2022-11-28T07:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇨🇲" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇷🇸" } },
        stage: "Matchday 2",
        group: "G",
    },
    {
        time: "2022-11-28T13:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇧🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇨🇭" } },
        stage: "Matchday 2",
        group: "G",
    },
    {
        time: "2022-11-28T10:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇰🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇬🇭" } },
        stage: "Matchday 2",
        group: "H",
    },
    {
        time: "2022-11-28T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇵🇹" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇺🇾" } },
        stage: "Matchday 2",
        group: "H",
    },
];

const matches3Data: Prisma.MatchCreateInput[] = 
[
    {
        time: "2022-11-29T12:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇪🇨" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇸🇳" } },
        stage: "Matchday 3",
        group: "A"
    },
    {
        time: "2022-11-29T12:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇳🇱" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇶🇦" } },
        stage: "Matchday 3",
        group: "A"
    },
    {
        time: "2022-11-29T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇮🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇺🇸" } },
        stage: "Matchday 3",
        group: "B",
    },
    {
        time: "2022-11-29T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" } },
        stage: "Matchday 3",
        group: "B",
    },
    {
        time: "2022-11-30T12:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇹🇳" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇫🇷" } },
        stage: "Matchday 3",
        group: "D",
    },
    {
        time: "2022-11-30T12:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇦🇺" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇩🇰" } },
        stage: "Matchday 3",
        group: "D",
    },
    {
        time: "2022-11-30T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇵🇱" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇦🇷" } },
        stage: "Matchday 3",
        group: "C",
    },
    {
        time: "2022-11-30T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇸🇦" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇲🇽" } },
        stage: "Matchday 3",
        group: "C",
    },
    {
        time: "2022-12-01T12:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇭🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇧🇪" } },
        stage: "Matchday 3",
        group: "F",
    },
    {
        time: "2022-12-01T12:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇨🇦" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇲🇦" } },
        stage: "Matchday 3",
        group: "F",
    },
    {
        time: "2022-12-01T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇯🇵" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇪🇸" } },
        stage: "Matchday 3",
        group: "E",
    },
    {
        time: "2022-12-01T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇨🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇩🇪" } },
        stage: "Matchday 3",
        group: "E",
    },
    {
        time: "2022-12-02T12:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇰🇷" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇵🇹" } },
        stage: "Matchday 3",
        group: "H",
    },
    {
        time: "2022-12-02T12:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇬🇭" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇺🇾" } },
        stage: "Matchday 3",
        group: "H",
    },
    {
        time: "2022-12-02T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇷🇸" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇨🇭" } },
        stage: "Matchday 3",
        group: "G",
    },
    {
        time: "2022-12-02T16:00:00.000Z",
        playoffs: false,
        Team_Match_teamA_idToTeam: { connect: { flag: "🇨🇲" } },
        Team_Match_teamB_idToTeam: { connect: { flag: "🇧🇷" } },
        stage: "Matchday 3",
        group: "G",
    },
];





async function main() {
    console.log(`Start seeding... 🌱`);
    if (await prisma.team.count() > 0) {
        console.log(`Teams already seeded.`)
    } else {
        for (const t of teamData) {
            const team = await prisma.team.create({
                data: t
            });
            console.log(`Created team ${team.flag} with id: ${team.id}`);
        }
    }

    if (await prisma.match.count() > 0) {
        console.log(`Matches already seeded.`)
    } else {
        const matchData = [...matches1Data, ...matches2Data, ...matches3Data];
        for (const m of matchData) {
            const match = await prisma.match.create({
                data: m
            });
            console.log(`Created match ${match.teamA_id} vs ${match.teamB_id} with id: ${match.id}`);
        }
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