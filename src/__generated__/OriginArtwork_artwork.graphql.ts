/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _OriginArtwork_artwork$ref: unique symbol;
export type OriginArtwork_artwork$ref = typeof _OriginArtwork_artwork$ref;
export type OriginArtwork_artwork = {
    readonly id: string;
    readonly images: ReadonlyArray<({
        readonly image_url: string | null;
    }) | null> | null;
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
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "images",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "image_url",
          "args": null,
          "storageKey": null
        }
      ]
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
(node as any).hash = 'ddaefb870e6d0d2f320491427319a039';
export default node;
