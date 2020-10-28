import { Component } from "react";
import { NavBar, Icon, InputItem, WingBlank, Button, Modal } from "antd-mobile";
import { createForm } from "rc-form";

import "./index.css";

class VerifyPhone extends Component {
  state = {
    isDisabled: true,
  };
  // componentDidMount() {
  //   Modal.alert(
  //     "注册协议及隐私政策",
  //     <span className="policy-text">
  //       在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议
  //       <strong className="policy-strong-text">
  //         请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）
  //         :<span className="policy-content">《硅谷用户注册协议》</span>
  //         <span className="policy-content">《硅谷隐私政策》</span>
  //       </strong>
  //     </span>,

  //     [
  //       {
  //         text: "不同意",
  //         onPress: () => console.log("cancel"),
  //       },
  //       {
  //         text: "同意",
  //         onPress: () => console.log("ok"),
  //         style: { backgroundColor: "red", color: "#fff" },
  //       },
  //     ]
  //   );
  // }

  // 当用户输入是数据时就会触发
  validator = (rule, value, callback) => {
    console.log(rule, value);
    const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57]|199)[0-9]{8}$/;
    let isDisabled = true;
    if (reg.test(value)) {
      // 更新状态
      isDisabled = false;
      this.setState({
        isDisabled,
      });
    } else {
    }
    // calllback必须调用 否则校验失败
    // callback(message) 校验失败
    // callback() 校验成功
    callback();
  };
  render() {
    const { isDisabled } = this.state;
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon className="left" type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
        >
          硅谷注册
        </NavBar>
        <WingBlank>
          <div className="verify-phone-input">
            <InputItem
              {...getFieldProps("phone", {
                // 表单校验规则
                rules: [{ validator: this.validator }],
              })}
              clear
              placeholder="请输入手机号"
            >
              <div className="verify-phone-prefix">
                <span>+86</span>
                <Icon type="down" />
              </div>
            </InputItem>
          </div>
          <Button className="warning-but" type="warning" disabled={isDisabled}>
            下一步
          </Button>
        </WingBlank>
      </div>
    );
  }
}
// creacteForm是高阶组件，给VerifyPhone传递操作表单form对象
export default createForm()(VerifyPhone);
