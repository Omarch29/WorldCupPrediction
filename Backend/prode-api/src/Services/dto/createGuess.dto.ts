export class createGuessDto{
    user_id: number;
    match_id: number;
    team_a_score: number;
    team_b_score: number;
    team_winner: 'A' | 'B' | 'X';
}