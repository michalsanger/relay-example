/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Counter_data$ref: FragmentReference;
declare export opaque type Counter_data$fragmentType: Counter_data$ref;
export type Counter_data = {|
  +todoApp: ?{|
    +todos: ?$ReadOnlyArray<{|
      +isDone: ?boolean
    |}>
  |},
  +$refType: Counter_data$ref,
|};
export type Counter_data$data = Counter_data;
export type Counter_data$key = {
  +$data?: Counter_data$data,
  +$fragmentRefs: Counter_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Counter_data",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "todoApp",
          "storageKey": null,
          "args": null,
          "concreteType": "TodoApp",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "todos",
              "storageKey": null,
              "args": null,
              "concreteType": "Todo",
              "plural": true,
              "selections": [
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3559e24f733abe19226571378e1f642c';
module.exports = node;
