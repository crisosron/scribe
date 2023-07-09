import { useState, useEffect, useCallback, useRef, useLayoutEffect, Key } from 'react';
import { VALID_ACTION_KEYS, VALID_CONTROL_KEYS } from '../keyboard-utils';

type EVENT_TYPE = 'down' | 'up'

type Parameters = {
  targetControlKeys?: string[],
  targetActionKey?: string,
  triggerEvent?: 'down' | 'up',
  callback: (e: KeyboardEvent | undefined) => void
}

const useHotkey = ({ targetControlKeys, targetActionKey, callback, triggerEvent }: Parameters) => {
  const [heldControlKeys, setHeldControlKeys] = useState<string[]>([]);
  const handleKeyEventRef = useRef<(e: KeyboardEvent, eventType: EVENT_TYPE) => void>(
    () => {} 
  );

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

  const handleKeyEvent = useCallback((e: KeyboardEvent, eventType: EVENT_TYPE) => {
    if(VALID_CONTROL_KEYS.includes(e.key) && targetControlKeys && targetControlKeys.includes(e.key)) handleControlKeyEvent(e, eventType)
    else if(VALID_ACTION_KEYS.includes(e.key) &&
      targetActionKey === e.key &&
      heldControlKeys.some((key) => targetControlKeys?.includes(key))) {
      e.preventDefault();
      callback(e);
    } else if(
      !targetControlKeys &&
      VALID_ACTION_KEYS.includes(e.key) &&
      targetActionKey === e.key
    ) {
      e.preventDefault();
      callback(e);
    }
  }, [heldControlKeys, targetActionKey, targetControlKeys, callback])

  // Employ the callback ref pattern so the latest version of the callback is always called
  //
  // Without this, the only way to get the handler to use the latest state values would be to add
  // the handleKeyEvent as a dep of the useEffect that sets up the event listeners on the window
  // object, which in turn will allow the callback to be called with up-to-date states. But by doing
  // this, there is a risk of adding multiple duplicate event listeners to the window which will lead
  // to unexpected behavior.
  useLayoutEffect(() => {
    handleKeyEventRef.current = handleKeyEvent;
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => handleKeyEventRef.current(e, "down");
    const handleKeyUp = (e: KeyboardEvent) => handleKeyEventRef.current(e, "up");

    if(!triggerEvent) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    } else if(triggerEvent === 'down') {  
      window.addEventListener('keydown', handleKeyDown);
    } else if(triggerEvent === 'up') {
      window.addEventListener('keyup', handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };

  }, [])
}

export default useHotkey;