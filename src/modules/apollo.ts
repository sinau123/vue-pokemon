import { provideApolloClient } from '@vue/apollo-composable'

import apolloClient from '~/services/client'

export const install = () => {
  provideApolloClient(apolloClient)
}
