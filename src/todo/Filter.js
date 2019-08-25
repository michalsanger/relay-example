// @flow

import React from 'react';
import { Button, Stack } from '@kiwicom/orbit-components';
import {
  createFragmentContainer,
  graphql,
  type RelayProp,
  commitLocalUpdate,
} from '@kiwicom/relay';
import { ROOT_ID } from 'relay-runtime'; // eslint-disable-line import/no-extraneous-dependencies

import type { Filter_data as FilterType } from './__generated__/Filter_data.graphql';

type Props = {|
  +data: FilterType,
  +relay: RelayProp,
|};

function setFilter(environment, value: string) {
  commitLocalUpdate(environment, store => {
    const root = store.get(ROOT_ID) || store.getRoot();
    const todoApp = root.getOrCreateLinkedRecord('todoApp', 'TodoApp');
    todoApp.setValue(value, 'filter');
  });
}

function Filter(props: Props) {
  const filter = props?.data?.todoApp?.filter ?? 'ALL';
  return (
    <Stack direction="row">
      <Button
        onClick={() => setFilter(props.relay.environment, 'ALL')}
        bordered={filter !== 'ALL'}
        size="small"
      >
        All
      </Button>
      <Button
        onClick={() => setFilter(props.relay.environment, 'ACTIVE')}
        bordered={filter !== 'ACTIVE'}
        size="small"
      >
        Active
      </Button>
      <Button
        onClick={() => setFilter(props.relay.environment, 'COMPLETED')}
        bordered={filter !== 'COMPLETED'}
        size="small"
      >
        Completed
      </Button>
    </Stack>
  );
}

export default createFragmentContainer(Filter, {
  data: graphql`
    fragment Filter_data on RootQuery {
      todoApp {
        filter
      }
    }
  `,
});
