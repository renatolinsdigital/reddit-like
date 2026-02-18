import { User } from 'src/domain/models';

interface Meta {
  url: string;
  title: string;
  author: string;
}

export interface PostEntryInfo {
  user?: User; // This field is added by us so a temporary image is displayed within posts entries loop
  meta: Meta;
  upvotes: number;
  category: string;
  comments: number;
  isOwner?: boolean;
  created_at: Date | number | string;
}
