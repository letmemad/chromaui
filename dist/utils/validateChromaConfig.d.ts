import { ChromaConfig } from "../types/config";
export declare function validateChromaConfig(config: ChromaConfig): {
    isValid: boolean;
    error: string;
} | {
    isValid: boolean;
    error: null;
};
