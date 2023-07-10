import { useState } from "react";
import useHotkey from "@/lib/hooks/useHotkey";
import Search from "./search/search";
import SegmentMenu, { Segment } from "./segment-menu/segment-menu";
import HintBar from "./hint-bar/hint-bar";

const Content = () => {
  const segments: Segment[] = [
    { label: 'General', selectedStyles: 'bg-white-200 dark:bg-white-700' }, 
    { label: 'Actions', selectedStyles: 'bg-green-100 bg-opacity-25 text-green-500 dark:text-green-100'},
    { label: 'Files', selectedStyles: 'bg-gold-100 bg-opacity-25 text-gold-500 dark:text-gold-100' }
  ]

  const [selectedSegment, setSelectedSegment] = useState<Segment>(segments[0]);

  useHotkey({
    targetActionKey: 'Tab',
    triggerEvent: 'down',
    callback: () => {
      const currentSegmentIndex = segments.findIndex(segment => segment.label === selectedSegment.label);
      if(currentSegmentIndex === segments.length - 1) setSelectedSegment(segments[0]);
      else setSelectedSegment(segments[currentSegmentIndex + 1]);
    }
  })

  return (
    <div className="min-w-[80%] md:min-w-[65%] lg:min-w-[40%] min-h-[200px] bg-white-100 dark:bg-soft-black-100 shadow-2xl rounded-lg p-4">
      <Search />
      <HintBar />
      <SegmentMenu selectedSegment={selectedSegment} setSelectedSegment={setSelectedSegment} segments={segments} />
    </div>
  );
};

export default Content;
