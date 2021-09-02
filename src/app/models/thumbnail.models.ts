import { ImageModel } from './image.models';

export interface ThumbnailModel {
    default: ImageModel;
    medium: ImageModel;
    high: ImageModel;
}
