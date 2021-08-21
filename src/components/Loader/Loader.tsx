import React from 'react'
import { ClipLoader } from 'react-spinners';
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 12px 0 0;
  border-width: 3px;
`;

const Loader: React.FC = () => (
  <>
    {" "}
    <ClipLoader loading={true} color={"#fff"} css={override} size={30} />{" "}
    <span>연결중...</span>
  </>
);

export default Loader
