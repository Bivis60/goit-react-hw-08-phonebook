export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUsername = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthIsLoading = state => state.auth.isLoading;

export const selectAuthError = state => state.auth.error;
