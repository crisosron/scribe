import { Hotkey } from "@/lib/classes/command";
import { Space_Mono as SpaceMono } from "next/font/google";

const font = SpaceMono({ subsets: ['latin'], weight: '400' });

const HotkeyHint = ({ controlKeys, actionKey }: Hotkey) => {
  return (
    <span className={`${font.className}`}>
      { controlKeys.join(' + ') } + { actionKey }
    </span>
  )
}

export default HotkeyHint;