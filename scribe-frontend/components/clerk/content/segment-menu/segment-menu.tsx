import { useState, SetStateAction, Dispatch } from "react";
import classNames from "classnames";

export interface Segment {
  label: string;
  styles?: string,
  selectedStyles?: string,
}

type Props = {
  selectedSegment?: Segment,
  setSelectedSegment: Dispatch<SetStateAction<Segment>>,
  segments: Segment[]
}

const SegmentMenu = ({ selectedSegment, setSelectedSegment, segments }: Props) => {
  const handleSegmentSelected = (segment: Segment) => {
    setSelectedSegment(segment);
  }

  return (
    <div className="flex justify-center items-center rounded-xl">
      {
        segments.map((segment, index) => {
          return (
            <div 
              className={classNames(`min-w-[80px] p-2 text-sm flex justify-center items-center rounded-md cursor-pointer transition-all ${segment.styles}`, {
                [`${segment.selectedStyles}`]: selectedSegment && selectedSegment.label === segment.label
              })}
              onClick={() => handleSegmentSelected(segment)}
              key={`toast-item-${segment.label}`}>{segment.label}
            </div>
          )
        })
      }
    </div>
  )
}

export default SegmentMenu;