/**
 * Type declarations for global development variables
 */

interface Window {
   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <F extends Function>(f: F) => F;
   __INITIAL_STATE__?: any;
}

interface ObjectConstructor {
   assign(target: any, ...sources: any[]): any;
}

interface ErrorProps {
   response: {
      data: {
         errors: string[] | Array<{ detail: string }>;
      };
      request: {
         response: {
            errors: string[] | Array<{ detail: string }>;
         };
      };
   };
}

declare module '*.json' {
   const value: any;
   export default value;
}

type TransformError = (error: ErrorProps) => string;

declare const transformError: TransformError;
declare const beta: boolean;

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.svg?inline';
declare module '*.svg?external';

// generic type manipulation helpers
type Omit<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

type GenericId = string;

type ChangeRouteFn = (path: string, state?) => void;

type GetAction<A extends { type: any }, T extends A['type']> = Extract<A, { type: T }>;
