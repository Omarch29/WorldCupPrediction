import { Match } from "@prisma/client";
import { createGuessDto } from "src/Services/dto/createGuess.dto";
import { UpdateGuessDto } from "src/Services/dto/updateGuess.dto";

export const isGuessValid = (guess: createGuessDto | UpdateGuessDto, match: Match): boolean => {
    // match.winner could be A , B or X
    // X means draw
    // if match.playoffs is true winner could only be A or B
    // guess.winner follow the same rules
    if (match.playoffs && guess.team_winner == 'X') 
    return false;

    const winner = guess.team_a_score === guess.team_b_score ? guess.team_a_score > guess.team_b_score ? 'A' : 'X' : 'B';
    if (winner != guess.team_winner)
        return false             

    return true;
};