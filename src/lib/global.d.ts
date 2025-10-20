/* eslint-disable @typescript-eslint/no-explicit-any */

interface Window {
    emailjs: {
        send: (
            serviceId: string,
            templateId: string,
            templateParams: Record<string, any>,
            publicKey: string
        ) => Promise<{ status: number; text: string }>;
    };
}
