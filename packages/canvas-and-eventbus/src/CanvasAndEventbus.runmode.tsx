import React, { useEffect, useState, useCallback } from "react";
import { SDK } from "@qcloud-apaas/web-sdk";

import { Modal, Input, Form, Button } from "tea-component";


/*
 * SDK.useEventBus(namespace) 创建一个特定命名空间的EventBus
 * on(name, handler) 监听一个事件，返回取消监听的方法
 * once(name, handler) 与on相似，触发一次后解绑
 * off(name, handler) 取消事件绑定
 * emit(name, data) 触发事件，可携带数据
 */

/*
 * SDK.useCanvas() 返回一个getValue 和 setValue, 提供一个页面级的存取器
 * getValue(key, value) 获取值
 * setValue(key) 设置值
 * 这个值是属于页面级的存储，当切换页面时，这个值将消失
 */

const CustomRunComponent = (props) => {
  const { compId, title } = props;
  const { setValue } = SDK.useCanvas();
  const [visible, setVisible] = useState(false);
  const { value, onChange } = SDK.useModel(compId);
  const { on } = SDK.useEventBus("example");
  console.log(SDK.useModel(compId));
  
  // useEffect(() => {
  //   const cancel = on("example_showModal", () => {
  //     setVisible(true);
  //   });
  //   return () => cancel();
  // }, [on]);

  const handleChange = useCallback(
    (e) => {
      console.log(e);
      // const val = e.target.value;
      onChange(e);
      setValue("example_modalValue", e);
    },
    [onChange, setValue]
  );

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开弹窗
      </Button>
      <Modal visible={visible} caption={title} onClose={() => {setVisible(false);}}>
        <Modal.Body><Input value={value} onChange={handleChange}></Input></Modal.Body>
        <Modal.Footer>
          <Button type="primary" onClick={() => {
            setVisible(false);
          }}>
            确定
          </Button>
          <Button type="weak" onClick={() => {
            setVisible(false);
          }}>
            取消
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomRunComponent;
