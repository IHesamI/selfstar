import { sendEvent, sendLog } from "../api/apis";


/**
 *  @param {string} type 
 *  @param {string} name 
 * */ 
export function sendEventByType(type,name){
    sendEvent(type,name);
}

/**
 *  @param {string} pathName 
 * */ 
export function sendPageEvent(pathName){
    sendLog(pathName)
}