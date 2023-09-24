import { LitElement } from 'lit';
import '../../layout/wui-flex/index.js';
import '../wui-input-numeric/index.js';
export declare class WuiOtp extends LitElement {
    static styles: import("lit").CSSResult[];
    length: number;
    private numerics;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private handleInput;
    private handleKeyDown;
    private handlePaste;
    private focusInputField;
    private getInputElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-otp': WuiOtp;
    }
}
