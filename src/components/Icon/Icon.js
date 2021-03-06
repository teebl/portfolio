import React from "react";
import styled from "styled-components";

const StyledIconLink = styled.a`
  :hover {
    fill: orange;
  }
`;

const Icon = props => {
  const icon = props.icon;

  if (icon.link !== "") {
    return (
      <StyledIconLink href={icon.link} title={icon.type}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 512 512"
        >
          <path d={icon.svg} />
        </svg>
      </StyledIconLink>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 512 512"
      >
        <path d={icon.svg} />
      </svg>
    );
  }
};

Icon.defaultProps = {
  size: "60"
};

export default Icon;
