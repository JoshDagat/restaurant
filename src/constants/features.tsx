export type IFeature = {
    id: number,
    header: string,
    description: string,
    bg: string
}

export const features:IFeature[] = [
    {
        id: 1,
        header: "Enjoyable place for all the family",
        description: "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.",
        bg: "feature_one"
    },
    {
        id: 2,
        header: "The most locally sourced food",
        description: "All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.",
        bg: "feature_two"
    }
]