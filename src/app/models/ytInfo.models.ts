export interface IdModel {
    kind: string;
    videoId: string;
}

export interface ImageModel {
    url: string;
    width: number;
    height: number;
}

export interface ThumbnailModel {
    default: ImageModel;
    medium: ImageModel;
    high: ImageModel;
}

export interface SnippetModel {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ThumbnailModel;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}

export interface ItemModel {
    kind: string;
    etag: string;
    id: IdModel;
    snippet: SnippetModel;
    videoId: string;
}

export interface ytInfo {
    etag: string;
    items: ItemModel[];
    kind: string;
    nextPageToken: string;
    pageInfo: any;
    regionCode: string
}