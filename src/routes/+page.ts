import type { PageLoad } from './$types';
import type { Recipe } from '../utils/types';

export const load = (async ({ fetch }) => {
    const res = await fetch(`/api/recipes`);
    const recipes: Recipe[] = await res.json();

    return { recipes };
}) satisfies PageLoad;
