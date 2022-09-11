const { Octokit } = require("@octokit/rest");
const fs = require('fs');

async function fetchIssues() {
    const octokit = new Octokit();
    let number_of_issues = 0;
    let current_page = 0
    let all_issues = []

    while (number_of_issues < 500) {
        console.log("Fetching page " + current_page + " issue count is " + number_of_issues)
        const data = await octokit.issues.listForRepo({
            owner: "rails",
            repo: "rails",
            per_page: 100,
            page: current_page + 1
        }).then(({ data }) => {
            let filtered_issues = data.filter(issue => !issue.pull_request) //remove pull requests included in github api
            if (all_issues.length+filtered_issues.length > 500) {
                filtered_issues = filtered_issues.slice(0, 500 - all_issues.length)
            }
            all_issues = all_issues.concat(filtered_issues)
            number_of_issues += filtered_issues.length;
        });

    }

    // write the issues data to a json file 
    fs.writeFile('issues.json', JSON.stringify(all_issues), (err) => {
        if (err) throw err;
        console.log('Issues data saved!');
    }
    );

}

fetchIssues();

