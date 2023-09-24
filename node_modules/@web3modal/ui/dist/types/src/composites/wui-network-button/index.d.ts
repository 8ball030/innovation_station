import { LitElement } from 'lit';
import '../../components/wui-image/index.js';
import '../../components/wui-text/index.js';
import '../wui-icon-box/index.js';
export declare class WuiNetworkButton extends LitElement {
    static styles: import("lit").CSSResult[];
    imageSrc?: string;
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private visualTemplate;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-network-button': WuiNetworkButton;
    }
}
