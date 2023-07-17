import classNames from 'classnames';
import { Command } from "../content";

interface Props extends Command {
  active?: boolean;
}

const CommandItem = ({ type, label, id, active }: Props) => {
  return (
    <div className={
      classNames(
        'flex justify-between p md:py-2 md:px-4 border-l-4 mb-1 hover:bg-white-200 dark:hover:bg-soft-black-300 rounded-r-sm cursor-pointer',
        { 'border-green-500 dark:border-green-100': type === 'action' },
        { 'border-gold-500 dark:border-gold-100': type === 'file' },
        { 'bg-white-200 dark:bg-soft-black-300': active }
      )
    }>
      <div>{label}</div>
      <div>Test</div>
    </div>
  )

};

export default CommandItem;