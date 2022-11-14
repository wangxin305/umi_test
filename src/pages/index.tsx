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
    </div>
  );
}
