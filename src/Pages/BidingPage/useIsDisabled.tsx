import React, { useEffect, useState } from "react";

const useIsDisabled = (walletAmount: string, currentBid: string, currentValue: number ) => {
  const [isDisabled, setIsDisabled] = useState<{
    isDisabled: boolean;
    message: string;
  }>({ isDisabled: false, message: "입찰하기" });

  const parsedWalletAmount = parseFloat(walletAmount.split(" BBR")[0]);
  const parsedCurrentBid = parseFloat(currentBid.split(" BBR")[0]);

  useEffect(() => {
    if (walletAmount && parsedWalletAmount < parsedCurrentBid) {
      setIsDisabled({ isDisabled: true, message: "잔고가 부족합니다." });
    } else if (walletAmount && currentValue < parsedCurrentBid) {
      setIsDisabled({
        isDisabled: true,
        message: "현재 입찰가 이상의 금액을 입력해주세요.",
      });
    } else {
      setIsDisabled({
        isDisabled: false,
        message: "입찰하기",
      });
    }
  }, [walletAmount, parsedWalletAmount, parsedCurrentBid, currentValue]);
  return {
    isDisabled: isDisabled.isDisabled,
    message: isDisabled.message,
  };
};

export default useIsDisabled;
