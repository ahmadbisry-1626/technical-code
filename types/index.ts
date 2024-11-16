export type launchProps = {
    rocket: string;
    name: string;
    date_utc: Date;
    success: boolean;
    rocketName?: string;
    company?: string;
    country?: string;
}

export type ghibliProps = {
    id: string;
    title: string;
    original_title: string;
    image: string;
    movie_banner: string;
    description: string;
    director: string;
    release_date: string;
    rt_score: string;
    url: string;
}

export type rocketName = {
    id: string;
    name: string;
    company: string;
    country: string;
}

export type searchParams = {
    searchParams: { [key: string]: string | string[] | undefined }
}

export type SectionProps = {
    sectionItem: {
        name: string,
        href: string
    }[]
}
