export const HOTKEY_IDS = {
  TOGGLE_CLERK: 'toggle-clerk',
  OPEN_FILE: 'open-file',
  SAVE_FILE: 'save-ile',
  ESC: 'escape',
  TAB: 'tab',
  UP: 'up',
  DOWN: 'down',
  ENTER: 'enter'
}

// See lib/keyboard-utils for a list of valid control and action keys
export type Hotkey = {
  id: string,
  name: string,
  controlKeys?: string[],
  actionKey: string
}

export default class HotkeyRegistry {
  private static singletonInstance: HotkeyRegistry;
  private _allHotkeys: Hotkey[];

  private constructor() {
    this._allHotkeys = [
      { id: HOTKEY_IDS.TOGGLE_CLERK, name: 'Toggle Clerk', controlKeys: ['Control'], actionKey:'p' },
      { id: HOTKEY_IDS.OPEN_FILE, name: 'Open File', controlKeys: ['Control'], actionKey:'o' },
      { id: HOTKEY_IDS.SAVE_FILE, name: 'Save File', controlKeys: ['Control'], actionKey:'s' },
      { id: HOTKEY_IDS.ESC, name: 'Escape', actionKey:'Escape' },
      { id: HOTKEY_IDS.TAB, name: 'Tab', actionKey: 'Tab' },
      { id: HOTKEY_IDS.UP, name: 'Up', actionKey: 'ArrowUp' },
      { id: HOTKEY_IDS.DOWN, name: 'Down', actionKey: 'ArrowDown' },
      { id: HOTKEY_IDS.ENTER, name: 'Enter', actionKey: 'Enter' },
    ]
  }

  public static get instance() {
    if(!HotkeyRegistry.singletonInstance) HotkeyRegistry.singletonInstance = new HotkeyRegistry();
    return HotkeyRegistry.singletonInstance
  }

  public getHotkey(hotkeyId: string): Hotkey {
    const hotkey = this._allHotkeys.find((hotkey) => hotkey.id === hotkeyId);
    if(!hotkey) throw new Error(`Hotkey with the id '${hotkeyId}' cannot be found`);
    return hotkey;
  }
  
}