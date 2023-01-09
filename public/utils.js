export const toFullDate = (ISOdate) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    var month = months[new Date(ISOdate).getMonth() + 1]
    var day = new Date(ISOdate).getDay()
    var year = new Date(ISOdate).getFullYear()

    return `${month} ${day}, ${year}`
}