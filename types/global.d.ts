type Params = { 
    id: string,
}

type CategoriesData = {
    id: number,
    created_at?: Date | string,
    name?: string,
    slug?: string,
    isChecked?: boolean,
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
    created_at?: Date | string,
    title: string,
    description: string,
    unhealthyconvo: UnhealthyConvo,
    healthyconvo: HealthyConvo,
    categories?: CategoriesData[]
}

type FormScenarioData = {
    id: number,
    created_at?: Date | string,
    title: string,
    description: string,
    unhealthyconvo: string,
    healthyconvo: string,
    categories?: CategoriesData[]
}