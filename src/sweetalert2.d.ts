declare module 'sweetalert2' {
    export interface SwalOptions {
        title?: string;
        text?: string;
        icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
        // Autres options...
    }

    export function fire(options: SwalOptions): Promise<any>;
}
