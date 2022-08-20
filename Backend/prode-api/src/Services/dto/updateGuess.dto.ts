import { PartialType } from '@nestjs/mapped-types';
import { createGuessDto } from './createGuess.dto';

export class UpdateGuessDto extends PartialType(createGuessDto) {
    id: number;
}