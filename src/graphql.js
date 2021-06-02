import gql from 'graphql-tag'

export const GET_ALL_COMPANIES_QUERY = gql`query {
    companies {
        id
        name
        address
        city
        state {
            abbreviation
        }
        zipcode
        websiteUrl
    }
}`;

export const GET_ALL_CLIENTS_QUERY = gql`query {
    clients {
        id
        name
        companyCategory {
            id
            name
        }
        address
        city
        state {
            id
            name
            abbreviation
        }
        zipcode
        phone
        fax
        websiteUrl
    }
}`;

export const GET_ALL_PROJECT_SITES_QUERY = gql`query {
    projectSites {
        id
        address
        city
        state {
            id
            name
        }
        zipcode
        accessCode
        mapUrl
    }
}`;