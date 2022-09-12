/**
 * Analyse the github Issue data
 * Run index.js to use fresh data before running this!
 */

const data = require("./issues.json");

// Number of issues in open and closed state during each month and total
console.log(
    " Number of issues in open and closed state during each month and total"
);
const issuesByMonthAndStateAndTotal = data.reduce((acc, issue) => {
    const date = new Date(issue.created_at);
    const month = date.getMonth();
    const year = date.getFullYear();
    const key = `${year}-${month}`;
    if (!acc[key]) {
        acc[key] = {
            open: 0,
            closed: 0,
            total: 0,
        };
    }
    acc[key][issue.state]++;
    acc[key].total++;
    return acc;
}, {});
console.log(issuesByMonthAndStateAndTotal);

//  Are there any period in which we have more open issues than closed issues?
console.log(
    " Are there any period in which we have more open issues than closed issues?"
);
const periodsWithMoreOpenIssues = Object.keys(
    issuesByMonthAndStateAndTotal
).filter((key) => {
    const {
        open,
        closed
    } = issuesByMonthAndStateAndTotal[key];
    return open > closed;
});
console.log(periodsWithMoreOpenIssues);

//  Is there anyone who reports more issues than others ?
console.log(" Is there anyone who reports more issues than others ?");
const issuesByUser = data.reduce((acc, issue) => {
    const user = issue.user.login;
    if (!acc[user]) {
        acc[user] = 0;
    }
    acc[user]++;
    return acc;
}, {});
const top10UsersWhoMostIssuesReported = Object.keys(issuesByUser)
    .sort((a, b) => {
        return issuesByUser[b] - issuesByUser[a];
    })
    .slice(0, 10)
    .reduce((acc, user) => {
        acc[user] = issuesByUser[user];
        return acc;
    }, {});
console.log(top10UsersWhoMostIssuesReported);

//  what is the most popular label ?
console.log(" what is the most popular label ?");
const issuesByLabel = data.reduce((acc, issue) => {
    issue.labels.forEach((label) => {
        if (!acc[label.name]) {
            acc[label.name] = 0;
        }
        acc[label.name]++;
    });
    return acc;
}, {});

//Top 10 labels
const top10Labels = Object.keys(issuesByLabel)
    .sort((a, b) => {
        return issuesByLabel[b] - issuesByLabel[a];
    })
    .slice(0, 10)
    .reduce((acc, label) => {
        acc[label] = issuesByLabel[label];
        return acc;
    }, {});
console.log(top10Labels);

const mostPopularLabel = Object.keys(issuesByLabel).reduce(
    (acc, label) => {
        if (acc.issues < issuesByLabel[label]) {
            acc.label = label;
            acc.issues = issuesByLabel[label];
        }
        return acc;
    }, {
        label: "",
        issues: 0
    }
);
console.log(mostPopularLabel);

//5 what is the median number of comments per issue?
console.log("5 what is the median number of comments per issue?");
const commentsInIssues = data.map((issue) => issue.comments);
const median = (arr) => {
    const sorted = arr.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
};
console.log(median(commentsInIssues));

//  What is the median time to close an issue in days?
console.log(" What is the median time to close an issue in days?");
const timeToCloseIssues = data
    .filter((issue) => issue.state === "closed")
    .map((issue) => {
        const created = new Date(issue.created_at);
        const closed = new Date(issue.closed_at);
        return (closed - created) / (1000 * 60 * 60 * 24);
    });
console.log(median(timeToCloseIssues));

//  What is the median time to close an issue by month in days?
console.log(" What is the median time to close an issue by month in days?");
const timeToCloseIssuesByMonth = data
    .filter((issue) => issue.state === "closed")
    .reduce((acc, issue) => {
        const created = new Date(issue.created_at);
        const closed = new Date(issue.closed_at);
        const month = created.getMonth();
        const year = created.getFullYear();
        const key = `${year}-${month}`;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push((closed - created) / (1000 * 60 * 60 * 24));
        return acc;
    }, {});
const medianTimeToCloseIssuesByMonth = Object.keys(
    timeToCloseIssuesByMonth
).reduce((acc, key) => {
    acc[key] = median(timeToCloseIssuesByMonth[key]);
    return acc;
}, {});
console.log(medianTimeToCloseIssuesByMonth);

