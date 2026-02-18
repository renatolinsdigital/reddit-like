interface UpVoteProps {
  postId: number;
  votesCount: number;
  onVoted(postId: number): void;
  isVotedByCurrentUser?: boolean;
}

export default UpVoteProps;
