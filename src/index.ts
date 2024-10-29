export type TeamMember = {
  name: string;
  email: string;
  slackID: string;
  opsGenieID: string;
  jiraID: string;
  githubID: string;
};

export type TeamMemberParts = keyof TeamMember;

export const team: TeamMember[] = [
  {
    name: "Daniel Sellers",
    email: "daniel@designfrontier.net",
    slackID: "D034S18KC22",
    opsGenieID: "daniel.sellers@company.com",
    jiraID: "620ac20f878c2f0072980f8e",
    githubID: "designfrontier",
  },
];

export const existsBySlack = (slackID: string): boolean => {
  return existsByKey(slackID, "slackID");
};

export const getBySlack = (slackID: string): TeamMember | undefined => {
  return getByKey(slackID, "slackID");
};

export const existsByGithub = (githubID: string): boolean => {
  return existsByKey(githubID, "githubID");
};

export const getByGithub = (githubID: string): TeamMember | undefined => {
  return getByKey(githubID, "githubID");
};

export const existsByOpsGenie = (opsGenieID: string): boolean => {
  return existsByKey(opsGenieID, "opsGenieID");
};

export const getByOpsGenie = (opsGenieID: string): TeamMember | undefined => {
  return getByKey(opsGenieID, "opsGenieID");
};

export const existsByEmail = (email: string): boolean => {
  return existsByKey(email, "email");
};

export const getByEmail = (email: string): TeamMember | undefined => {
  return getByKey(email, "email");
};

export const existsByJira = (jiraID: string): boolean => {
  return existsByKey(jiraID, "jiraID");
};

export const getByJira = (jiraID: string): TeamMember | undefined => {
  return getByKey(jiraID, "jiraID");
};

export const existsByKey = (id: string, key: TeamMemberParts): boolean => {
  return !!team.find((member) => member[key] === id);
};

export const getByKey = (
  id: string,
  key: TeamMemberParts
): TeamMember | undefined => {
  return team.find((member) => member[key] === id);
};
