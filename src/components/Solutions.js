import React from "react";
import Solution from "./Solution"
import { SOLUTIONTEXT, SOLUTIONS } from "../lib/constants"

function Solutions() {
  const solutionCards = SOLUTIONS.map((solution) => {
    return (<Solution name={solution.name} desc={solution.desc} />);
  });

  return (
    <section className="pt-32 pb-32 bg-gray-200 -mt-24">
      <div className="container mx-auto px-4" id="solutions">
        <div className="flex items-center flex-wrap md:flex-nowrap">
          <div className="flex flex-wrap md:w-8/12 justify-center order-1">
            {solutionCards}
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto order-2">
            <div className="mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
              <img
                alt="people working"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{
                    height: "95px",
                    top: "-94px"
                  }}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-pink-600 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Solutions
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  {SOLUTIONTEXT}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions;