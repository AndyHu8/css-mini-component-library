import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 30,
    padding: 0,
    fontSize: 14,
    iconSize: 22,
  },
  large: {
    height: 50,
    padding: 2,
    fontSize: 18,
    iconSize: 30,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const sizes = SIZES[size];
  return (
    <Wrapper
      style={{
        "--height": sizes.height + "px",
        "--padding": sizes.padding + "px",
      }}
    >
      <IconWrapper style={{ "--size": sizes.iconSize + "px" }}>
        <Icon id={icon} sizes={sizes.iconSize} />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        size={16}
        style={{ "--width": width + "px", "--fontSize": sizes.fontSize + "px" }}
      ></Input>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
`;

const Input = styled.input`
  font-size: var(--fontSize);
  width: var(--width);
  border: none;
  border-bottom: 1px solid black;
  padding-left: 26px;
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
