import { ThumbnailModel } from './thumbnail.models';

export interface SnippetModel {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ThumbnailModel;
}
