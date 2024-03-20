const HEAD = (
  <div
    key="head"
    className="w-[35px] h-[35px] border-[5px] border-slate-100 rounded-full absolute top-[50px] right-[-15px]"
  />
);

const BODY = (
  <div
    key="body"
    className="w-[5px] h-[75px] bg-slate-100 absolute top-[85px] right-0"
  />
);

const RIGHT_ARM = (
  <div
    key="right-arm"
    className="w-[60px] h-[5px] bg-slate-100 absolute top-[130px] right-[-60px] transform rotate-[-30deg] origin-bottom-left"
  />
);

const LEFT_ARM = (
  <div
    key="left-arm"
    className="w-[60px] h-[5px] bg-slate-100 absolute top-[130px] right-[5px] transform rotate-[30deg] origin-bottom-right"
  />
);

const RIGHT_LEG = (
  <div
    key="right-leg"
    className="w-[60px] h-[5px] bg-slate-100 absolute top-[155px] right-[-55px] transform rotate-[60deg] origin-bottom-left"
  />
);

const LEFT_LEG = (
  <div
    key="left-leg"
    className="w-[60px] h-[5px] bg-slate-100 absolute top-[155px] right-0 transform rotate-[-60deg] origin-bottom-right"
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

interface HangmanSketchProps {
  numberOfMisses: number;
}

function HangmanSketch({ numberOfMisses }: HangmanSketchProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfMisses)}
      <div className="h-[50px] w-[5px] bg-slate-100 absolute top-0 right-0" />
      <div className="h-[5px] w-[150px] bg-slate-100 ml-[50px]" />
      <div className="h-[200px] w-[5px] bg-slate-100 ml-[50px]" />
      <div className="h-[5px] w-[100px] bg-slate-100" />
    </div>
  );
}

export default HangmanSketch;