import axios from "axios"
import { randomUUID } from "crypto"
import fs from "fs"
import { tmpdir } from "os"
import path from "path"

export async function createTempFile(url: string, ext: string = ".csv") {
    const response = await axios.get(url, {responseType: "arraybuffer"})
    const buffer = Buffer.from(response.data, "base64")
    const tempFile = path.join(tmpdir(), `${randomUUID()}${ext}`)
    fs.writeFileSync(tempFile, buffer)
    setTimeout(() => {
        if (!fs.existsSync(tempFile)) return
        fs.unlink(tempFile, () => {})
    }, 1000*60*2)
    return tempFile
}

export async function downloadKarutaCSV(url: string) {
    const filePath = await createTempFile(url)
    return {
        file: fs.readFileSync(`${filePath}`),
        path: filePath
    } 
}