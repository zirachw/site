import { styled } from "@linaria/react";

export default function Home() {
  return (
    <HomeWrapper>
      {/* Introduction */}
      <Header>
        <Left1></Left1>
        <Right1></Right1>
      </Header>

      {/* Latest Writings */}
      <Section></Section>

      {/* Projects */}
      <Section></Section>

      {/* Experience */}
      <Section></Section>

      {/* Skills & Awards */}
      <Section></Section>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  --css-file: homepage;
`;

const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Left1 = styled.div`
  flex: 1 1 55%;
  text-align: left;

  @media (max-width: 1024px) {
    flex: 1 1 100%;
  }
`;

const Right1 = styled.div`
  flex: 1 1 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex: 1 1 100%;
    width: 100%;
    min-height: 238px;
  }

  @media (max-width: 768px) {
    min-height: 210px;
  }

  @media (max-width: 640px) {
    min-height: 182px;
  }
`;

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2.5rem 0;

  @media (max-width: 640px) {
    padding: 2rem 0;
  }
`;
