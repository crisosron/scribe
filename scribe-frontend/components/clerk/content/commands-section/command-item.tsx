import classNames from 'classnames';
import { useMatchesBreakpoint } from '@/lib/hooks/useMatchesBreakpoint';
import Command from '@/lib/classes/command';
import HotkeyHint from './hotkey-hint';

interface Props extends Command {
  active?: boolean;
  onHover: () => void
}

const CommandItem = ({ type, label, id, hotkey, active, onHover }: Props) => {
  const isMobile = useMatchesBreakpoint('sm');
  return (
    <div 
      className={
        classNames(
          'flex justify-between p-2 md:py-2 md:px-4 border-l-4 mb-1 rounded-r-sm cursor-pointer',
          { 'border-green-500 dark:border-green-100': type === 'action' },
          { 'border-gold-500 dark:border-gold-100': type === 'file' },
          { 'bg-white-200 dark:bg-soft-black-300': active } // Note this is true when the item is hovered as well, as per the onHover callback
        )
      }
      onMouseEnter={onHover}
    >
      <div>{label}</div>
      { !isMobile && hotkey && <HotkeyHint {...hotkey} /> }
    </div>
  )

};

export default CommandItem;