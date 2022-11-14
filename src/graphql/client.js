import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

import { graphqlUrl } from '../config/api'

const client = new ApolloClient({
    link: new HttpLink({ uri: graphqlUrl }),
    cache: new InMemoryCache()
})

export default client