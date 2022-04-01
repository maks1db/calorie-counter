export type Item = {
    name: string,
    calories: number,
    date: number
}

export type SavedItems = {
    date: string,
    items: Item[]
}