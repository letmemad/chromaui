import React from "react";
import { ChromaConfig } from "../types/config";
interface Context extends Omit<ChromaConfig, "colorMode"> {
    scheme: "light" | "dark";
}
declare const ChromaContext: React.Context<Context>;
export { ChromaContext };
