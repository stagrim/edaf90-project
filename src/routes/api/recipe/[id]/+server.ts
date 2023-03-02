import {error, json} from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import recipes from '../../../../resources/recipes.json'

export const GET = (({ params }) => {
    const recipe = recipes.find(r => r.id === params.id)
    if (!recipe) {
        throw error(404, 'Not Found');
    }
    return json(recipe)
}) satisfies RequestHandler
