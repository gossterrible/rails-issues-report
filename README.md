### Rails Issues Report

Get the 500 most recent Rails issues and run some statistical analysis on them.

### How to use

1. Clone Repo:
`git clone https://github.com/gossterrible/rails-issues-report.git`
2. Install Nodejs and Dependecies 
Install Nodejs https://nodejs.org/en/download/
3. Install script dependencies
`npm install`
4. Fetch new data
`node index.js`
5. Run analysis'
`node analysis.js`

### Sample Output


```console
 Number of issues in open and closed state during each month and total
{
  '2022-8': { open: 18, closed: 16, total: 34 },
  '2022-7': { open: 21, closed: 41, total: 62 },
  '2022-6': { open: 19, closed: 46, total: 65 },
  '2022-5': { open: 25, closed: 47, total: 72 },
  '2022-4': { open: 10, closed: 60, total: 70 },
  '2022-3': { open: 8, closed: 55, total: 63 },
  '2022-2': { open: 13, closed: 55, total: 68 },
  '2022-1': { open: 8, closed: 58, total: 66 }
}
 Are there any period in which we have more open issues than closed issues?
[ '2022-8' ]
 Is there anyone who reports more issues than others ?
{
  yahonda: 15,
  Sega100500: 5,
  postmodern: 5,
  shouichi: 5,
  resistorsoftware: 5,
  matthee: 4,
  lazaronixon: 4,
  dssjoblom: 4,
  kuahyeow: 3,
  Exterm1nate: 3
}
 what is the most popular label ?
{
  activerecord: 137,
  'attached PR': 65,
  stale: 35,
  activesupport: 32,
  activestorage: 25,
  'With reproduction steps': 21,
  docs: 21,
  actionpack: 18,
  'more-information-needed': 17,
  actionview: 12
}
{ label: 'activerecord', issues: 137 }
5 what is the median number of comments per issue?
2
 What is the median time to close an issue in days?
1.4475462962962964
 What is the median time to close an issue by month in days?
{
  '2022-8': 0.17474537037037036,
  '2022-7': 2.2031134259259257,
  '2022-6': 2.118773148148148,
  '2022-5': 2.232199074074074,
  '2022-4': 1.8785300925925925,
  '2022-3': 3.1677662037037035,
  '2022-2': 1.062326388888889,
  '2022-1': 1.2277025462962963
}
 What is the median time to close an issue by label in days?
{
  railties: 1.7855381944444444,
  activerecord: 8.83318287037037,
  'attached PR': 5.927210648148148,
  'With reproduction steps': 1.1260243055555557,
  activejob: 7.738206018518518,
  activestorage: 6.884537037037037,
  'more-information-needed': 15.785925925925927,
  activesupport: 4.336666666666666,
  actionview: 6.317170138888889,
  docs: 11.325399305555557,
  'asset pipeline': 1.3994328703703705,
  actionpack: 11.087997685185185,
  'good first issue': 9.193969907407407,
  regression: 1.4227025462962963,
  security: 2.1371759259259258,
  autoloading: 8.915138888888889,
  engines: 1.4010416666666667,
  actioncable: 49.58053819444444,
  'third party issue': 10.08771412037037,
  activemodel: 7.940057870370371,
  actionmailbox: 2.062991898148148,
  routing: 4.118640046296297,
  stale: 100.57377314814815,
  'ci issues': 2.99087962962963,
  actiontext: 19.44590277777778,
  actionmailer: 20.850046296296295
}
 What is the number of issues per label sorted by number of issues?
{
  MySQL: 1,
  security: 1,
  engines: 1,
  'rails-ujs': 1,
  'needs feedback': 1,
  PostgreSQL: 1,
  actionmailer: 2,
  actionmailbox: 2,
  pinned: 2,
  'good first issue': 3,
  routing: 3,
  actiontext: 3,
  'ci issues': 3,
  'asset pipeline': 5,
  activejob: 6,
  regression: 7,
  'third party issue': 7,
  autoloading: 7,
  actioncable: 8,
  activemodel: 10,
  railties: 11,
  actionview: 12,
  'more-information-needed': 17,
  actionpack: 18,
  'With reproduction steps': 21,
  docs: 21,
  activestorage: 25,
  activesupport: 32,
  stale: 35,
  'attached PR': 65,
  activerecord: 137
}
 Who are the top 10 users who issues where closed
{
  yahonda: 13,
  Sega100500: 5,
  resistorsoftware: 5,
  postmodern: 4,
  josephmo: 3,
  kyrofa: 3,
  dssjoblom: 3,
  'john-999': 3,
  qquokka: 2,
  creaturenex: 2
}
 What is the percentage of issues closed during a month and issues created during a month ?
{
  '2022-8': 47.05882352941176,
  '2022-7': 66.12903225806451,
  '2022-6': 70.76923076923077,
  '2022-5': 65.27777777777779,
  '2022-4': 85.71428571428571,
  '2022-3': 87.3015873015873,
  '2022-2': 80.88235294117648,
  '2022-1': 87.87878787878788
}
 Are they any locked issues ?
[]
 Group the closed issues by the state_reason to close the issue
{ completed: 365, not_planned: 13 }
15 Who gets assigned issues the most
{
  eileencodes: 9,
  byroot: 6,
  gmcgibbon: 4,
  jhawthorn: 2,
  skipkayhil: 2,
  'adrianna-chang-shopify': 2,
  rafaelfranca: 1,
  geongeorge: 1,
  jorgemanrubia: 1,
  fatkodima: 1
}
 What is the percentage of issues closed with Ruby code blocks in their body text vs the percentage of issues closed without?
{ with: 207, without: 171 }
 Whats is the median time in days to close an issue with Ruby code blocks in their body text vs the median time in days to close an issue without?
1.7311805555555555
1.3632523148148148
 What is the median time it takes in days to close and issue relative to the number of comments ?
{
  '0': 0.674537037037037,
  '1': 0.25753472222222223,
  '2': 1.4206886574074074,
  '3': 2.6496296296296293,
  '4': 2.730891203703704,
  '5': 4.127349537037037,
  '6': 2.1696412037037036,
  '7': 19.123460648148146,
  '8': 1.1271180555555556,
  '9': 20.913402777777776,
  '10': 16.427876157407407,
  '11': 19.44590277777778,
  '12': 10.858912037037037,
  '13': 1.9670138888888888,
  '14': 14.30236111111111,
  '16': 13.510775462962963,
  '18': 0.5408449074074074,
  '21': 65.8045949074074,
  '30': 2.10037037037037
}
 Group labels by the number of comments and issues
{
  railties: { comments: 42, issues: 11 },
  activerecord: { comments: 471, issues: 137 },
  'attached PR': { comments: 175, issues: 65 },
  'With reproduction steps': { comments: 70, issues: 21 },
  'more-information-needed': { comments: 53, issues: 17 },
  activemodel: { comments: 35, issues: 10 },
  activejob: { comments: 36, issues: 6 },
  regression: { comments: 39, issues: 7 },
  activestorage: { comments: 88, issues: 25 },
  docs: { comments: 94, issues: 21 },
  activesupport: { comments: 118, issues: 32 },
  actionview: { comments: 47, issues: 12 },
  MySQL: { comments: 3, issues: 1 },
  'asset pipeline': { comments: 16, issues: 5 },
  actioncable: { comments: 21, issues: 8 },
  'third party issue': { comments: 40, issues: 7 },
  actionmailer: { comments: 9, issues: 2 },
  actionpack: { comments: 42, issues: 18 },
  'good first issue': { comments: 12, issues: 3 },
  security: { comments: 11, issues: 1 },
  autoloading: { comments: 48, issues: 7 },
  engines: { comments: 1, issues: 1 },
  routing: { comments: 9, issues: 3 },
  'rails-ujs': { comments: 2, issues: 1 },
  actiontext: { comments: 17, issues: 3 },
  actionmailbox: { comments: 11, issues: 2 },
  stale: { comments: 118, issues: 35 },
  'ci issues': { comments: 11, issues: 3 },
  pinned: { comments: 7, issues: 2 },
  'needs feedback': { comments: 4, issues: 1 },
  PostgreSQL: { comments: 2, issues: 1 }
}
20 What is the ratio of issues with 'Steps to reproduce' vs issues without ?
{ with: 383, without: 117 }
 How long does it take to close an issue with 'Steps to reproduce' vs issues without in days?
1.277505787037037
2.219241898148148
 What are the title and time in days of  longest open issues?
[
  {
    title: 'Postgres adapter does not cast ActiveSupport::Duration to interval in array condition',
    time: 218.6166828587963,
    labels: [ 'activerecord', 'attached PR', 'PostgreSQL' ]
  },
  {
    title: 'Handle dependent: nil on ActiveStorage attachments',
    time: 215.86156711805555,
    labels: [ 'attached PR', 'activestorage' ]
  },
  {
    title: 'Arel::UpdateManager with join statement on a sqlite and postgres database are invalid',
    time: 212.99578008101852,
    labels: [ 'activerecord', 'With reproduction steps' ]
  },
  {
    title: '[activerecord] `numericality: {in: ...}` should accept an Array or Set of explicit values',
    time: 206.80260878472222,
    labels: [ 'activerecord', 'attached PR' ]
  },
  {
    title: 'When using both touch and counter_cache on a belongs_to association, updated_at on the associated object instance is not updated',
    time: 205.90054859953705,
    labels: [ 'activerecord', 'With reproduction steps' ]
  },
  {
    title: 'connection.sanitize_limit is no longer needed when building limit clause',
    time: 204.65895137731482,
    labels: [ 'activerecord', 'attached PR' ]
  },
  {
    title: 'ActiveSupport::Deprecation does not fallback to configured disallowed_behavior',
    time: 198.8824351736111,
    labels: [ 'activesupport', 'attached PR' ]
  },
  {
    title: '`precision: nil` added to datetime columns in `schema.rb` in 7.0.2 causes a change in value',
    time: 195.98456480324074,
    labels: [ 'activerecord' ]
  },
  {
    title: 'STI foreign key auto detection regression',
    time: 194.2016828587963,
    labels: [ 'activerecord', 'With reproduction steps' ]
  },
  {
    title: 'ActionCable: Repeated subscription attempts',
    time: 186.4038240625,
    labels: [ 'attached PR', 'actioncable' ]
  }
]
 Count the number of issues associated with a Rails version and Ruby version
{
  '7': {
    '3': 5,
    '2.7.6': 2,
    '2.7.5': 1,
    '3.0.3': 1,
    '2.7.4': 1,
    '3.1.0': 2,
    '3.1': 1,
    '3.1.1': 1,
    '3.0.2': 1,
    '2.7.2': 1
  },
  '8964': { '3.1.2': 1 },
  '2418939': { '2.7.4': 1 },
  '3.1.1': { '7.0.3': 1 },
  '4.2.11.3': { '2.6.6': 1, '2.4.2': 1 },
  '5.0.7': { '2.5.5': 2 },
  '5.1': { '5.1': 1, '2.7.5': 1 },
  '5.2.3': { '2.5.9': 1 },
  '5.2.5': { '2.7.2': 1 },
  '5.2.6.2': { '3.0.2': 1 },
  '5.2.8.1': { '2.7.0': 1 },
  '5.2': { '2.6': 1, '2.5.1': 1 },
  '5.': { '2.6': 1 },
  '5.2.7.1': { '2.5.9': 1 },
  '6.0.2.2': { '2.6.3': 1 },
  '6.0.3.2': { '2.6.5': 1 },
  '6.0.3.3': { '2.7.5': 2 },
  '6.0.3.5': { '2.7.2': 2 },
  '6.0.3.6': { '2.6.6': 1 },
  '6.0.3': { '2.7.0': 1 },
  '6.0.4.4': { '2.7.3': 1, '2.6.8': 1 },
  '6.0.4.6': { '2.7.5': 2, '2.6.5': 1 },
  '6.0.4.7': { '2.7.6': 1 },
  '6.0.4.8': { '2.7.5': 1, '2.7.3': 1 },
  '6.0.5.1': { '3.1.0': 1, '2.7.6': 1, '2.6': 1 },
  '6.0.5': { '2.6.5': 1, '3.0.4': 1 },
  '6.1.1': { '2.6.5': 1 },
  '6.1.3.1': { '2.7.2': 1 },
  '6.1.3.2': { '2.7.2': 1 },
  '6.1.4.4': { '3.0.2': 1, '2.7.5': 1, '2.7': 1, '3.1.0': 1, '3.1': 1 },
  '6.1.4.6': { '2.7.2': 1, '3.0.2': 2, '2.7.5': 2 },
  '6.1.4.7': { '2.7.6': 1, '3.1.0': 1, '2.7.5': 1 },
  '6.1.6.1': {
    '3.0.4': 2,
    '3.1.0': 1,
    '2.7.2': 1,
    '3.1.2': 1,
    '2.7.5': 1,
    '2.7.6': 1,
    '2.5.1': 1
  },
  '6.1.6': { '2.7.2': 1, '2.7.4': 1, '2.6': 1, '3.0.2': 2 },
  '6.1': { '3.0.1': 1, '3.0': 1, '2.7.5': 2 },
  '6.1.4.1': { '3.0.2': 2, '2.7.6': 1, '2.7.2': 3 },
  '6.1.5': {
    '3.1.1': 4,
    '3.0.3': 1,
    '3.1.2': 1,
    '2.7.6': 1,
    '2.6.5': 1,
    '2.7': 1,
    '2.7.3': 1,
    '3.1': 1
  },
  '6.1.5.1': {
    '2.7.6': 1,
    '3.1.2': 1,
    '2.6.8': 1,
    '2.7.2': 1,
    '2.7.3': 1,
    '2.7.5': 1
  },
  '6.1.': { '2.6.9': 1 },
  '6.1.4': { '3.0.2': 2, '2.7.4': 1 },
  '7.0.0': { '2.7.1': 2, '2.7.5': 1, '2.7.0': 1, '3.0.3': 1 },
  '7.0.1': { '2.7.5': 1, '3.0.3': 2, '2.7.4': 1, '2.7.2': 1, '3.1': 1 },
  '7.0.2.1': { '3.0.2': 1, '3.1.0': 1 },
  '7.0.2.2': {
    '2.7.5': 1,
    '3.1.0': 5,
    '3.0.3': 6,
    '3.1.1': 2,
    '3.0.1': 2,
    '2.7.2': 1,
    '2.7.0': 1
  },
  '7.0.2.3': {
    '3.1.1': 16,
    '2.7.2': 2,
    '3.1.0': 3,
    '3.1.2': 3,
    '3.0.2': 4,
    '2.7.3': 1,
    '2.7.5': 2,
    '3.0.3': 1,
    '3.0.0': 2,
    '2.7.0': 2,
    '2.7.4': 3,
    '2.7.1': 1
  },
  '7.0.2.4': { '3.1.2': 7, '3.1.1': 1, '3.0.2': 1, '3.1.0': 1, '2.7.1': 1 },
  '7.0.2': {
    '3.1.1': 2,
    '3.1.2': 1,
    '2.7': 1,
    '2.7.5': 2,
    '3.1.0': 5,
    '3.0.0': 1,
    '3.1': 2,
    '2.7.2': 1
  },
  '7.0.3.1': {
    '2.7.5': 4,
    '3.0.2': 5,
    '3.1.2': 15,
    '3.0.3': 2,
    '3.2.1': 1,
    '3.1.1': 3,
    '3.1.0': 2,
    '3.1': 2,
    '2.7.4': 1,
    '.': 1,
    '3.0.0': 1,
    '3.0.4': 1
  },
  '7.0.3': {
    '3.1.2': 27,
    '2.7.0': 2,
    '2.7.6': 3,
    '3.1.0': 3,
    '3.0.4': 4,
    '2.7.5': 4,
    '3.1.1': 5,
    '3.0.2': 5,
    '3.1': 2,
    '3.0.3': 2,
    '3.0.1': 1,
    '2.7.2': 1
  },
  '7.0': { '3.1.2': 2, '3.1': 1, '3.0': 1, '2.7.1': 1, '2.7.2': 1 },
  '7.1.0': { '3.1.1': 2 },
  '7.1.0.': { '2.7.5': 1, '3.1.2': 4, '3.1.1': 2, '2.7.1': 1 },
  '7.2.0.4': { '2.7.4': 1 },
  '7.03': { '3.1.': 1 },
  '7.': { '2.7.3': 1 },
  '.': { '3.1.2': 1, '2.7': 1 }
}
24 .Which Rails version has the most number of open issues
{
  '7': 2,
  '6.0.3.5': 2,
  '7.0.3.1': 14,
  '7.0': 3,
  '7.0.0': 2,
  '7.0.3': 16,
  '7.1.0.': 5,
  '6.1.6.1': 4,
  '6.0.5': 1,
  '6.1.6': 2,
  '7.0.2.4': 1,
  '6.0.2.2': 1,
  '7.0.2.3': 10,
  '6.1.5': 1,
  '6.1.4.1': 1,
  '6.1.5.1': 2,
  '6.1.3.2': 1,
  '6.0.4.4': 1,
  '6.0.4.7': 1,
  '6.1.3.1': 1,
  '6.0.3': 1,
  '6.1.4.4': 2,
  '7.0.2': 1,
  '7.0.2.2': 1,
  '6.0.4.6': 1,
  '7.0.1': 1,
  '6.1': 1
}
 Which Ruby version has the most number of open issues
{
  '3': 1,
  '2.7.2': 7,
  '2.7.5': 10,
  '3.1.2': 21,
  '3.0.2': 6,
  '2.7.1': 3,
  '3.1': 5,
  '3.1.0': 7,
  '3.1.1': 6,
  '3.0.4': 4,
  '2.6.5': 1,
  '2.7.4': 1,
  '2.7.6': 4,
  '3.0.0': 1,
  '2.6.3': 1,
  '3.0.3': 3,
  '2.6': 1,
  '2.6.8': 1,
  '2.7.3': 2,
  '3.0': 1,
  '2.7.0': 3
}
 Group closed issues by the number of reactions they have
{ '0': 332, '1': 30, '2': 10, '3': 3, '5': 1, '6': 1, '7': 1 }
 Group the issues by author_association
{ NONE: 352, CONTRIBUTOR: 127, MEMBER: 21 }
 What percentage of issues are closed based on author_association
{
  NONE: { total: 352, closed: 270, open: 82, percentage: 76.70454545454545 },
  CONTRIBUTOR: { total: 127, closed: 90, open: 37, percentage: 70.86614173228347 },
  MEMBER: { total: 21, closed: 18, open: 3, percentage: 85.71428571428571 }
}
```