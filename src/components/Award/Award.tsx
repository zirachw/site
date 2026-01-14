import { styled } from "@linaria/react";

interface AwardProps {
  year: string;
  title: string;
  organization: string;
}

function Award({ year, title, organization }: AwardProps) {
  return (
    <AwardContainer>
      <Year>{year}</Year>
      <Title>{title}</Title>
      <Organization>{organization}</Organization>
    </AwardContainer>
  );
}

const AwardContainer = styled.div`
  --css-file: award;
  border-left: 3px solid var(--color-text-subtle);
  padding-left: 1.25rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--color-text);
  }

  @media (max-width: 640px) {
    padding-left: 1rem;
    border-left-width: 2px;
  }
`;

const Year = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-subtle);
  margin-bottom: 0.5rem;
  font-weight: 500;
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Title = styled.h4`
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  line-height: 1.4;
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 0.95rem;
  }
`;

const Organization = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-muted);
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 0.85rem;
  }
`;

export default Award;
