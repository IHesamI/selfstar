export const dashbaordTabs = Object.freeze({
  profile: Symbol("profile"),
  newRequest: Symbol("newRequest"),
  newArticle: Symbol("newArticle"),
  uploadThesis: Symbol("uploadThesis"),
  events: Symbol("events"),
});

export const editTabs = Object.freeze({
  homepage: Symbol("homepage"),
  footer:   Symbol("footer"),
  aboutUs:  Symbol("aboutUs"),
  members:  Symbol("members"),
});

export const adminTabs = Object.freeze({
  requests: Symbol("requests"),
  events: Symbol("events"),
  siteEdit: Symbol("siteEdit"),
  students: Symbol("students"),
  chartLogs: Symbol("chartLogs"),
});

export const loginTab = Object.freeze({
  login: Symbol("login"),
  signUp: Symbol("signUp"),
});

export const Status = {
  [0]: "wait",
  [1]: "approved",
  [2]: "seen",
  [3]: "rejected",
};

export const homePageStateEnum = {
  edit:'edit',
  editEng:'english',
}

export const blogPostItemsType = {
  text:'text',
  image:'image',
}

export const downloadPrefixUlr='http://localhost:3000/files/download/';