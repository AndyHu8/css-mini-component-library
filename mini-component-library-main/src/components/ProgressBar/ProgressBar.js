/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 10,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 20,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 30,
    padding: 5,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Container
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <BarWrapper>
        <Progressbar
          style={{ "--width": value + "%", "--height": styles.height + "px" }}
        ></Progressbar>
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  width: 100%;
  padding: var(--padding);
  background-color: ${COLORS.gray50};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Progressbar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 10px 0px 0px 10px;
`;

export default ProgressBar;
