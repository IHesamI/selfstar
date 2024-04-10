export const dashbaordTabs = Object.freeze({
  profile: Symbol("profile"),
  newRequest: Symbol("newRequest"),
  newArticle: Symbol("newArticle"),
  uploadThesis: Symbol("uploadThesis"),
  events: Symbol("events"),
});

export const adminTabs = Object.freeze({
  requests: Symbol("requests"),
  events: Symbol("events"),
  siteEdit: Symbol("siteEdit"),
  students: Symbol("students"),
});

export const loginTab = Object.freeze({
  login:Symbol('login'),
  signUp:Symbol('signUp'),
})


export const Status = {
  [0]: "wait",
  [1]: "approved",
  [2]: "seen",
  [3]: "rejected",
};
