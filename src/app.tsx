import {defineApp} from "@umijs/max";

export async function getInitialState(): Promise<{
  auth: boolean
}> {
  return {
    auth: false
  };
}

export default defineApp({
  layout: (initData) => {
    // console.log(initData)
    const {setInitialState} = initData;
    return {
      onPageChange: async () => {
        await setInitialState((init) => {
          return {
            ...init,
            auth: true
          }
        })
      },
      menu: {
        request: async () => {
          return [
            {
              name: '首页',
              path: '/',
              component: '@/pages/index'
            },
            {
              name: '权限',
              path: '/permissions',
              component: '@/pages/permissions',
            }
          ]
        }
      }
    }
  }
})
