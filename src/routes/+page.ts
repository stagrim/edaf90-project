import type { PageLoad } from './$types';

export interface Recipe {
    id: string,
    title: string,
    img: string,
    description: string,
    time: number,
    difficulty: 1 | 2 | 3,
    ingredients: string[],
    steps: string[]
}

export const load = (async ({ fetch }) => {
    const res = await fetch(`/api/recipes`);
    const item: Recipe[] = await res.json();
    
    return { item };
}) satisfies PageLoad;
