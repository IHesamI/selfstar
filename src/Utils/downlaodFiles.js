import { downloadPrefixUlr } from "../config";

export function downlaodFile(fileName){
    return `${downloadPrefixUlr}${fileName}`
}