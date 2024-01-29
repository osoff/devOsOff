function HeaderBlock({ children, pereliv = false }) {
  return (
    <h2
      className={`sm:text-5xl text-4xl leading-[4rem] ${pereliv && "pereliv"}`}
    >
      {children}
    </h2>
  );
}

export default HeaderBlock;
