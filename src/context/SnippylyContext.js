import { createContext, useContext } from 'react';

/**
 * @typedef {import("@snippyly/types").Snippyly} SnippylyClient
 */

export const SnippylyContext = createContext({ client: null });

/**
 * 
 * @returns {{client: SnippylyClient}}
 */
export function useSnippylyClient() {
    return useContext(SnippylyContext);
}