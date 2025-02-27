/**
 * @flow
 * @relayHash 409659c20b4e68994668bedb0a200926
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PollingQueryVariables = {||};
export type PollingQueryResponse = {|
  +currency: ?{|
    +code: ?string,
    +rate: ?number,
  |}
|};
export type PollingQuery = {|
  variables: PollingQueryVariables,
  response: PollingQueryResponse,
|};
*/


/*
query PollingQuery {
  currency(code: "usd") {
    code
    rate
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "code",
    "value": "usd"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rate",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PollingQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currency",
        "storageKey": "currency(code:\"usd\")",
        "args": (v0/*: any*/),
        "concreteType": "CurrencyDetail",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PollingQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currency",
        "storageKey": "currency(code:\"usd\")",
        "args": (v0/*: any*/),
        "concreteType": "CurrencyDetail",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
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
  },
  "params": {
    "operationKind": "query",
    "name": "PollingQuery",
    "id": "d37229d14fa8caef41ae9c69de99cc3f",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '204ab3f8f9271cfa6ff288d192478ae5';
/*:: declare var __DEV__: boolean; */
if (__DEV__) {
  (node/*: any*/).params.text = "query PollingQuery {\n  currency(code: \"usd\") {\n    code\n    rate\n    id\n  }\n}\n";
}
module.exports = node;
