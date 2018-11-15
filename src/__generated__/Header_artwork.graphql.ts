/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _Header_artwork$ref: unique symbol;
export type Header_artwork$ref = typeof _Header_artwork$ref;
export type Header_artwork = {
    readonly title: string | null;
    readonly date: string | null;
    readonly " $refType": Header_artwork$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "Header_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'ecaf6e2e02e7323ea24487467bddbd43';
export default node;
