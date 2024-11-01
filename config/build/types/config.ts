export type BuildModeType = "development" | "production";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildModeType;
  port: number;
}

export interface BuildOptions {
  mode: BuildModeType;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
