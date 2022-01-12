import { createContext } from 'react';
import { colors, metrics } from "@resources/styles";

export const defaultValue = {
    colors,
    metrics
}
export const Context = createContext<ContextType>(defaultValue);

export type ContextType = {
    colors: Record<string, string>;
    metrics: Record<string, number>;
}