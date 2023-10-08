import { Hotkey } from "@/lib/classes/hotkey-registry";
import { Space_Mono as SpaceMono } from "next/font/google";
import { keyNameForCurrentPlatform, KEY_NAME_TO_LABEL } from "@/lib/keyboard-utils";

const font = SpaceMono({ subsets: ['latin'], weight: '400' });

const HotkeyHint = ({ controlKeys, actionKey }: Hotkey) => {
  const controlKeysForPlatform = controlKeys.map((keyName) => keyNameForCurrentPlatform(keyName))
  const controlKeyLabels = controlKeysForPlatform.map((keyName) => KEY_NAME_TO_LABEL[keyName])
  return (
    <span className={`${font.className}`}>
      { controlKeyLabels.join(' + ') } + { actionKey }
    </span>
  )
}

export default HotkeyHint;