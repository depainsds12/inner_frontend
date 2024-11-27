import React from "react";
import Center from "./Center";
import Lines from "./Lines";
import Trapezoids from "./Trapezoids";
import BigTrapezoid from "./BigTrapezoid";
import TrapezoidLines from "./TrapezoidLines";
const Octagon = ({ radius, gap, level, className = "" }) => {
  const octagonDiameter = 2 * (radius + 3 * gap);

  return (
    <div className={"relative z-10 " + className}>
      <div className="relative">
        <div className="relative flex h-full w-full origin-center items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="relative h-0 w-0">
                <BigTrapezoid radius={radius} />
                <Center radius={radius} />

                {level.map((singleLevel) => {
                  const levelGap = singleLevel < 3 ? gap : 20;
                  const levelRadius = singleLevel < 3 ? radius : radius + 60;

                  return (
                    <React.Fragment key={singleLevel}>
                      <div className="relative" style={{ zIndex: 400 }}>
                        <Lines
                          radius={levelRadius}
                          gap={levelGap}
                          level={singleLevel}
                        />
                      </div>

                      <div className="relative" style={{ zIndex: 300 }}>
                        <TrapezoidLines
                          gap={levelGap}
                          radius={levelRadius}
                          level={singleLevel}
                        />
                        <Trapezoids
                          gap={levelGap}
                          radius={levelRadius}
                          level={singleLevel}
                        />
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Octagon;
