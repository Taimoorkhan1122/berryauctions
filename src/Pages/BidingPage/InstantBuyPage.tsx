import React, { useEffect, useState } from "react";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button, { BtnType } from "../../components/Button/Button";
import { User } from "../../Context/GlobalProvider";
import { AuctionData, auctionData } from "../../utils/data";
import { CurrencySelect } from "./Biding";
import styles from "./biding.module.css";
import useIsDisabled from "./useIsDisabled";

type Inputs = {
  immdiatePrice: number;
  currency: string;
};

interface IInstantBuyPageProps {
  data: AuctionData;
  user: User;
  handleClcik: () => void;
}

const InstantBuyPage: React.FC<IInstantBuyPageProps> = ({ data, user, handleClcik }) => {
    const [currency, setCurrency] = useState("BBR");
    const {
      register,
      handleSubmit,
      control,
      setValue,
      watch,
      reset,
      formState: { errors, isSubmitSuccessful },
    } = useForm<Inputs>({
      mode: "onBlur",
      defaultValues: {
        immdiatePrice: 0,
        currency: "BBR",
      },
    });

    const currentValue = watch("immdiatePrice");
    const { isDisabled, message } = useIsDisabled(
      user.walletAmount,
      data.currentBid,
      currentValue
    );
  console.log("is Disable button  ---->", isDisabled);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log("submiting form", data);
    };

     useEffect(() => {
       isSubmitSuccessful && handleClcik();
       reset({
         immdiatePrice: 0,
         currency: "BBR",
       });
     }, [isSubmitSuccessful, reset, handleClcik]);

  return (
    <div className={styles.bidContainer}>
      <div className={styles.instantBuyContainer}>
        <div className={styles.pricing}>
          <h2>즉시구매하기</h2>
          <span>즉시구매가</span>
          <span>{data.currentBid}</span>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.formContainer}>
            <form
              id="hook-form"
              onSubmit={handleSubmit(onSubmit)}
              className={styles.pricingForm}>
              <input
                {...register("immdiatePrice", {
                  required: {
                    value: true,
                    message: "This is field cannot be empty",
                  },
                })}
                type="number"
              />
              <span className={styles.dropdown}>
                <Controller
                  render={({ field }) => (
                    <CurrencySelect
                      currency={currency}
                      handleClick={(e) => {
                        setCurrency(e.value);
                        setValue("currency", currency);
                      }}
                    />
                  )}
                  name="currency"
                  control={control}
                  defaultValue=""
                />
              </span>
            </form>
            <small className={styles.small}>1,584,302원</small>
          </div>
          <div className={styles.yourBalance}>
            <span className={styles.balance}>Your Balance</span>
            <span className={styles.amount}>{user.walletAmount}</span>
          </div>
        </div>
      </div>

      <Button
        form="hook-form"
        type="submit"
        disabled={isDisabled}
        width="100%"
        btnType={BtnType.PRIMARY}>
        {message}
      </Button>
    </div>
  );
};

export default InstantBuyPage;
