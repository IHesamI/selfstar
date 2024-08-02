/**
 *
 * @param {{categories: [], comments: [], profiles: []}} data
 */
export function convertToTableData(data) {
  return [
    ...data.categories.map((item) => ({
      ...item,
      tableType: "category",
      tableTitle: "contentTitle",
      id: item.id,
    })),
    ...data.comments.map((item) => ({
      ...item,
      tableType: "comment",
      tableTitle: "commentApprove",
      id: item.id,
    })),
    ...data.profiles.map((item) => ({
      ...item,
      tableType: "profile",
      tableTitle: "profileApprove",
      id: item.profile_id,
    })),
  ];
}
