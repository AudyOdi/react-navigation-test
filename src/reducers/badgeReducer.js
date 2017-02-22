// @flow

export default function badgeReducer(state, action) {
  if (state == null) {
    return {
      notification: 1,
      chat: 2,
      challenge: 3,
      community: 20,
      profile: 5,
    };
  }
  return state;
}
