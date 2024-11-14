export type launchProps = {
    rocket: string;
    name: string;
    date_utc: Date;
    success: boolean;
    rocketName?: string;
    company?: string;
    country?: string;
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
