/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Item_todo$ref: FragmentReference;
declare export opaque type Item_todo$fragmentType: Item_todo$ref;
export type Item_todo = {|
  +id: string,
  +text: ?string,
  +isDone: ?boolean,
  +$refType: Item_todo$ref,
|};
export type Item_todo$data = Item_todo;
export type Item_todo$key = {
  +$data?: Item_todo$data,
  +$fragmentRefs: Item_todo$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Item_todo",
  "type": "Todo",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "text",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isDone",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '947dc56978ab31550428a03f383489f9';
module.exports = node;