//  What is the median time to close an issue by label in days?
console.log(" What is the median time to close an issue by label in days?");
const timeToCloseIssuesByLabel = data
    .filter((issue) => issue.state === "closed")
    .reduce(
        (acc, issue) => {
            const created = new Date(issue.created_at);
            const closed = new Date(issue.closed_at);
            issue.labels.forEach((label) => {
                const key = label.name;
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push((closed - created) / (1000 * 60 * 60 * 24));
            });
            return acc;
        },

        {}
    );
const medianTimeToCloseIssuesByLabel = Object.keys(
    timeToCloseIssuesByLabel
).reduce((acc, key) => {
    acc[key] = median(timeToCloseIssuesByLabel[key]);
    return acc;
}, {});
console.log(medianTimeToCloseIssuesByLabel);

// What is the number of issues per label sorted by number of issues?
console.log(
    " What is the number of issues per label sorted by number of issues?"
);
const issuesByLabelSortedByNumberOfIssues = Object.keys(issuesByLabel)
    .sort((a, b) => {
        return issuesByLabel[a] - issuesByLabel[b];
    })
    .reduce((acc, label) => {
        acc[label] = issuesByLabel[label];
        return acc;
    }, {});
console.log(issuesByLabelSortedByNumberOfIssues);

// Who are the top 10 users who issues where closed
console.log(" Who are the top 10 users who issues where closed");
const issuesClosedByUser = data.reduce((acc, issue) => {
    if (issue.state === "closed") {
        const user = issue.user.login;
        if (!acc[user]) {
            acc[user] = 0;
        }
        acc[user]++;
    }
    return acc;
}, {});
const top10UsersWhoCloseMostIssues = Object.keys(issuesClosedByUser)
    .sort((a, b) => {
        return issuesClosedByUser[b] - issuesClosedByUser[a];
    })
    .slice(0, 10)
    .reduce((acc, user) => {
        acc[user] = issuesClosedByUser[user];
        return acc;
    }, {});
console.log(top10UsersWhoCloseMostIssues);

//  What is the percentage of issues closed during a month and issues created during a month ?
console.log(
    " What is the percentage of issues closed during a month and issues created during a month ?"
);
const issuesClosedDuringMonthVsIssuesCreatedDuringMonth = data.reduce(
    (acc, issue) => {
        const created = new Date(issue.created_at);
        const month = created.getMonth();
        const year = created.getFullYear();
        const key = `${year}-${month}`;
        if (!acc[key]) {
            acc[key] = {
                created: 0,
                closed: 0,
            };
        }
        acc[key].created++;
        if (issue.state === "closed") {
            acc[key].closed++;
        }
        return acc;
    }, {}
);
const backlogManagementIndex = Object.keys(
    issuesClosedDuringMonthVsIssuesCreatedDuringMonth
).reduce((acc, key) => {
    acc[key] =
        (issuesClosedDuringMonthVsIssuesCreatedDuringMonth[key].closed /
            issuesClosedDuringMonthVsIssuesCreatedDuringMonth[key].created) *
        100;
    return acc;
}, {});
console.log(backlogManagementIndex);

// Are they any locked issues ?
console.log(" Are they any locked issues ?");
const lockedIssues = data.filter((issue) => issue.locked);
console.log(lockedIssues);

// Group the closed issues by the state_reason to close the issue
console.log(" Group the closed issues by the state_reason to close the issue");
const closedIssuesByStateReason = data.reduce((acc, issue) => {
    if (issue.state === "closed") {
        if (!acc[issue.state_reason]) {
            acc[issue.state_reason] = 0;
        }
        acc[issue.state_reason]++;
    }
    return acc;
}, {});
console.log(closedIssuesByStateReason);

