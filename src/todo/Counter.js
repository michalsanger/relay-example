// @flow

import React from 'react';
import { Text } from '@kiwicom/orbit-components';
import { createFragmentContainer, graphql } from '@kiwicom/relay';

import type { Counter_data as CounterType } from './__generated__/Counter_data.graphql';

type Props = {|
  +data: CounterType,
|};

function Counter(props: Props) {
  const todos = props?.data?.todoApp?.todos ?? [];
  const count = todos.filter(t => !t.isDone).length;

  return (
    <Text>
      {count} {count === 1 ? 'item' : 'items'} left
    </Text>
  );
}

export default createFragmentContainer(Counter, {
  data: graphql`
    fragment Counter_data on RootQuery {
      todoApp {
        todos {
          isDone
        }
      }
    }
  `,
});
