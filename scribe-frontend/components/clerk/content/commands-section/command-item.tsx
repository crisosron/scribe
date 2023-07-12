import classNames from 'classnames';
import { Command } from "../content";

const CommandItem = ({ type, label, id }: Command) => {
  return (
    <div className={
      classNames(
        'flex justify-between p md:py-2 md:px-4 border-l-4 mb-1 hover:bg-white-200 dark:hover:bg-soft-black-300 rounded-r-sm cursor-pointer',
        { 'border-green-500 dark:border-green-100': type === 'action' },
        { 'border-gold-500 dark:border-gold-100': type === 'file' }
      )
    }>
      <div>{label}</div>
      <div>Test</div>
    </div>
  )

};

export default CommandItem;