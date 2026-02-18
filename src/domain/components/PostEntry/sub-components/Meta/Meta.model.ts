import { User } from 'src/domain/models';

interface MetaProps {
  user: User;
  author: string;
  isOwner?: boolean;
  comments?: number;
  createdAt: Date | string | number;
}

export default MetaProps;
