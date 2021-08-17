import React from 'react'

type IHeaderProps = {
    links: string[],
}

const Header: React.FC<IHeaderProps> = ({links}) => {
  return (
    <header>
      <nav></nav>
    </header>
  );
};

export default Header
