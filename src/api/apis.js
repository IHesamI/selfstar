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

export async function removeAvatar(profile_id) {
  return axiosObj.delete(`/profile/avatar/${profile_id}`);
}

export async function removeResume(profile_id) {
  return axiosObj.delete(`/profile/resume/${profile_id}`);
}

export async function sendUrl(url) {
  axiosObj.post("/logs/url", { url });
}

export async function sendEvent(type, name) {
  axiosObj.post("/logs/events", { type, name });
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
export async function getDeactives(){
  return axiosObj.get('/admin/deactives');
}
export async function deleteEventApi(event_id) {
  return axiosObj.delete(`/events/${event_id}`);
}

export async function getSlidesApi(user_id) {
  return axiosObj.get(`category/slide/user/${user_id}`);
}

export async function getSlideByIdApi(slide_id) {
  return axiosObj.get(`category/slide/${slide_id}`);
}

export async function postSlideApi(slideDto) {
  return axiosObj.post("/category", { ...slideDto, type: "slide" });
}

export async function deleteCategoryApi(slide_id) {
  return axiosObj.delete(`/category/${slide_id}`);
}

export async function editSlideApi(slide_id, editedSlide) {
  return axiosObj.patch(`/category/${slide_id}`, editedSlide);
}

export async function postThesisApi(thesisInfo) {
  return axiosObj.post(`/category`, { ...thesisInfo, type: "thesis" });
}

export async function getThesisByIdApi(thesis_id) {
  return axiosObj.get(`/category/thesis/${thesis_id}`, thesis_id);
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
  return axiosObj.post(`/category`, {...createArticleDTO,type:'article'});
}

export async function getArticleApi(user_id) {
  return axiosObj.get(`/category/article/user/${user_id}`);
}

export async function editArticleApi(article_id, editArticle) {
  return axiosObj.patch(`/category/${article_id}`, editArticle);
}

export async function getLatestCategoriesApi() {
  return axiosObj.get(`/category/category/cats/latest`);
}

export async function getArticleByIdApi(article_id) {
  return axiosObj.get(`/articles/article/${article_id}`);
}

export async function getCategoryById(id){
return axiosObj.get(`/category/category/${id}`)
}

export async function deleteArticleApi(article_id) {
  return axiosObj.delete(`/articles/${article_id}`);
}

export async function uploadFile(url, file, identtifier) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("identifier", identtifier);
 return axiosObj.post(`/files/${url}`, formData);
}

export async function postResponseApi(request_id, data) {
  return axiosObj.patch(`/responses/${request_id}`, data);
}


export async function getCategoriesByUrl(url) {
  return axiosObj.get(`/category/${url}`);
}

export async function getLogs(){
  return axiosObj.get('/logs')
}

export async function getCategoriesCount(){
  return axiosObj.get('/logs/categoryCounts')
}

export async function getCategoriesDownload(){
  return axiosObj.get('/logs/categoryDownloads')
}

export async function downloadCountApi(id){
  return axiosObj.patch(`/category/download/${id}`)
}

export async function activeComment(id){
  return axiosObj.patch(`/comments/${id}`)
}

export async function createBlogPost() {
  return axiosObj.post(`/blogPost`, {});
}

export async function createBlogPostItem(post_id, type) {
  return axiosObj.post(`/blogPost/create-item`, {
    id: post_id,
    type,
  });
}

export async function uploadBlogPostImage(file){
 return uploadFile('blog',file,'')
 
}

export async function editPostBlogItem(newItem) {
  return axiosObj.patch(`/blogPost/edit-item/${newItem.id}`, newItem);
}

export async function editTextBlogPostItem(newItem) {
  return editPostBlogItem(newItem);
}

export async function editImageBlogPostItem(item, file) {
  const data = (await uploadBlogPostImage(file)).data;
  return editPostBlogItem({ ...item, content: data.fileName });
}

export async function getAllBlogPosts() {
  return axiosObj.get("/blogPost/");
}
export async function getActiveBlogPosts() {
  return axiosObj.get("/blogPost/actives");
}

export async function uploadPostImage(blogPost, file) {
  const data = (await uploadBlogPostImage(file)).data;
  return updateBlogPost({ ...blogPost, thubmnail: data.fileName });
}

export async function updateBlogPost(blogPost) {
  return axiosObj.patch(`/blogPost/post/${blogPost.id}`,blogPost);
}

export async function removeBlogPost(blogPostId) {
  return axiosObj.delete(`/blogPost/${blogPostId}`);
}

export async function getBlogPost(blogPostId) {
  return axiosObj.get(`/blogPost/${blogPostId}`);
}

export async function removePostItem(itemId) {
  return axiosObj.delete(`/blogPost/delete-item/${itemId}`);
}

export async function removeFile(fileName) {
  return axiosObj.delete(`/files/${fileName}`);
}