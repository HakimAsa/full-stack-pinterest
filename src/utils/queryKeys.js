export const queryKeys = {
  comments: (pinId) => ['comments', { pinId }],
  // add others as needed...
}

export const commentKeys = {
  all: ['comments'],
  list: (pinId) => ['comments', pinId],
}