// 15 Who gets assigned issues the most
console.log("15 Who gets assigned issues the most");
const issuesAssignedToUser = data.reduce((acc, issue) => {
    if (issue.assignee) {
        const user = issue.assignee.login;
        if (!acc[user]) {
            acc[user] = 0;
        }
        acc[user]++;
    }
    return acc;
}, {});
const top10UsersWhoGetAssignedIssuesTheMost = Object.keys(issuesAssignedToUser)
    .sort((a, b) => {
        return issuesAssignedToUser[b] - issuesAssignedToUser[a];
    })
    .slice(0, 10)
    .reduce((acc, user) => {
        acc[user] = issuesAssignedToUser[user];
        return acc;
    }, {});
console.log(top10UsersWhoGetAssignedIssuesTheMost);

// What is the percentage of issues closed with Ruby code blocks in their body text vs the percentage of issues closed without?
console.log(
    " What is the percentage of issues closed with Ruby code blocks in their body text vs the percentage of issues closed without?"
);
const issuesClosedWithRubyCodeBlocks = data.reduce(
    (acc, issue) => {
        if (issue.state === "closed") {
            if (issue.body.includes("```ruby")) {
                acc.with++;
            } else {
                acc.without++;
            }
        }
        return acc;
    }, {
        with: 0,
        without: 0,
    }
);
console.log(issuesClosedWithRubyCodeBlocks);

// Whats is the median time in days to close an issue with Ruby code blocks in their body text vs the median time in days to close an issue without?
console.log(
    " Whats is the median time in days to close an issue with Ruby code blocks in their body text vs the median time in days to close an issue without?"
);
const timeToCloseIssuesWithRubyCodeBlocks = data
    .filter((issue) => issue.state === "closed" && issue.body.includes("```ruby"))
    .map((issue) => {
        const created = new Date(issue.created_at);
        const closed = new Date(issue.closed_at);
        return (closed - created) / (1000 * 60 * 60 * 24);
    });
const timeToCloseIssuesWithoutRubyCodeBlocks = data
    .filter(
        (issue) => issue.state === "closed" && !issue.body.includes("```ruby")
    )
    .map((issue) => {
        const created = new Date(issue.created_at);
        const closed = new Date(issue.closed_at);
        return (closed - created) / (1000 * 60 * 60 * 24);
    });
const medianTimeToCloseIssuesWithRubyCodeBlocks = median(
    timeToCloseIssuesWithRubyCodeBlocks
);
const medianTimeToCloseIssuesWithoutRubyCodeBlocks = median(
    timeToCloseIssuesWithoutRubyCodeBlocks
);
console.log(medianTimeToCloseIssuesWithRubyCodeBlocks);
console.log(medianTimeToCloseIssuesWithoutRubyCodeBlocks);

// What is the median  time it takes in days to close and issue relative to the number of comments ?
console.log(
    " What is the median time it takes in days to close and issue relative to the number of comments ?"
);
const timeToCloseIssuesByNumberOfComments = data
    .filter((issue) => issue.state === "closed")
    .reduce((acc, issue) => {
        const created = new Date(issue.created_at);
        const closed = new Date(issue.closed_at);
        const timeToClose = (closed - created) / (1000 * 60 * 60 * 24);
        const numberOfComments = issue.comments;
        if (!acc[numberOfComments]) {
            acc[numberOfComments] = [];
        }
        acc[numberOfComments].push(timeToClose);
        return acc;
    }, {});
const medianTimeToCloseIssuesByNumberOfComments = Object.keys(
    timeToCloseIssuesByNumberOfComments
).reduce((acc, numberOfComments) => {
    acc[numberOfComments] = median(
        timeToCloseIssuesByNumberOfComments[numberOfComments]
    );
    return acc;
}, {});
console.log(medianTimeToCloseIssuesByNumberOfComments);

// Group labels by the number of comments and issues
console.log(" Group labels by the number of comments and issues");
const labelsByNumberOfCommentsAndIssues = data.reduce((acc, issue) => {
    issue.labels.forEach((label) => {
        if (!acc[label.name]) {
            acc[label.name] = {
                comments: 0,
                issues: 0,
            };
        }
        acc[label.name].comments += issue.comments;
        acc[label.name].issues++;
    });
    return acc;
}, {});
console.log(labelsByNumberOfCommentsAndIssues);

