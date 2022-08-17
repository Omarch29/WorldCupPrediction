export class createGuessDto{
    user_Id: number;
    match_Id: number;
    team_a_score: number;
    team_b_score: number;
    team_winner: string | null
}