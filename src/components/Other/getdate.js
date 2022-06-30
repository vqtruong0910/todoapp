function getDateCurrent() {
    const today = new Date();
    const date = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + today.getDate()).slice(-2);
    return date;
}

export default getDateCurrent;