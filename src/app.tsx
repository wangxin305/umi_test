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
              name: '้ฆ้กต',
              path: '/',
              component: '@/pages/index'
            },
            {
              name: 'ๆ้',
              path: '/permissions',
              component: '@/pages/permissions',
            }
          ]
        }
      }
    }
  }
})
