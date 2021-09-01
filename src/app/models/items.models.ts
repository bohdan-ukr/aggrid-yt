import { IdModel } from './id.models';
import { SnippetModel } from './snippet.models'

export interface ItemModel {
    kind: string;
    id: IdModel;
    snippet: SnippetModel;
    videoId: string;
}