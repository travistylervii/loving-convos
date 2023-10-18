type Params = { 
    id: string,
}

type CategoriesData = {
    id: number,
    created_at?: Date,
    name: string,
    slug: string,
}

type Points = {
    pointTitle: string,
    pointText: string
}

type Breakdown = {
    points: Points[],
    summary: string,
}

type Convo = {
    name: string,
    text: string,
}

type UnhealthyConvo = {
    breakdown: Breakdown,
    convo: Convo[]
}

type HealthyConvo = {
    breakdown: Breakdown,
    convo: Convo[]
}

type ScenarioData = {
    id: number,
    created_at: string,
    title: string,
    description: string,
    unhealthyconvo: UnhealthyConvo,
    healthyconvo: HealthyConvo,
    categories: CategoriesData[]
}