import React, { useEffect } from "react";
import PageLayout from "./PageLayout";

import styles from "./styles.module.css";
import { emailPattern } from "./EditProfile";
import { SubmitHandler, useForm } from "react-hook-form";
import Button, { BtnType } from "../../components/Button/Button";
import classNames from "classnames";

type Inputs = {
  email: string;
  notifications: {
    ownAuctions: boolean;
    newAuctions: boolean;
  };
};
// 이메일 알림
const Notifications = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("submiting form", data);

     useEffect(() => {
       isSubmitSuccessful && reset({});
     }, [reset, isSubmitSuccessful]);

  return (
    <PageLayout heading="이메일 알림 설정" className={styles.notification}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classNames(styles.emailContainer, styles.inputContainer)}>
          <label htmlFor="email">이메일 주소</label>
          <input
            placeholder="이메일 주소"
            {...register("email", {
              required: { value: true, message: "this field can not be empty" },
              pattern: {
                value: emailPattern,
                message: "please provide a valid email address!",
              },
            })}
          />
          {errors.email && (
            <span className={styles.errors}>{errors?.email?.message}</span>
          )}
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.checkBox}>
              <input
                {...register("notifications.ownAuctions")}
                type="checkbox"
              />
              <div className={styles.labelContainer}>
                <label htmlFor="ownAuctions">나의 경매 진행상황 알립</label>
                <p>
                  입찰이 확정되었을 때, 나의 입찰가를 초과한 입찰가가 있을때,{" "}
                  <br />
                  경매가 종료되었을 때 이메일 알림을 수신합니다.
                </p>
              </div>
            </div>

            <div className={styles.checkBox}>
              <input
                {...register("notifications.newAuctions")}
                type="checkbox"
              />
              <div className={styles.labelContainer}>
                <label htmlFor="newAuctions">새로운 NFT 경매 알림</label>
                <p>
                  베리옥션에서 새로운 NFT 경매가 시작하면 이메일 알림을
                  받습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button
          fontSize="16px"
          onClick={(e) => (e.type = "submit")}
          btnType={BtnType.PRIMARY}>
          저장하기
        </Button>
      </form>
    </PageLayout>
  );
};

export default Notifications;
