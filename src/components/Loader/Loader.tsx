import React from "react";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";

interface ILoaderProps {
  children: React.ReactNode;
  props: {
    size: number;
    color: string;
  };
}

const override = css`
  display: block;
  margin: 0 12px 0 0;
  border-width: 3px;
`;

const Loader: React.FC<ILoaderProps> = ({
  children,
  props: { size, color },
}) => (
  <>
    {" "}
    <ClipLoader size={size} color={color} loading={true} css={override} />{" "}
    <span>{children}</span>
  </>
);

export default Loader;
