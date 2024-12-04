export interface Project {
    description: string;
    image: string;
    name: string;
    website: string;
}

const PATH = process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '';

export const projects: Project[] = [
    {
        description: 'power_description',
        image: `${PATH}/musclog-logo.png?height=64&width=64`,
        name: 'Musclog',
        website: 'https://werules.com/musclog'
    },
]
