/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _Header_artwork$ref: unique symbol;
export type Header_artwork$ref = typeof _Header_artwork$ref;
export type Header_artwork = {
    readonly id: string;
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
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
(node as any).hash = '9b7065d99c31ffef8933f73dfe7ed7c6';
export default node;
