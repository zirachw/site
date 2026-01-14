import { styled } from "@linaria/react";

interface ChipProps {
  children: React.ReactNode;
  variant?: "default" | "transparent";
}

function Chip({ children, variant = "default" }: ChipProps) {
  return <StyledChip $variant={variant}>{children}</StyledChip>;
}

const StyledChip = styled.span<{ $variant: "default" | "transparent" }>`
  --css-file: chip;
  display: inline-block;
  padding: ${(props) => (props.$variant === "transparent" ? "0.1875rem 0.5rem" : "0.5rem 1rem")};
  background-color: ${(props) =>
    props.$variant === "transparent" ? "rgba(255, 255, 255, 0.2)" : "var(--color-chip-bg)"};
  color: ${(props) => (props.$variant === "transparent" ? "white" : "var(--color-chip-text)")};
  border-radius: ${(props) => (props.$variant === "transparent" ? "10px" : "9999px")};
  font-size: ${(props) => (props.$variant === "transparent" ? "0.65rem" : "0.875rem")};
  font-weight: 500;
  transition: all 0.2s ease, background-color 0.3s ease, color 0.3s ease;
  backdrop-filter: ${(props) => (props.$variant === "transparent" ? "blur(10px)" : "none")};

  &:hover {
    background-color: ${(props) =>
      props.$variant === "transparent" ? "rgba(255, 255, 255, 0.3)" : "var(--color-hover)"};
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    padding: ${(props) =>
      props.$variant === "transparent" ? "0.1875rem 0.5rem" : "0.4rem 0.8rem"};
    font-size: ${(props) => (props.$variant === "transparent" ? "0.65rem" : "0.8rem")};
  }
`;

export default Chip;
