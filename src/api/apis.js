import { axiosObj } from "./config";

/**
 * @param {{email:string,password:string}} payload
 *
 */
export async function loginApi(payload) {
  const result = await axiosObj.post("/users/login", payload);
  return result.data;
}

export async function signUpApi(createData) {
  return (await axiosObj.post("/users/create", createData)).data;
}

/**
 * @param {{
 * educationHistory:string,
 * email:string,
 * last_name:string,
 * name:string,
 * password:string,
 * links:{title:string,link:string}[],
 * lang:"fa"|"en"
 * }} payload
 *
 */
export async function editProfileApi(profile_id, payload) {
  const result = await axiosObj.patch(`/profile/${profile_id}`, payload);
  return result.data;
}

export async function getMembersApi() {
  return axiosObj.get("/profile");
}

export async function sendLog(href) {
  axiosObj.post("/logs", { log: href });
}

/**
 * @param {{
 * name:string,
 * last_name:string,
 * email:string,
 * password:string,
 * }} createData
 * */

export async function addEvent(eventInfo) {
  axiosObj.post("/events/create", eventInfo);
}

export async function getEventsApi(user_id) {
  return axiosObj.get(`/events/${user_id}`);
}

export async function getAllEventsApi() {
  return axiosObj.get(`/events`);
}

export async function deleteEventApi(event_id) {
  return axiosObj.delete(`/events/${event_id}`);
}

export async function getSlidesApi(user_id) {
  return axiosObj.get(`/slides/${user_id}`);
}

export async function postSlideApi(slideDto) {
  return axiosObj.post("/slides/create", slideDto);
}

export async function deleteSlideApi(slide_id) {
  return axiosObj.delete(`/slides/${slide_id}`);
}

export async function editSlideApi(slide_id, editedSlide) {
  return axiosObj.patch(`/slides/${slide_id}`, editedSlide);
}

export async function postThesisApi(thesisInfo) {
  return axiosObj.post(`/thesis/create`, thesisInfo);
}

export async function postRequestApi(requestInfo) {
  return axiosObj.post(`/requests/create`, requestInfo);
}

export async function getRequestApi(request_id) {
  return axiosObj.get(`/requests/${request_id}`);
}

export async function deleteRequestApi(request_id) {
  return axiosObj.delete(`/requests/${request_id}`);
}

export async function editRequestApi(request_id, editedRequest) {
  return axiosObj.patch(`/requests/${request_id}`, editedRequest);
}


export async function getAllRequestsApi() {
  return axiosObj.get("/requests");
}

export async function postArticleApi(createArticleDTO) {
  return axiosObj.post(`/articles/create`, createArticleDTO);
}

export async function getArticleApi(user_id) {
  return axiosObj.get(`/articles/${user_id}`);
}

export async function editArticleApi(article_id, editArticle) {
  return axiosObj.patch(`/articles/${article_id}`, editArticle);
}

export async function deleteArticleApi(article_id) {
  return axiosObj.delete(`/articles/${article_id}`);
}

export async function uploadFile(url, file, identtifier) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("identifier", identtifier);
  axiosObj.post(`/files/${url}`, formData);
}

export async function postResponseApi(request_id, data) {
  return axiosObj.patch(`/responses/${request_id}`, data);
}


export async function getCategoriesByUrl(url) {
  return axiosObj.get(`/${url}`);
}