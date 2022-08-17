const stackColors = {
  Typescript: "bg-sky-600",
  React: "bg-sky-500",
  Tailwindcss: "bg-rose-500",
  Expressjs: "bg-lime-600",
  SocketIO: "bg-rose-500",
  Golang: "bg-cyan-500",
  Flutter: "bg-sky-500",
  Firebase: "bg-amber-500",
};

export type StackColors = keyof typeof stackColors;

const ParseColor = <T extends StackColors>(str: T) => {
  return stackColors[str];
};

export default ParseColor;
