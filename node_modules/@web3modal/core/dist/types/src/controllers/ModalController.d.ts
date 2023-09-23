import type { RouterControllerState } from './RouterController.js';
export interface ModalControllerState {
    open: boolean;
}
export interface ModalControllerArguments {
    open: {
        view?: RouterControllerState['view'];
    };
}
export declare const ModalController: {
    state: ModalControllerState;
    subscribeKey<K extends "open">(key: K, callback: (value: ModalControllerState[K]) => void): () => void;
    open(options?: ModalControllerArguments['open']): Promise<void>;
    close(): void;
};
