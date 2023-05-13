import { Form, Button, Input } from "antd";
import { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

type ValidationConditionType = {
  msg: string;
  isValid: boolean;
};

function between8to16Charaters(value: string) {
  return value.length > 8 && value.length < 16;
}
function containsUppercase(value: string) {
  return /[A-Z]/.test(value);
}
function containsNonWhitespaces(value: string) {
  return value.length > 0 && /^\S*$/.test(value);
}
function oneDigitAndOneSpecialCharater(value: string) {
  return /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(value);
}

const PasswordValidationForm = () => {
  const [newPassword, setNewPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [successMsg, setSuccessMsg] = useState<JSX.Element>();

  const [validationCondition1, setValidationCondition1] =
    useState<ValidationConditionType>({
      msg: "Password should be between 8 to 16 characters.",
      isValid: false,
    });
  const [validationCondition2, setValidationCondition2] =
    useState<ValidationConditionType>({
      msg: "Should contain atleast one capital letter.",
      isValid: false,
    });
  const [validationCondition3, setValidationCondition3] =
    useState<ValidationConditionType>({
      msg: "Should not contain space.",
      isValid: false,
    });
  const [validationCondition4, setValidationCondition4] =
    useState<ValidationConditionType>({
      msg: "There should be one digit and one special character.",
      isValid: false,
    });

  const isNewPasswordValid: boolean =
    validationCondition1.isValid &&
    validationCondition2.isValid &&
    validationCondition3.isValid &&
    validationCondition4.isValid;

  const isPasswordMatched = (): boolean => {
    if (newPassword && newPassword?.length > 0) {
      return newPassword === confirmPassword;
    }
    return false;
  };

  const onFinish = (values: any) => {
    console.log(values);

    setSuccessMsg(
      <h3>
        The password has been changed successfully, your new password is{" "}
        <span className="font-semibold underline">{values.newPassword}</span>
      </h3>
    );
  };

  return (
    <section>
      <Form
        name="newPassword"
        style={{ maxWidth: 600 }}
        initialValues={{
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            {
              validator(_, value) {
                return new Promise((resolve, reject) => {
                  setValidationCondition1((prevState) => ({
                    ...prevState,
                    isValid: between8to16Charaters(value),
                  }));
                  setValidationCondition2((prevState) => ({
                    ...prevState,
                    isValid: containsUppercase(value),
                  }));
                  setValidationCondition3((prevState) => ({
                    ...prevState,
                    isValid: containsNonWhitespaces(value),
                  }));
                  setValidationCondition4((prevState) => ({
                    ...prevState,
                    isValid: oneDigitAndOneSpecialCharater(value),
                  }));

                  if (isNewPasswordValid) {
                    resolve(true);
                  } else {
                    reject();
                  }
                });
              },
            },
          ]}
        >
          <Input
            onChange={(event) => {
              setNewPassword(event.currentTarget.value);
            }}
          />
        </Form.Item>

        <Form.Item label="Confirm Password" name="confirmPassword">
          <Input
            disabled={!isNewPasswordValid}
            onChange={(event) => {
              setConfirmPassword(event.currentTarget.value);
            }}
          />
        </Form.Item>

        <>
          {validationCondition1.isValid ? (
            <MdOutlineDone className="text-green-600 text-xl" />
          ) : (
            <RxCross2 className="text-red-400 text-xl" />
          )}
          <label>{validationCondition1.msg}</label>
        </>
        <>
          {validationCondition2.isValid ? (
            <MdOutlineDone className="text-green-600 text-xl" />
          ) : (
            <RxCross2 className="text-red-400 text-xl" />
          )}
          <label>{validationCondition2.msg}</label>
        </>
        <>
          {validationCondition3.isValid ? (
            <MdOutlineDone className="text-green-600 text-xl" />
          ) : (
            <RxCross2 className="text-red-400 text-xl" />
          )}
          <label>{validationCondition3.msg}</label>
        </>
        <>
          {validationCondition4.isValid ? (
            <MdOutlineDone className="text-green-600 text-xl" />
          ) : (
            <RxCross2 className="text-red-400 text-xl" />
          )}
          <label>{validationCondition4.msg}</label>
        </>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button disabled={!isPasswordMatched()} htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        {successMsg}
      </Form>
    </section>
  );
};

export default PasswordValidationForm;
