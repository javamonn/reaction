/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
import { GridItem_artwork$ref } from "./GridItem_artwork.graphql";
declare const _OriginArtwork_artwork$ref: unique symbol;
export type OriginArtwork_artwork$ref = typeof _OriginArtwork_artwork$ref;
export type OriginArtwork_artwork = {
    readonly " $fragmentRefs": GridItem_artwork$ref;
    readonly " $refType": OriginArtwork_artwork$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "OriginArtwork_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "GridItem_artwork",
      "args": null
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
(node as any).hash = '2485c6799e959aa0cd0ac820cfc8d094';
export default node;
