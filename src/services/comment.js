import { post } from '../utils/request';

// Create comment
export const createComment = (params) => post('/api/comments', params);