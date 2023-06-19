type ContextMenuAction = {
  label: string;
  name: string;
  fn: () => void;
};

type Props = {
  actions: ContextMenuAction[];

  // This is an auxiliary function that allows the parent component to reset some of its states
  // (e.g. a hover state etc) if an action is clicked
  resetParentStates?: () => void;
};

const ContextMenu = ({ actions, resetParentStates }: Props) => {
  const renderActions = () => {
    return (
      <>
        {actions.map((action, index) => {
          return (
            <div
              className="flex p-2 hover:bg-white-100 hover:dark:bg-white-600 transition cursor-pointer rounded-sm"
              key={`action-${index}`}
              onClick={() => {
                if (resetParentStates) resetParentStates();
                action.fn();
              }}
            >
              {action.label}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className=" p-4 absolute bg-white-200 dark:bg-soft-black-100 rounded-md shadow-xl cursor-default">
      {renderActions()}
    </div>
  );
};

export default ContextMenu;
