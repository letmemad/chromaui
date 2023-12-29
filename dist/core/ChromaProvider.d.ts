import React from "react";
import { ChromaConfig } from "../types/config";
interface Properties {
    config: ChromaConfig;
    children: React.ReactNode;
}
declare const ChromaProvider: React.FC<Properties>;
export { ChromaProvider };
