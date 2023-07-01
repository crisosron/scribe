import { useState, useEffect, useCallback } from "react";

const CONTROL_KEY_NAMES = [
  "Control",
  "Meta", // cmd for macOS
  "Shift"
];

// Full list of valid values for keys: 
// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
export type KeyCombination = {
  controlKey: string | null, // CTRL, CMD etc. 
  actionKey: string | null // Regular letters, numbers, esc, etc.
}

const useKeys = () => {
  const [heldKeys, setHeldKeys] = useState<string[]>([]);
  const [latestKeyCombination, setLatestKeyCombination] = useState<KeyCombination>({
    controlKey: null,
    actionKey: null,
  });

  const handleControlKeyEvent = (
    e: KeyboardEvent,
    eventType: "down" | "up"
  ) => {
    if (!CONTROL_KEY_NAMES.includes(e.key))
      throw new Error(`Key '${e.key} is not a control key'`);

    if (eventType === "down") {
      setHeldKeys([...heldKeys, e.key]);
      setLatestKeyCombination((current) => {
        const newCombo: KeyCombination = {
          controlKey: e.key,
          actionKey: current?.actionKey,
        }

        return newCombo;
      })
    } else if (eventType === "up") {
      setHeldKeys(heldKeys.filter((key) => key !== e.key));
      setLatestKeyCombination({ controlKey: null, actionKey: null });
    }
  };

  const handleRegularKeyEvent = (e: KeyboardEvent, eventType: 'down' | 'up') => {
    if (eventType === 'down') {
      setLatestKeyCombination((current) => {
        const newCombo: KeyCombination = {
          controlKey: current?.controlKey,
          actionKey: e.key,
        }

        return newCombo;
      })
    } else {
      setLatestKeyCombination((current) => {
        const newCombo: KeyCombination = {
          controlKey: current?.controlKey,
          actionKey: null,
        }

        return newCombo;
      })
    }
  }

  const handleKeyEvent = useCallback((e: KeyboardEvent, eventType: "down" | "up") => {
    if (CONTROL_KEY_NAMES.includes(e.key)) {
      handleControlKeyEvent(e, eventType);
    } else if(latestKeyCombination.controlKey){
      console.log('Need to handle an action key');
      e.preventDefault();
      handleRegularKeyEvent(e, eventType)
    }
  }, [latestKeyCombination.controlKey]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => handleKeyEvent(e, "down");
    const handleKeyUp = (e: KeyboardEvent) => handleKeyEvent(e, "up");

    window.addEventListener("keydown", (event: KeyboardEvent) => {
      // event.preventDefault();
      handleKeyEvent(event, "down")
    });
    window.addEventListener("keyup", (event: KeyboardEvent) => {
      // event.preventDefault();
      handleKeyEvent(event, "up")
    });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyEvent]);

  return {
    heldKeys,
    latestKeyCombination
  }
}

export default useKeys;