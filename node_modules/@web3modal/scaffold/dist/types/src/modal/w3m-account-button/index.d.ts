import type { WuiAccountButton } from '@web3modal/ui';
import { LitElement } from 'lit';
export declare class W3mAccountButton extends LitElement {
    private unsubscribe;
    private readonly networkImages;
    disabled?: WuiAccountButton['disabled'];
    balance?: 'show' | 'hide';
    private address;
    private balanceVal;
    private balanceSymbol;
    private profileName;
    private profileImage;
    private network;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-account-button': W3mAccountButton;
    }
}
