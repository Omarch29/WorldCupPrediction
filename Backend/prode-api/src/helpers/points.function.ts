import { Guess, Match } from "@prisma/client";

export const CalculatePoints = (guess: Guess, match: Match): number => {
    // match.winner could be A , B or X
    // X means draw
    // if match.playoffs is true winner could only be A or B
    // guess.winner follow the same rules

    // points only are given if the winner is correct
    if (guess.team_winner == match.winner) {
        if (guess.team_a_score === match.team_a_score && guess.team_b_score === match.team_b_score) {
            return 3;
        }
        return 1;
    }
    return 0;
}