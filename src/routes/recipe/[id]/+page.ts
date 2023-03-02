import type { Recipe } from 'src/routes/+page'
import type { PageData, PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
    const res = await fetch(`/api/recipe/${params.id}`);
    const item: Recipe = await res.json();
    
    return { item };
}) satisfies PageLoad;
