export const VALID_ACTION_KEYS = [
  'p', // Clerk toggle
  'Escape',
  'Tab',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'o', // Open file
  's'
];

export const VALID_CONTROL_KEYS = [
  'Control',
  'Meta', // CMD for macOS
  'Shift'
]

// Mapping of key names to their display names
export const KEY_NAME_TO_LABEL: {
  [key: string]: string
} = {
  'Control': 'ctrl',
  'Meta': 'cmd',
  'Shift': 'shift'
}

export const macOSKeyNames: {
  [key: string]: string
} = {
  'Control': 'Meta' // 'Meta' points to CMD for macOS
}

/**
 * Get the name of a given key for the current platform (mainly affects macOS)
 * 
 * e.g. keyName = 'Control' returns 'Meta' (which points to the command key for macOS)
 * @param keyName 
 * @returns { string }
 */
export const keyNameForCurrentPlatform = (keyName: string) =>{
  if(!window) return keyName;

  // Use feature detection guard because window.navigator.platform is deprecated
  if('platform' in window.navigator) {
    const platform = window.navigator.platform;
    if(platform === 'MacIntel' && Object.hasOwn(macOSKeyNames, keyName)) return macOSKeyNames[keyName];
  }

  return keyName;
}