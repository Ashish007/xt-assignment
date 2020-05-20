export const createdOn = (isoDate) =>{
    const date = isoDate.split("T")[0]
    const time = isoDate.split("T")[1].split(".")[0]
    const milisecDiff = new Date().getTime() - new Date(date+" "+time)
    const seconds = Math.floor(milisecDiff/1000);
    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    const days = Math.floor(hours/24);
    const years = Math.floor(days/365);
    return years+" years ago";
}