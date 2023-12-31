import { useMemo, useState } from "react";
import useHotkey from "@/lib/hooks/useHotkey";
import Search from "./search/search";
import SegmentMenu, { Segment } from "./segment-menu/segment-menu";
import HintBar from "./hint-bar/hint-bar";
import Commands from "./commands-section/commands-section";
import { useGlobalContext } from "@/lib/contexts/global-context";
import Command from "@/lib/classes/command";
import { HOTKEY_IDS } from "@/lib/classes/hotkey-registry";
import { useSidebarContext } from "@/lib/contexts/sidebar-context";

const Content = () => {
  const segments: Segment[] = [
    { label: 'General', selectedStyles: 'bg-white-200 dark:bg-white-700' }, 
    { label: 'Actions', selectedStyles: 'bg-green-100 bg-opacity-25 text-green-500 dark:text-green-100'},
    { label: 'Files', selectedStyles: 'bg-gold-100 bg-opacity-25 text-gold-500 dark:text-gold-100' }
  ]

  const { commandRegistry, hotkeyRegistry, toggleClerk } = useGlobalContext(); 
  const { toggleSidebar } = useSidebarContext();

  // TODO: This needs to be filtered based on the current segment
  const commands = commandRegistry.allCommands;

  useMemo(() => {
    const toggleSidebarCommand = commandRegistry.findCommand({ id: 'toggle-sidebar' });
    if(toggleSidebarCommand) {
      toggleSidebarCommand.additionalAction = () => toggleSidebar();
    }
  }, [commandRegistry, toggleSidebar])

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
    hotkey: hotkeyRegistry.getHotkey(HOTKEY_IDS.TAB),
    triggerEvent: 'down',
    callback: () => {
      const currentSegmentIndex = segments.findIndex(segment => segment.label === selectedSegment.label);
      if(currentSegmentIndex === segments.length - 1) setSelectedSegment(segments[0]); // Wrap back to the first segment
      else setSelectedSegment(segments[currentSegmentIndex + 1]);
    }
  })

  useHotkey({
    hotkey: hotkeyRegistry.getHotkey(HOTKEY_IDS.UP),
    triggerEvent: 'down',
    callback: () => navigateCommand('up')
  })

  useHotkey({
    hotkey: hotkeyRegistry.getHotkey(HOTKEY_IDS.DOWN),
    triggerEvent: 'down',
    callback: () => navigateCommand('down')
  })

  useHotkey({
    hotkey: hotkeyRegistry.getHotkey(HOTKEY_IDS.ENTER),
    triggerEvent: 'down',
    callback: () => {
      selectedCommand.executeCommand()
      toggleClerk();
    }
  });

  return (
    <div 
      className="min-w-[80%] md:min-w-[65%] lg:min-w-[30%] min-h-[200px] bg-white-100 dark:bg-soft-black-100 shadow-2xl rounded-lg p-4"
      onClick={(e) => {
        // Stop propagation of click event to parent Overlay container to prevent
        // the onClick on the Overlay component from being triggered
        e.stopPropagation();
      }}
    >
      <Search />
      <HintBar />
      <SegmentMenu selectedSegment={selectedSegment} setSelectedSegment={setSelectedSegment} segments={segments} />
      <Commands commands={commands} selectedCommand={selectedCommand} setSelectedCommand={setSelectedCommand} />
    </div>
  );
};

export default Content;
