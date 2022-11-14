export default function (initialState) {
  console.log(initialState)
  const {auth} = initialState
  return {
    auth() {
      return auth
    }
  }
}
