import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Octokit } from "octokit";
import { to } from '@app/common';

@Injectable()
export class GithubIntegrationService {

    private Octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });

    /**
     * List all public repositories from github account accessing throgth personal access token
     * @param page {number}
     * @param per_page {number}
     * @returns {Promise<any>}
     */
    async listRepositories(page: number = 1, per_page: number = 20): Promise<any> {
        const [error, repos] = await to(this.Octokit.request('GET /user/repos', { type: 'public', page, per_page, sort: 'created', direction: 'desc' }));
        if (error)
            throw new HttpException('Something went wrong trying to get public repositories, please try again', HttpStatus.BAD_REQUEST);
        return repos && repos.data ? repos.data : [];
    }

    /**
     * List all commits from specific owner and repo
     * @param repo {string}
     * @param owner {number}
     * @param page {number}
     * @param per_page {number}
     * @returns {Promise<any>}
     */
    async listCommits(repo: string, owner: string, page: number = 1, per_page: number = 20): Promise<any> {
        const [error, commits] = await to(this.Octokit.request('GET /repos/{owner}/{repo}/commits', { owner, repo, page, per_page }));        
        if (error)
            throw new HttpException('Something went wrong trying to get commits from specific repo, please try again', HttpStatus.BAD_REQUEST);
        return commits && commits.data ? commits.data : [];
    }
}
