import { useState } from "react";
import useHotkey from "@/lib/hooks/useHotkey";
import Search from "./search/search";
import SegmentMenu, { Segment } from "./segment-menu/segment-menu";
import HintBar from "./hint-bar/hint-bar";
import Commands from "./commands-section/commands-section";

export interface Command {
  type: 'action' | 'file',
  label: string,
  id: string,
}

const Content = () => {
  const segments: Segment[] = [
    { label: 'General', selectedStyles: 'bg-white-200 dark:bg-white-700' }, 
    { label: 'Actions', selectedStyles: 'bg-green-100 bg-opacity-25 text-green-500 dark:text-green-100'},
    { label: 'Files', selectedStyles: 'bg-gold-100 bg-opacity-25 text-gold-500 dark:text-gold-100' }
  ]

  // TODO: This should come from the command registry
  const commands: Command[] = [
    { type: 'action', label: 'Action Item', id: 'action-item' },
    { type: 'file', label: 'File Item', id: 'file-item' }
  ]

  const [selectedSegment, setSelectedSegment] = useState<Segment>(segments[0]);
  const [selectedCommand, setSelectedCommand] = useState<Command>(commands[0]);
  
  const navigateCommand = (direction: 'up' | 'down') => {
    const currentlySelectedCommandIndex = commands.findIndex(command => command.id === selectedCommand?.id);
    switch(direction) {
      case 'up':
        if (currentlySelectedCommandIndex === 0) setSelectedCommand(commands[commands.length - 1]);
        else setSelectedCommand(commands[currentlySelectedCommandIndex - 1]);
        break;
      default:
        if (currentlySelectedCommandIndex === commands.length - 1) setSelectedCommand(commands[0]);
        else setSelectedCommand(commands[currentlySelectedCommandIndex + 1]);
        break;
    }
  }

  useHotkey({
    targetActionKey: 'Tab',
    triggerEvent: 'down',
    callback: () => {
      const currentSegmentIndex = segments.findIndex(segment => segment.label === selectedSegment.label);
      if(currentSegmentIndex === segments.length - 1) setSelectedSegment(segments[0]);
      else setSelectedSegment(segments[currentSegmentIndex + 1]);
    }
  })

  useHotkey({
    targetActionKey: 'ArrowUp',
    triggerEvent: 'down',
    callback: () => navigateCommand('up')
  })

  useHotkey({
    targetActionKey: 'ArrowDown',
    triggerEvent: 'down',
    callback: () => navigateCommand('down')
  })

  return (
    <div className="min-w-[80%] md:min-w-[65%] lg:min-w-[40%] min-h-[200px] bg-white-100 dark:bg-soft-black-100 shadow-2xl rounded-lg p-4">
      <Search />
      <HintBar />
      <SegmentMenu selectedSegment={selectedSegment} setSelectedSegment={setSelectedSegment} segments={segments} />
      <Commands commands={commands} selectedCommand={selectedCommand} setSelectedCommand={setSelectedCommand} />
    </div>
  );
};

export default Content;
