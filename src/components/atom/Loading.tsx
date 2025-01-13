export const Loading = () => {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div className="tada w-96 h-96 flex items-center justify-center">
        <div className="o-pokeball"></div>
      </div>
    </section>
  );
};
