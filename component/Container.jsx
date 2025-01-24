const Container = (props) => {
  return (
    <div className="bg-slate-800 h-screen w-screen overflow-x-hidden">
      {props.children}
    </div>
  );
};
export default Container;