//20 What is the ratio of issues with "Steps to reproduce" vs issues without ?
console.log(
    "20 What is the ratio of issues with 'Steps to reproduce' vs issues without ?"
);
const issuesWithStepsToReproduce = data.reduce(
    (acc, issue) => {
        if (issue.body.includes("Steps to reproduce")) {
            acc.with++;
        } else {
            acc.without++;
        }
        return acc;
    }, {
        with: 0,
        without: 0,
    }
);
console.log(issuesWithStepsToReproduce);

//  How long does it take to close an issue with "Steps to reproduce" vs issues without in days?
console.log(
    " How long does it take to close an issue with 'Steps to reproduce' vs issues without in days?"
);
const timeToCloseIssuesWithStepsToReproduce = data
    .filter(
        (issue) =>
        issue.state === "closed" && issue.body.includes("Steps to reproduce")
    )
    .map((issue) => {
        const created = new Date(issue.created_at);
        const closed = new Date(issue.closed_at);
        return (closed - created) / (1000 * 60 * 60 * 24);
    });
const timeToCloseIssuesWithoutStepsToReproduce = data
    .filter(
        (issue) =>
        issue.state === "closed" && !issue.body.includes("Steps to reproduce")
    )
    .map((issue) => {
        const created = new Date(issue.created_at);
        const closed = new Date(issue.closed_at);
        return (closed - created) / (1000 * 60 * 60 * 24);
    });
const medianTimeToCloseIssuesWithStepsToReproduce = median(
    timeToCloseIssuesWithStepsToReproduce
);
const medianTimeToCloseIssuesWithoutStepsToReproduce = median(
    timeToCloseIssuesWithoutStepsToReproduce
);
console.log(medianTimeToCloseIssuesWithStepsToReproduce);
console.log(medianTimeToCloseIssuesWithoutStepsToReproduce);

//  What are the title and time in days of  longest open issues?
console.log(" What are the title and time in days of  longest open issues?");
const longestOpenIssues = data
    .filter((issue) => issue.state === "open")
    .map((issue) => {
        const created = new Date(issue.created_at);
        const now = new Date();
        return {
            title: issue.title,
            time: (now - created) / (1000 * 60 * 60 * 24),
            labels: issue.labels.map((label) => label.name),
        };
    })
    .sort((a, b) => b.time - a.time);
console.log(longestOpenIssues.slice(0, 10));

// Count the number of issues associated with a Rails version and Ruby version
console.log(
    " Count the number of issues associated with a Rails version and Ruby version"
);
const issuesAssociatedWithRailsAndRubyVersion = data.reduce((acc, issue) => {
    const re = /Rails version.*?([\d\.]+).*?Ruby version.*?([\d\.]+)/gi;
    const match = re.exec(issue.body.replace(/\r/g, "").replace(/\n/g, ""));
    // console.log(issue.body);
    if (match) {
        const railsVersion = match[1];
        const rubyVersion = match[2];
        if (!acc[railsVersion]) {
            acc[railsVersion] = {};
        }
        if (!acc[railsVersion][rubyVersion]) {
            acc[railsVersion][rubyVersion] = 0;
        }
        acc[railsVersion][rubyVersion]++;
    }

    return acc;
}, {});
//sort by version
const sortedIssuesAssociatedWithRailsAndRubyVersion = Object.keys(
        issuesAssociatedWithRailsAndRubyVersion
    )
    .sort((a, b) => {
        const aParts = a.split(".").map((part) => parseInt(part));
        const bParts = b.split(".").map((part) => parseInt(part));
        for (let i = 0; i < aParts.length; i++) {
            if (aParts[i] > bParts[i]) {
                return 1;
            } else if (aParts[i] < bParts[i]) {
                return -1;
            }
        }
        return 0;
    })
    .reduce((acc, railsVersion) => {
        acc[railsVersion] = issuesAssociatedWithRailsAndRubyVersion[railsVersion];
        return acc;
    }, {});
console.log(sortedIssuesAssociatedWithRailsAndRubyVersion);

