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