import { styled, keyframes } from "~/stitches.config";

const Root = styled("div", {});

const animation = keyframes({
  "0%": {
    transform: "scaleY(1)",
  },
  "50%": {
    transform: "scaleY(0.4)",
  },
  "100%": {
    transform: "scaleY(1)",
  },
});

const Bar = styled("div", {
  width: 3,
  margin: 2,
  display: "inline-block",
  background: "$highlight",
  animation: `1s cubic-bezier(0.2, 0.68, 0.18, 1.08) 0.1s infinite normal both running ${animation}`,
  variants: {
    size: {
      md: {
        height: 15,
      },
      sm: {
        height: 10,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

// TODO: Infer the size prop
export function Spinner(props: { size?: "md" | "sm" }) {
  const bars = Array(props.size === "sm" ? 3 : 5)
    .fill(100)
    .map((a, b) => a * b);
  return (
    <Root>
      {bars.map((b) => (
        <Bar size={props.size} style={{ animationDelay: b + "ms" }} />
      ))}
    </Root>
  );
}