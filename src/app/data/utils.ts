import exportFromJSON from 'export-from-json'

class Utils {
    constructor() { }
    contact = {
        name: "RillVote",
        desc: 'Admin',
    }

    downloadCSV(data: any, filename: string) {
        const year = new Date().getFullYear()
        const month = new Date().getMonth() + 1
        const date = new Date().getDate()
        const hour = new Date().getHours()
        const min = new Date().getMinutes()
        const sec = new Date().getSeconds()
        const mili_sec = new Date().getMilliseconds()
        const fileName = `${filename}_${year}${month}${date}${hour}${min}${sec}${mili_sec}`

        const exportType = exportFromJSON.types.csv
        exportFromJSON({ data, fileName, exportType })
    }

    swiper_data = []
};

export default Utils