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
      menu: {
        request:async () => {
          return [
            {
              title: '首页',
              path: '/',
              component: '@/pages/index'
            },
            {
              title: '权限',
              path: '/permissions',
              component: '@/pages/permissions',
            }
          ]
        }
      }
    }
  }
})
