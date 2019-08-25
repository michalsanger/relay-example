// @flow

import React from 'react';
import { Heading, Text, Separator, Stack } from '@kiwicom/orbit-components';
import { graphql, QueryRenderer, createEnvironment, createNetworkFetcher } from '@kiwicom/relay';

import List from './List';
import AddForm from './AddForm';
import Footer from './Footer';
import type { TodoAppQueryResponse } from './__generated__/TodoAppQuery.graphql';

const environment = createEnvironment({
  fetchFn: createNetworkFetcher('https://graphql.kiwi.com', {
    'X-Client': 'relay-example',
  }),
});

export default function TodoApp() {
  return (
    <Stack>
      <Heading>Todo App</Heading>
      <Text>Relay local schema used for simple Todo app.</Text>

      <Separator />
      <AddForm environment={environment} />

      <QueryRenderer
        clientID="https://github.com/kiwicom/relay-example"
        environment={environment}
        query={graphql`
          query TodoAppQuery {
            __typename
            ...List_data
            ...Footer_data
          }
        `}
        onSystemError={({ error }) => {
          // eslint-disable-next-line no-console
          console.error(error);
          return <div>Error: {error.message}</div>;
        }}
        onResponse={(props: TodoAppQueryResponse) => {
          return (
            <>
              <List data={props} />
              <Footer data={props} />
            </>
          );
        }}
      />
    </Stack>
  );
}
