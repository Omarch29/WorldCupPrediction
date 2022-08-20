export class UpdateGuessDto {
    team_a_score: number;
    team_b_score: number;
    team_winner: 'A' | 'B' | 'X';
}