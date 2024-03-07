import { Transform } from 'class-transformer'
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { Priority } from 'prisma/generated/client'


export class PomodoroSessionDto {
	@IsOptional()
	@IsBoolean()
	isCompleted: boolean
}

export class PomodoroRoundDto {
	@IsNumber()
	totalSeconds: number

	@IsOptional()
	@IsBoolean()
	isCompleted:boolean
}