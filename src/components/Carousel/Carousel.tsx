"use client";

import { styled } from "@linaria/react";
import { Children, useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const MAX_VISIBILITY = 2;

function Carousel({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  return (
    <CarouselWrapper>
      {active > 0 && (
        <NavButton className="left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </NavButton>
      )}
      {Children.map(children, (child, i) => (
        <CardContainer
          key={i}
          style={
            {
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            } as React.CSSProperties
          }
        >
          {child}
        </CardContainer>
      ))}
      {active < count - 1 && (
        <NavButton className="right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </NavButton>
      )}
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  --css-file: carousel;
  position: relative;
  width: 340px;
  height: 238px;
  perspective: 500px;
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    width: 300px;
    height: 210px;
  }

  @media (max-width: 640px) {
    width: 260px;
    height: 182px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 3;
    pointer-events: none;

    @media (max-width: 768px) {
      width: 60px;
    }

    @media (max-width: 640px) {
      width: 50px;
    }
  }

  &::before {
    left: -80px;

    @media (max-width: 768px) {
      left: -60px;
    }

    @media (max-width: 640px) {
      left: -50px;
    }
  }

  &::after {
    right: -80px;
  }
`;

const NavButton = styled.button`
  color: #e5e7eb;
  font-size: 2rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: none;
  border: none;
  padding: 0;
  transition: color 0.2s ease;
  opacity: 0.7;

  &.left {
    left: -2.5rem;
    transform: translateY(-50%);
  }

  &.right {
    right: -2.5rem;
    transform: translateY(-50%);
  }

  &:hover {
    color: #9ca3af;
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const CardContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(var(--offset) * 50deg)) scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem)) translateX(calc(var(--direction) * -3rem));
  filter: blur(calc(var(--abs-offset) * 1rem)) grayscale(calc(var(--abs-offset) * 150%))
    brightness(calc(1 - var(--abs-offset) * 0.5));
  transition: all 0.3s ease-out;
`;

export default Carousel;
