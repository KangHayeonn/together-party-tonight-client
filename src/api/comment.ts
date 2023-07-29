import { instance, instanceWithToken } from "@/api";
const prefix = "/api/comment";

interface AddCommentType {
  clubId: number;
  commentContent: string;
}

interface EditCommentType {
  commentContent: string;
  commentId: number;
}

const Comment = {
  // 댓글 작성하기
  async v1AddComment(data: AddCommentType) {
    try {
      const url = `${prefix}`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 댓글 수정하기
  async v1EditComment(data: EditCommentType) {
    try {
      const url = `${prefix}`;
      const result = await instanceWithToken.put(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 댓글 삭제하기
  async v1DeleteComment(commentId: number) {
    try {
      const url = `${prefix}`;
      const result = await instanceWithToken.delete(url, {
        data: {
          commentId: commentId,
        },
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 댓글 조회하기(입장)
  async v1GetComment(clubId: number) {
    try {
      const url = `${prefix}/${clubId}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 퇴장하기
  async v1LeaveComment(clubId: number) {
    try {
      const url = `${prefix}/${clubId}`;
      const result = await instanceWithToken.delete(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Comment;
