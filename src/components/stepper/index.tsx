import React from "react"

interface StepperProps{
  children: any
}

const Stepper: React.FC<StepperProps> = ( props ) => {
  return(
    <div className="fixed md:block hidden bottom-0 right-64">
      <div>
        {props.children.map((child: any) => (
          <div>
            {child}
            <div className="flex justify-around">
              <div className="w-1 h-16 opacity-[74%] bg-[#939393]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stepper