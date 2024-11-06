import {
  team,
  TeamMember,
  existsBySlack,
  getBySlack,
  existsByGithub,
  getByGithub,
  existsByOpsGenie,
  getByOpsGenie,
  existsByEmail,
  getByEmail,
  existsByJira,
  getByJira,
  existsByKey,
  getByKey,
} from "./index";

// Mock data
const mockTeam: TeamMember[] = [
  {
    name: "Daniel Sellers",
    email: "daniel@designfrontier.net",
    slackID: "D034S18KC22",
    opsGenieID: "daniel.sellers@company.com",
    jiraID: "620ac20f878c2f0072980f8e",
    githubID: "designfrontier",
  },
];

// Set up team with mock data
beforeEach(() => {
  team.length = 0;
  team.push(...mockTeam);
});

describe("Team member lookup functions", () => {
  describe("existsBySlack", () => {
    it("should return true if slackID exists", () => {
      expect(existsBySlack("D034S18KC22")).toBe(true);
    });

    it("should return false if slackID does not exist", () => {
      expect(existsBySlack("D999S99KC99")).toBe(false);
    });
  });

  describe("getBySlack", () => {
    it("should return team member if slackID exists", () => {
      expect(getBySlack("D034S18KC22")).toEqual(mockTeam[0]);
    });

    it("should return undefined if slackID does not exist", () => {
      expect(getBySlack("D999S99KC99")).toBeUndefined();
    });
  });

  describe("existsByGithub", () => {
    it("should return true if githubID exists", () => {
      expect(existsByGithub("designfrontier")).toBe(true);
    });

    it("should return false if githubID does not exist", () => {
      expect(existsByGithub("nonexistent")).toBe(false);
    });
  });

  describe("getByGithub", () => {
    it("should return team member if githubID exists", () => {
      expect(getByGithub("designfrontier")).toEqual(mockTeam[0]);
    });

    it("should return undefined if githubID does not exist", () => {
      expect(getByGithub("nonexistent")).toBeUndefined();
    });
  });

  describe("existsByOpsGenie", () => {
    it("should return true if opsGenieID exists", () => {
      expect(existsByOpsGenie("daniel.sellers@company.com")).toBe(true);
    });

    it("should return false if opsGenieID does not exist", () => {
      expect(existsByOpsGenie("nonexistent@company.com")).toBe(false);
    });
  });

  describe("getByOpsGenie", () => {
    it("should return team member if opsGenieID exists", () => {
      expect(getByOpsGenie("daniel.sellers@company.com")).toEqual(mockTeam[0]);
    });

    it("should return undefined if opsGenieID does not exist", () => {
      expect(getByOpsGenie("nonexistent@company.com")).toBeUndefined();
    });
  });

  describe("existsByEmail", () => {
    it("should return true if email exists", () => {
      expect(existsByEmail("daniel@designfrontier.net")).toBe(true);
    });

    it("should return false if email does not exist", () => {
      expect(existsByEmail("nonexistent@domain.com")).toBe(false);
    });
  });

  describe("getByEmail", () => {
    it("should return team member if email exists", () => {
      expect(getByEmail("daniel@designfrontier.net")).toEqual(mockTeam[0]);
    });

    it("should return undefined if email does not exist", () => {
      expect(getByEmail("nonexistent@domain.com")).toBeUndefined();
    });
  });

  describe("existsByJira", () => {
    it("should return true if jiraID exists", () => {
      expect(existsByJira("620ac20f878c2f0072980f8e")).toBe(true);
    });

    it("should return false if jiraID does not exist", () => {
      expect(existsByJira("nonexistent-jira-id")).toBe(false);
    });
  });

  describe("getByJira", () => {
    it("should return team member if jiraID exists", () => {
      expect(getByJira("620ac20f878c2f0072980f8e")).toEqual(mockTeam[0]);
    });

    it("should return undefined if jiraID does not exist", () => {
      expect(getByJira("nonexistent-jira-id")).toBeUndefined();
    });
  });

  describe("existsByKey", () => {
    it("should return true if key exists for given id", () => {
      expect(existsByKey("D034S18KC22", "slackID")).toBe(true);
    });

    it("should return false if key does not exist for given id", () => {
      expect(existsByKey("nonexistent-id", "slackID")).toBe(false);
    });
  });

  describe("getByKey", () => {
    it("should return team member if key exists for given id", () => {
      expect(getByKey("D034S18KC22", "slackID")).toEqual(mockTeam[0]);
    });

    it("should return undefined if key does not exist for given id", () => {
      expect(getByKey("nonexistent-id", "slackID")).toBeUndefined();
    });
  });
});
