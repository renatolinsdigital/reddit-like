import { PostEntryInfo } from './Posts.model';

declare module '*.json' {
  const posts: PostEntryInfo[];
  export default posts;
}
