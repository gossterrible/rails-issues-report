/**
 * Use octokit to fetch issues data and save to a json file 
 * 
 */


const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();
const fs = require('fs');

const fetchIssues = async (maxIssues) =>{
    let number_of_issues = 0;
    let current_page = 0
    let all_issues = []

    while (number_of_issues < maxIssues) {
        console.log(`Fetching page ${current_page } issue count is  ${number_of_issues}`)
        const data = await octokit.issues.listForRepo({
            owner: "rails",
            repo: "rails",
            state: "all",
            per_page: 100,
            page: current_page++
        }).then(({ data }) => {
            let filtered_issues = data.filter(issue => !issue.pull_request) //remove pull requests included in github api
            if (all_issues.length + filtered_issues.length > maxIssues) {
                filtered_issues = filtered_issues.slice(0, maxIssues - all_issues.length)
            }
            // fetch the comments for each issues and append them to the issue object
            const issues_with_comments =  Promise.all(filtered_issues.map(async issue => {
                const comments = await octokit.issues.listComments({
                    owner: "rails",
                    repo: "rails",
                    issue_number: issue.number,
                }).then(({ data }) => data)
                issue.comments_data = comments
                console.log(`Fetched comments for issue ${issue.number}`)
                console.log(`Total comments for issue ${issue.number} is ${comments.length}`)

                return issue
            }))
            all_issues = all_issues.concat(issues_with_comments)
            number_of_issues += issues_with_comments.length;
        });

    }
    return all_issues
}

const getEvents = async (owner, repo, issueNumber) => {
    console.log(`Getting events for issue ${issueNumber}`);
    const events = await octokit.issues.listEventsForTimeline({
        owner,
        repo,
        issue_number: issueNumber
    });
    return events.data;
}

const getEventsForAllIssues = async (owner, repo, issues) => {
    //get events for all the issues at a rate of 1 request per second
    const events = await Promise.all(issues.map(issue => getEvents(owner, repo, issue.number)).map(p => p.catch(e => e)));
    //filter out the errors
    const eventsData = events.filter(event => !(event instanceof Error));
    //flatten the array of arrays
    const eventsDataFlat = [].concat.apply([], eventsData);
    //save the events data to a file
    fs.writeFileSync('events.json', JSON.stringify(eventsDataFlat, null, 2));
}


async function main(){
    const issues = await fetchIssues(10);
    // write the issues data to a json file 
    fs.writeFile('issues3.json', JSON.stringify(issues), (err) => {
        if (err) throw err;
        console.log('Issues data saved!');
    });
}
main()

