import { styled } from "@linaria/react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "default" | "simple" | "project";
  disabled?: boolean;
}

function Button({
  children,
  href,
  icon,
  iconPosition = "right",
  variant = "default",
  disabled = false,
}: ButtonProps) {
  const content = (
    <>
      {icon && iconPosition === "left" && <Icon>{icon}</Icon>}
      {children}
      {icon && iconPosition === "right" && <Icon>{icon}</Icon>}
    </>
  );

  if (href) {
    return variant === "simple" ? (
      <SimpleLink href={href}>{content}</SimpleLink>
    ) : variant === "project" ? (
      <ProjectLink href={href} $disabled={disabled}>
        {content}
      </ProjectLink>
    ) : (
      <DefaultLink href={href}>{content}</DefaultLink>
    );
  }

  return variant === "simple" ? (
    <SimpleBtn>{content}</SimpleBtn>
  ) : variant === "project" ? (
    <ProjectBtn $disabled={disabled}>{content}</ProjectBtn>
  ) : (
    <DefaultBtn>{content}</DefaultBtn>
  );
}

const baseStyles = `
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
`;

const defaultVariant = `
  background-color: var(--color-text-secondary);
  color: var(--color-background);
  border: 2px solid var(--color-text-secondary);

  &:hover {
    background-color: var(--color-text);
    border-color: var(--color-text);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--color-shadow-light);
  }
`;

const simpleVariant = `
  background-color: transparent;
  color: var(--color-text-secondary);
  border: none;
  padding: 0.5rem 0;
  text-decoration: none;

  &:hover {
    color: var(--color-text);
    gap: 0.75rem;
    text-decoration: none;
  }

  &:visited {
    color: var(--color-text-secondary);
  }

  &:visited:hover {
    color: var(--color-text);
  }

  @media (max-width: 640px) {
    padding: 0.5rem 0;
  }
`;

const projectVariant = `
  background-color: var(--color-text-muted);
  color: white;
  border: none;
  padding: 0.625rem;
  font-size: 0.85rem;
  font-weight: 500;
  justify-content: center;

  &:hover {
    background-color: var(--color-text);
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    padding: 0.625rem;
    font-size: 0.85rem;
  }
`;

const DefaultBtn = styled.button`
  --css-file: button;
  ${baseStyles}
  ${defaultVariant}
`;

const SimpleBtn = styled.button`
  --css-file: button;
  ${baseStyles}
  ${simpleVariant}
`;

const DefaultLink = styled(Link)`
  --css-file: button;
  ${baseStyles}
  ${defaultVariant}
`;

const SimpleLink = styled(Link)`
  --css-file: button;
  ${baseStyles}
  ${simpleVariant}
`;

const ProjectBtn = styled.button<{ $disabled?: boolean }>`
  --css-file: button;
  ${baseStyles}
  ${projectVariant}
  background-color: ${(props) => (props.$disabled ? "#999" : "var(--color-text-muted)")};
  cursor: ${(props) => (props.$disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.$disabled ? "#999" : "var(--color-text)")};
    transform: ${(props) => (props.$disabled ? "none" : "translateY(-2px)")};
  }
`;

const ProjectLink = styled(Link)<{ $disabled?: boolean }>`
  --css-file: button;
  ${baseStyles}
  ${projectVariant}
  background-color: ${(props) => (props.$disabled ? "#999" : "var(--color-text-muted)")};
  cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};

  &:hover {
    background-color: ${(props) => (props.$disabled ? "#999" : "var(--color-text)")};
    transform: ${(props) => (props.$disabled ? "none" : "translateY(-2px)")};
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.2em;
`;

export default Button;
