declare module 'progressbar.js' {
  export default class ProgressBar {
    constructor(container: HTMLElement | string, options?: ProgressBarOptions);
    animate(value: number, options?: { duration?: number }): void;
    set(value: number): void;
    destroy(): void;

    static Line: new (container: HTMLElement | string | null, options?: ProgressBarOptions) => ProgressBar;
    static Circle: new (container: HTMLElement | string, options?: ProgressBarOptions) => ProgressBar;
    static SemiCircle: new (container: HTMLElement | string, options?: ProgressBarOptions) => ProgressBar;
  }

  export interface ProgressBarOptions {
    strokeWidth?: number;
    easing?: string;
    duration?: number;
    color?: string;
    trailColor?: string;
    trailWidth?: number;
    svgStyle?: { [key: string]: string | number };
    text?: { value?: string; className?: string };
    step?: (state: unknown, bar: ProgressBar) => void;
  }
}