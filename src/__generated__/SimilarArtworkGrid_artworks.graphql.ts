/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
import { GridItem_artwork$ref } from "./GridItem_artwork.graphql";
declare const _SimilarArtworkGrid_artworks$ref: unique symbol;
export type SimilarArtworkGrid_artworks$ref = typeof _SimilarArtworkGrid_artworks$ref;
export type SimilarArtworkGrid_artworks = ReadonlyArray<{
    readonly id: string;
    readonly __id: string;
    readonly image: ({
        readonly aspect_ratio: number;
    }) | null;
    readonly " $fragmentRefs": GridItem_artwork$ref;
    readonly " $refType": SimilarArtworkGrid_artworks$ref;
}>;



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "SimilarArtworkGrid_artworks",
  "type": "Artwork",
  "metadata": {
    "plural": true
  },
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
      "name": "__id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "aspect_ratio",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "GridItem_artwork",
      "args": null
    }
  ]
};
(node as any).hash = '3abc774f7eb76ac2a3224e36c94c8699';
export default node;
