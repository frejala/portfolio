"use client";

type WelcomeAnimationProps = {
  setAnimDone: (value: boolean) => void;
};

export function WelcomeAnimation({ setAnimDone }: WelcomeAnimationProps) {
  return (
    <div className="h-screen w-screen">
      <div className="container mx-auto flex justify-center items-center w-full h-full">
        <svg width="100%" height="100%">
          <text
            className="animate-draw text-6xl md:text-8xl font-bold font-poppins"
            x="50%"
            y="50%"
            textAnchor="middle"
            onAnimationEnd={() => setAnimDone(true)}
          >
            Welcome
          </text>
        </svg>
      </div>
    </div>
  );
}
