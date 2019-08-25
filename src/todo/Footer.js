// @flow

import React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';

import Counter from './Counter';
import Filter from './Filter';
import type { Footer_data as FooterType } from './__generated__/Footer_data.graphql';

type Props = {|
  +data: FooterType,
|};

function Footer(props: Props) {
  const todo = (props?.data?.todoApp?.todos ?? [])[0];
  if (!todo || !todo.id) return null;

  return (
    <>
      <Counter data={props.data} />
      <Filter data={props.data} />
    </>
  );
}

export default createFragmentContainer(Footer, {
  data: graphql`
    fragment Footer_data on RootQuery {
      todoApp {
        todos {
          id
        }
      }
      ...Counter_data
      ...Filter_data
    }
  `,
});
