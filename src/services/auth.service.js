// // register user function that saves the user to local storage
// const register = async (user) => {
//   const useri = {
//     username: user.username,
//     password: user.password,
//     email: user.email,
//     auth: true,
//   };
//   localStorage.setItem('useri', JSON.stringify(useri));
// };

// // login user function that looks for the user in local storage
// const login = async (user) => {
//   // check if the user exists in local storage
//   const useri = JSON.parse(localStorage.getItem('useri'));
//   if (useri.username === user.username && useri.password === user.password) {
//     return useri;
//   }
// };
// // logout user function
// const logout = async () => {
//   localStorage.removeItem('useri');
// };
// const authService = {
//   register,
//   login,
//   logout,
// };

// export default authService;
