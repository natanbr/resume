export interface Resume {
    experience: Array<Experience>;
}

export interface Experience {
    title: ExperienceMeta;
    desciption: Array<string>;
    skills: Array<string>;
}

export interface ExperienceMeta {
    year_from: string;
    year_to: string;
    role: string;
    company: string;
    company_link?: string;
    location: string;
}
