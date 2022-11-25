import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Octokit } from "octokit";
import { to } from '@app/common';

@Injectable()
export class GithubIntegrationService {

    private Octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });

    constructor() { }

    async listRepositories(page: number) {
        const [error, repos] = await to(this.Octokit.request('GET /user/repos', { type: 'public' }));
        if (error)
            throw new HttpException('Something went wrong trying to get public repositories, please try again', HttpStatus.BAD_REQUEST);
        return repos;
    }
}
