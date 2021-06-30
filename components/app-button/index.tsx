import { PropsWithChildren } from "react";

import { StyledButton } from "./styles";

interface ButtonProps {
  onClick?: () => void;
}

export function AppButton({
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
