import React from "react";

function Intro() {
  return (
    <>
      <div className="mt-6 mb-6 flex justify-center content-center">
        <div className="h-80 w-96 isolate aspect-video rounded-2xl shadow-lg bg-slate-200 ring-1 ring/black/5 backdrop-blur-3xl">
            <div className="flex justify-center items-center mt-6 text-6xl ">
                FaceTrace
            </div>

            <div className=" text-center pt-12 m-6 flex items-center justify-center  ">
                <p>facial sketch construction &  face recorginition web app</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
