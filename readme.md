# Team!

This is a reusable module for engineering team member config information.
Can be used for bots and automation. Please keep your information up to date!

The good news is it is fairly immutable so setting it up when you start is
probably good enough.

## How to use this repo

Clone it and use it!

## Where to get your IDs

adding details on the more complicated ones

### Slack

1. go to yourself (cmd + k "your name here")
2. click on your name at the top left of the page
3. copy the id at the very bottom of the modal that appears
4. add that as your slack id in src/index.ts

### JIRA

1. go to Jira and let it load to make sure you are logged in
2. change the url to: https://{my-company-domain}.atlassian.net/rest/api/3/myself
3. copy the "accountId" field from the response
4. add it as your jira id in src/index.ts
