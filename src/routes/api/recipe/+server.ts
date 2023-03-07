import fs from 'fs/promises'
import { fail, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Recipe } from '../../../utils/types'

export interface NewRecipe {
    title: string,
    description: string,
    ingredients: string,
    steps: string,
    minutes: string,
    difficulty: number,
    image: string,
}

/***
   * Converts a dataUrl base64 image string into a File byte array
   * dataUrl example:
   * data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAYAAABRGWr/AAAAAXNSR0IA...etc
   */
function dataUrlToBlob(dataUrl: string): [Blob, string] {
    const arr = dataUrl.split(',')
    if (arr.length < 2) { throw Error() }

    const mimeArr = arr[0].match(/:(.*?);/)
    if (!mimeArr || mimeArr.length < 2) { throw Error() }

    const type = mimeArr[1].split('/')[1]
    const buff = Buffer.from(arr[1], 'base64')
    return [new Blob([buff]), type]
  }

export const POST = (async ({ request }) => {
    try {
        const jsonFile = `${process.cwd()}/src/resources/recipes.json`
        const data: NewRecipe = await request.json()
        let db: Recipe[] = JSON.parse((await fs.readFile(jsonFile)).toString())

        const [blob, type] = dataUrlToBlob(data.image)

        const static_path = `imgs/${crypto.randomUUID()}.${type}`
        await fs.writeFile(`${process.cwd()}/static/${static_path}`, Buffer.from(await blob.arrayBuffer()))

        const split = (str: string) => 
            str.split('\n')
                .map(s => s.trim())
                .filter(s => s)

        db.push({
            id: crypto.randomUUID(),
            title: data.title,
            description: data.description,
            img: static_path,
            time: Number.parseInt(data.minutes),
            ingredients: split(data.ingredients),
            steps: split(data.steps),
            difficulty: data.difficulty as 1 | 2 | 3,
        })

        await fs.writeFile(jsonFile, JSON.stringify(db, null, 4))

        //TODO: Better return value
        return text("hello")
    } catch (err) {
        throw fail(500, { err: err })
    }
}) satisfies RequestHandler;
