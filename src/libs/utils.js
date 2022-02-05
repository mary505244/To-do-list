export function formatDateTime (timeStamp){
    const date = new Date(timeStamp);

    const y = date.getFullYear();
    const m = date.getMonth()+1;
    const d = date.getDate();
    const h = date.getHours();
    const i = date.getMinutes();
    const s = date.getSeconds();

    return `${y}年${m}月${d}日 ${h}:${i}:${s}`
}