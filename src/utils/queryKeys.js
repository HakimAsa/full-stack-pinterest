export const commentKeys = {
  all: ['comments'],
  list: (pinId) => ['comments', pinId],
}

export const profileKeys = {
  all: ['profile'],
  list: (username) => ['profile', username],
}
export const interactionsKeys = {
  all: ['interactions-check'],
  list: (pinId) => ['interactions-check', pinId],
}
