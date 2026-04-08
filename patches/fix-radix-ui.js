/**
 * This script patches the @radix-ui/react-use-effect-event module
 * to use our custom implementation instead of the React one.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Our replacement code that uses a custom implementation
const replacementCode = `
// Patched version that uses a custom implementation of useEffectEvent
import * as React from 'react';

// Custom implementation of useEffectEvent
function useEffectEvent(callback) {
  const callbackRef = React.useRef(callback);

  // Update the callback ref when the callback changes
  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Return a stable function that calls the latest callback
  return React.useCallback((...args) => {
    return callbackRef.current(...args);
  }, []);
}

export { useEffectEvent };
`;

// Find the module dynamically instead of using a hardcoded path
function findModulePath() {
  const nodeModules = path.join(__dirname, '..', 'node_modules');

  // Try direct node_modules path first (npm/yarn)
  const directPath = path.join(
    nodeModules,
    '@radix-ui/react-use-effect-event/dist/index.mjs'
  );
  if (fs.existsSync(directPath)) return directPath;

  // Search in pnpm .pnpm directory
  const pnpmDir = path.join(nodeModules, '.pnpm');
  if (fs.existsSync(pnpmDir)) {
    try {
      const entries = fs.readdirSync(pnpmDir);
      for (const entry of entries) {
        if (entry.startsWith('@radix-ui+react-use-effect-event@')) {
          const candidate = path.join(
            pnpmDir, entry,
            'node_modules/@radix-ui/react-use-effect-event/dist/index.mjs'
          );
          if (fs.existsSync(candidate)) return candidate;
        }
      }
    } catch (e) {
      // ignore read errors
    }
  }

  return null;
}

const modulePath = findModulePath();

if (modulePath) {
  try {
    fs.writeFileSync(modulePath, replacementCode);
    console.log('Successfully patched @radix-ui/react-use-effect-event module at:', modulePath);
  } catch (error) {
    console.error('Failed to write patch:', error.message);
  }
} else {
  console.log('Skipping radix-ui patch: module not found (may not be needed with current versions)');
}
