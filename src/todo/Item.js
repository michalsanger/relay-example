// @flow

import React from 'react';
import { Checkbox, Text } from '@kiwicom/orbit-components';
import { ListItem } from '@kiwicom/orbit-components/lib/List';
import {
  createFragmentContainer,
  graphql,
  commitLocalUpdate,
  type RelayProp,
} from '@kiwicom/relay';

import type { Item_todo as ItemType } from './__generated__/Item_todo.graphql';

type Props = {|
  +todo: ItemType,
  +relay: RelayProp,
|};

function Item({ todo: { id, text, isDone }, relay }: Props) {
  return (
    <ListItem>
      <Checkbox
        onChange={() => {
          commitLocalUpdate(relay.environment, store => {
            const todo = store.get(id);
            if (!todo) return;
            todo.setValue(!todo.getValue('isDone'), 'isDone');
          });
        }}
        checked={isDone ?? false}
        label={<Text italic={isDone ?? false}>{text ?? ''}</Text>}
      />
    </ListItem>
  );
}

export default createFragmentContainer(Item, {
  todo: graphql`
    fragment Item_todo on Todo {
      id
      text
      isDone
    }
  `,
});
