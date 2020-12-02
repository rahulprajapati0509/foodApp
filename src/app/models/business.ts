export interface Business {
    business_id: string;
    name: string;
    categories: string;
    stars: number;
    address: string;
    attributes: string;
    city: string;
    hours: string;
    id: number;
    is_open: string;
    latitude: string;
    longitude: string;
    postal_code: string;
    review_count: string;
    state: string;
    restraandreview: Restraandreview[];
}

export interface Restraandreview {
    business_id: string;
    cool: number;
    date: string;
    funny: number;
    id: string;
    review_id: string;
    stars: number;
    text: string;
    useful: number;
    user_id: string;
}

export interface BusinessQuery {
    business_features: Business[];
}
