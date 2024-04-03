export const dashbaordTabs = Object.freeze({
  profile: Symbol("profile"),
  newRequest: Symbol("newRequest"),
  newArticle: Symbol("newArticle"),
  uploadThesis: Symbol("uploadThesis"),
  events: Symbol("events"),
});

export const Status = {
  [0]: "wait",
  [1]: "approved",
  [2]: "seen",
  [3]: "rejected",
};
