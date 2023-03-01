export type IChoice = {
    id: number,
    value: string,
    description?: string,
    imgSlug: string
}

export const choices: IChoice[] = [
    {
        id:1,
        value: "Family Gathering",
        description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
        imgSlug: "family-mobile.jpg"
    },
    {
        id:2,
        value: "Special Events",
        description: "We'll make your special events truly special. We guarantee your guests will go home talking about your special event.",
        imgSlug: "special-events.jpg"
    },
    {
        id:3,
        value: "Social Events",
        description: "Focus on socializing. We'll take care of the rest so you won't have to.",
        imgSlug: "social-events.jpg"
    },
]