const fakeAuthProvider = {
  isAuthenticated: false,
  signIn(callback: () => void): void {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 1000); // fake async to send a request on server
  },
  signOut(callback: () => void): void {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 500);
  }
};

export default fakeAuthProvider;
