export type IHighlights = {
    id: number,
    name: string,
    description: string,
    imgSlug: string
}

export const highlights:IHighlights[] = [
    {
        id: 1,
        name: 'Seared Salmon Fillet',
        description: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
        imgSlug: 'salmon-mobile.jpg'
    },
    {
        id: 2,
        name: 'Rosemary Filet Mignon',
        description: 'Our prime beef served to your taste with a delicious choice of seasonal sides',
        imgSlug: 'filet-mignon-mobile.jpg'
    },
    {
        id: 3,
        name: 'Summer Fruit Chocolate Mousse',
        description: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
        imgSlug: 'mousee-mobile.jpg'
    },
]