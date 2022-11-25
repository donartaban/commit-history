import { HttpExceptionFilter } from "@app/common";
import { Controller, Get, Query, UseFilters } from "@nestjs/common";
import { GithubIntegrationService } from "./github-integration.service";

@Controller('github')
@UseFilters(HttpExceptionFilter)
export class GithubIntegrationController{

    constructor(
        private readonly githubService: GithubIntegrationService
    ){}

    @Get('repositories')
    async listRepositories(
        @Query('page') page: string
    ){
        return this.githubService.listRepositories(parseInt(page));
    }
}