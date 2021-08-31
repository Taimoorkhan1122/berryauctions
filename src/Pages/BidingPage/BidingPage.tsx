import React, { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Button, { BtnType } from '../../components/Button/Button';
import { User } from '../../Context/GlobalProvider';
import { AuctionData, auctionData } from '../../utils/data';
import { CurrencySelect } from './Biding';
import styles from "./biding.module.css";
import useIsDisabled from './useIsDisabled';

type Inputs = {
  bidAmount: number;
  currency: string;
};

interface IBidingPageProps {
  data: AuctionData;
  user: User;
  handleClcik: () => void;
}


const BidingPage: React.FC<IBidingPageProps> = ({
  data,
  user,
  handleClcik,
}) => {
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
      bidAmount: 0,
      currency: "BBR",
    },
  });

  const currentValue = watch("bidAmount");
  const { isDisabled, message } = useIsDisabled(
    user.walletAmount,
    data.currentBid,
    currentValue
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("submiting form", data);
  };

  useEffect(() => {
    isSubmitSuccessful && handleClcik();
    reset({
      bidAmount: 0,
      currency: "BBR",
    });
  }, [isSubmitSuccessful, reset, handleClcik]);

  return (
    <div className={styles.bidContainer}>
      <div className={styles.pricing}>
        <h2>입찰하기</h2>
        <span>현재 입찰가</span>
        <span>{data.currentBid}</span>
      </div>

      <div className={styles.inputContainer}>
        <form
          id="hook-form"
          onSubmit={handleSubmit(onSubmit)}
          className={styles.pricingForm}>
          <input
            {...register("bidAmount", {
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
        <div className={styles.yourBalance}>
          <span className={styles.balance}>Your Balance</span>
          <span className={styles.amount}>{user.walletAmount}</span>
        </div>

        <p className={styles.info}>
          입찰 후에는 다시 회수하실 수 없습니다. <br />
          단, 낙찰되지 않으면 해당 입찰금액은 자동으로 입찰자의 월렛으로
          회수됩니다.
        </p>
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

export default BidingPage
