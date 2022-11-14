import {Button} from "antd";
import {useModel} from "@umijs/max";

export default function HomePage() {
  const { initialState, setInitialState } = useModel('@@initialState');

  return (
    <div>
      <Button onClick={async ()=>{
        setInitialState((init)=>{
          return {
            ...init,
            auth:true
          }
        })
      }}>设置</Button>
      <p>手动设置InitialState是没问题的</p>
      <p>但是在app.tsx中设置时，直接访问 http://localhost:8001/permissions  会出现无权限，需要切换路由重新进入才行</p>
    </div>
  );
}
