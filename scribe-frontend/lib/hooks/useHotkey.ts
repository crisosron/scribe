import { useState, useEffect, useCallback, useRef, useLayoutEffect, Key } from 'react';
import { VALID_ACTION_KEYS, VALID_CONTROL_KEYS } from '../keyboard-utils';

type EVENT_TYPE = 'down' | 'up'

type Parameters = {
  targetControlKeys?: string[],
  targetActionKey?: string
  callback: (e: KeyboardEvent | undefined) => void
}

const useHotkey = ({ targetControlKeys, targetActionKey, callback }: Parameters) => {
  const [heldControlKeys, setHeldControlKeys] = useState<string[]>([]);
  const handleActionKeyRef = useRef<(e: KeyboardEvent | undefined) => void>();

  const handleControlKeyEvent = (
    e: KeyboardEvent,
    eventType: "down" | "up"
  ) => {
    if (!VALID_CONTROL_KEYS.includes(e.key))
      throw new Error(`Key '${e.key} is not a control key'`);

    if (eventType === "down") {
      setHeldControlKeys((currentlyHeldKeys) => [...currentlyHeldKeys, e.key]);
    } else if (eventType === "up") {
      setHeldControlKeys((currentlyHeldKeys) => currentlyHeldKeys.filter((key) => key !== e.key));
    }
  };

  const handleKeyEvent = (e: KeyboardEvent, eventType: EVENT_TYPE) => {
    console.log('Handle key event heldKeys: ', heldControlKeys);
    if(VALID_CONTROL_KEYS.includes(e.key) && targetControlKeys && targetControlKeys.includes(e.key)) handleControlKeyEvent(e, eventType)
    else if(VALID_ACTION_KEYS.includes(e.key) &&
      targetActionKey === e.key &&
      handleActionKeyRef.current) {
      e.preventDefault();
      handleActionKeyRef.current(e);
    }
    
  }


  // const handleKeyEvent = useCallback((e: KeyboardEvent, eventType: EVENT_TYPE) => {
  //   console.log('Handle key event heldKeys: ', heldControlKeys);
  //   if(VALID_CONTROL_KEYS.includes(e.key) && targetControlKeys && targetControlKeys.includes(e.key)) handleControlKeyEvent(e, eventType)
  //   else if(VALID_ACTION_KEYS.includes(e.key) &&
  //     targetActionKey === e.key &&
  //     handleActionKeyRef.current) {
  //     e.preventDefault();
  //     handleActionKeyRef.current(e);
  //   }
    
  // }, [heldControlKeys])

  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect heldControlKeys changed');
  //   handleKeyEventRef.current = handleKeyEvent;

  // }, [heldControlKeys])

  // Employ the callback ref pattern so the latest version of the callback is always called
  //
  // Without this, the only way to get the callback to use the latest state values would be to add
  // the handleKeyEvent as a dep of the useEffect that sets up the event listeners on the window
  // object, which in turn will allow the callback to be called with up-to-date states. But by doing
  // this, there is a risk of adding multiple duplicate event listener to the window which will lead
  // to unexpected behavior.
  useLayoutEffect(() => {
    handleActionKeyRef.current = callback;
    handleKeyEventRef.current = handleKeyEvent;
  })

  const handleKeyEventRef = useRef<any>(handleKeyEvent);

  useEffect(() => {
    console.log('Held control keys changed to: ', heldControlKeys);
  }, [heldControlKeys])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => handleKeyEvent(e, "down");
    const handleKeyUp = (e: KeyboardEvent) => handleKeyEvent(e, "up");

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };

  }, [])
}

export default useHotkey;