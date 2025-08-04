export const Pill = ({ text }: { text: string }) => {
  return (
    <span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
      {text}
    </span>
  );
};
