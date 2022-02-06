function _addZreo(value){
    return value < 10 ? ('0'+ value ) : value
}

export function formatDateTime (timeStamp){
    const date = new Date(timeStamp);

    const y = date.getFullYear();
    const m = date.getMonth()+1;
    const d = date.getDate();
    const h = _addZreo(date.getHours());
    const i = _addZreo(date.getMinutes());
    const s = _addZreo(date.getSeconds());

    return `${y}年${m}月${d}日 ${h}:${i}:${s}`
}