import {json} from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import recipes from '../../../resources/recipes.json';

export const GET = (
    () => json(recipes)
) satisfies RequestHandler
