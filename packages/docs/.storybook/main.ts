/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StorybookConfig } from '@storybook/react-vite';

import { join, dirname } from "path"

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  "stories": [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  "addons": [],
  "framework": {
    "name": getAbsolutePath('@storybook/react-vite'),
    "options": {}
  }
};
export default config;