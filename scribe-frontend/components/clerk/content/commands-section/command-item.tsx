import classNames from 'classnames';
import { Command } from "../content";

interface Props extends Command {
  active?: boolean;
  onHover: () => void
}

const CommandItem = ({ type, label, id, active, onHover }: Props) => {
  return (
    <div 
      className={
        classNames(
          'flex justify-between p md:py-2 md:px-4 border-l-4 mb-1 rounded-r-sm cursor-pointer',
          { 'border-green-500 dark:border-green-100': type === 'action' },
          { 'border-gold-500 dark:border-gold-100': type === 'file' },
          { 'bg-white-200 dark:bg-soft-black-300': active } // Note this is true when the item is hovered as well, as per the onHover callback
        )
      }
      onMouseEnter={onHover}
    >
      <div>{label}</div>
      <div>Test</div>
    </div>
  )

};

export default CommandItem;