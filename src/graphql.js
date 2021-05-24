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
    companies {
        id
        name
        companyCategory(id: 1) {
            name
        }
        address
        city
        state {
            id
            name
        }
        zipcode
        phone
        fax
        websiteUrl
    }
}`;