// Which Rails version has the most number of open issues
console.log("24 .Which Rails version has the most number of open issues");
const railsVersionWithMostNumberOfOpenIssues = data.reduce((acc, issue) => {
    if (issue.state === "open") {
        const re = /Rails version.*?([\d\.]+)/gi;
        const match = re.exec(issue.body.replace(/\r/g, "").replace(/\n/g, ""));
        if (match) {
            const railsVersion = match[1];
            if (!acc[railsVersion]) {
                acc[railsVersion] = 0;
            }
            acc[railsVersion]++;
        }
    }
    return acc;
}, {});
// console.log(railsVersionWithMostNumberOfOpenIssues); // this has some issues with the regex so we need to filter bad data
//remove data with rails version less than 6
const railsVersionWithMostNumberOfOpenIssuesGreaterThan6 = Object.keys(
        railsVersionWithMostNumberOfOpenIssues
    )
    .filter((railsVersion) => parseInt(railsVersion.split(".")[0]) >= 6)
    .reduce((acc, railsVersion) => {
        acc[railsVersion] = railsVersionWithMostNumberOfOpenIssues[railsVersion];
        return acc;
    }, {});
console.log(railsVersionWithMostNumberOfOpenIssuesGreaterThan6);

//  Which Ruby version has the most number of open issues
console.log(" Which Ruby version has the most number of open issues");
const rubyVersionWithMostNumberOfOpenIssues = data.reduce((acc, issue) => {
    if (issue.state === "open") {
        const re = /Ruby version.*?([\d\.]+)/gi;
        const match = re.exec(issue.body.replace(/\r/g, "").replace(/\n/g, ""));
        if (match) {
            const rubyVersion = match[1];
            if (!acc[rubyVersion]) {
                acc[rubyVersion] = 0;
            }
            acc[rubyVersion]++;
        }
    }
    return acc;
}, {});
//remove data with ruby version greater than 4
const rubyVersionWithMostNumberOfOpenIssuesLessThan4 = Object.keys(
        rubyVersionWithMostNumberOfOpenIssues
    )
    .filter((rubyVersion) => parseInt(rubyVersion.split(".")[0]) <= 4)
    .reduce((acc, rubyVersion) => {
        acc[rubyVersion] = rubyVersionWithMostNumberOfOpenIssues[rubyVersion];
        return acc;
    }, {});
console.log(rubyVersionWithMostNumberOfOpenIssuesLessThan4);

//  Group closed issues by the number of reactions they have
console.log(" Group closed issues by the number of reactions they have");
const closedIssuesGroupedByNumberOfReactions = data.reduce((acc, issue) => {
    if (issue.state === "closed") {
        if (!acc[issue.reactions.total_count]) {
            acc[issue.reactions.total_count] = 0;
        }
        acc[issue.reactions.total_count]++;
    }
    return acc;
}, {});
console.log(closedIssuesGroupedByNumberOfReactions);

// Group the issues by author_association
console.log(" Group the issues by author_association");
const issuesGroupedByAuthorAssociation = data.reduce((acc, issue) => {
    if (!acc[issue.author_association]) {
        acc[issue.author_association] = 0;
    }
    acc[issue.author_association]++;
    return acc;
}, {});
console.log(issuesGroupedByAuthorAssociation);

// What percentage of issues are closed based on author_association
console.log(
    " What percentage of issues are closed based on author_association"
);
const percentageOfIssuesClosedBasedOnAuthorAssociation = data.reduce(
    (acc, issue) => {
        if (!acc[issue.author_association]) {
            acc[issue.author_association] = {
                total: 0,
                closed: 0,
                open: 0,
            };
        }
        acc[issue.author_association].total++;
        if (issue.state === "closed") {
            acc[issue.author_association].closed++;
        }
        if (issue.state === "open") {
            acc[issue.author_association].open++;
        }
        return acc;
    }, {}
);
// percentage
Object.keys(percentageOfIssuesClosedBasedOnAuthorAssociation).forEach(
    (authorAssociation) => {
        percentageOfIssuesClosedBasedOnAuthorAssociation[
                authorAssociation
            ].percentage =
            (percentageOfIssuesClosedBasedOnAuthorAssociation[authorAssociation]
                .closed /
                percentageOfIssuesClosedBasedOnAuthorAssociation[authorAssociation]
                .total) *
            100;
    }
);
console.log(percentageOfIssuesClosedBasedOnAuthorAssociation);