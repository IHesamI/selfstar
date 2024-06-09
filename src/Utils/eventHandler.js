import { sendUrl } from "../api/apis";

/**
 *  @param {string} pathName
 * */
export function sendPageEvent(pathName) {
  sendUrl(pathName);
}
