import React from "react"

interface StepperProps{
  children: any
}

const Stepper: React.FC<StepperProps> = ( props ) => {
  return(
    <div className="fixed block-none bottom-0 right-32">
      <div>
        {props.children.map((child: any) => (
          <div>
            {child}
            <div className="flex justify-around">
              <div className="w-1 h-16 bg-[gray]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stepper