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
      <p>手动设置InitialState是没问题的，但是在app.tsx中设置，就会出现不更新的情况</p>
    </div>
  );
}
