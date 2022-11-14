export default function (initialState) {
  console.log(initialState.auth)
  const {auth} = initialState
  return {
    auth() {
      return auth
    }
  }
}
