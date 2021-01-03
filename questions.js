function getqList(grade) {
    let qList = [];
    for(key in kanjis){
        if(kanjis[key]["jlpt_new"] == grade){
            qList.push(key);
        }
    }
    return qList;
}

function chooseqList(grade, limit) {
    var qList = [];

    //call getqList before calling this function
    var qs = getqList(grade);

    if(qs.length < limit) limit = qs.length;

    while(qList.length != limit){
        var rand = qs[Math.floor(Math.random() * qs.length)];
        if(!qList.includes(rand)){
            qList.push(rand);
        }
        console.log('questions');
    }
    return qList;   
}
