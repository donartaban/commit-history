import { HttpExceptionFilter } from "@app/common";
import { Controller, Get, Param, Query, UseFilters } from "@nestjs/common";
import { GithubIntegrationService } from "./github-integration.service";

@Controller('github')
@UseFilters(HttpExceptionFilter)
export class GithubIntegrationController {

    constructor(
        private readonly githubService: GithubIntegrationService
    ) { }

    @Get('repos')
    async listRepositories(
        @Query('page') page: string,
        @Query('per_page') per_page: string
    ) {
        return this.githubService.listRepositories(parseInt(page), parseInt(per_page));
    }

    @Get('repo/:repo/owner/:owner/commits')
    async listCommitsFromRepository(
        @Param('repo') repo: string,
        @Param('owner') owner: string,
        @Query('page') page: string,
        @Query('per_page') per_page: string
    ) {
        return this.githubService.listCommits(repo, owner, parseInt(page), parseInt(per_page));
    }
}