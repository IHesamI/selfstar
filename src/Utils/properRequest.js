/**
 * @param {{articles:[], slides:[], thesis:[], comments:[], profiles:[]}} data 
 * */ 
export function convertToProperData(data){
    return [data.articles.map(addTitle),
        data.slides.map(addTitle), 
        data.thesis.map(addTitle),
    ];
}

function addProfiles(item) {
    
}

function addTitle(item) {
  return item.title;
}

