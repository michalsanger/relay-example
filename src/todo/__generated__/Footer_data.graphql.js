/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Counter_data$ref = any;
type Filter_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Footer_data$ref: FragmentReference;
declare export opaque type Footer_data$fragmentType: Footer_data$ref;
export type Footer_data = {|
  +todoApp: ?{|
    +todos: ?$ReadOnlyArray<{|
      +id: string
    |}>
  |},
  +$fragmentRefs: Counter_data$ref & Filter_data$ref,
  +$refType: Footer_data$ref,
|};
export type Footer_data$data = Footer_data;
export type Footer_data$key = {
  +$data?: Footer_data$data,
  +$fragmentRefs: Footer_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Footer_data",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Counter_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Filter_data",
      "args": null
    },
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
                  "name": "id",
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
(node/*: any*/).hash = '5254d8a9a1815b22731e4f711d6b68cb';
module.exports = node;
