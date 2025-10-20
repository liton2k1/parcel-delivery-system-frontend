import config from "@/config/index";

export const initializeEmailJS = () => {
    try {
        if (typeof window !== "undefined" && window.emailjs) {
            return true;
        }
        return false;
    } catch (error) {
        console.error("Failed to initialize EmailJS:", error);
        return false;
    }
};

export const sendEmail = async (templateParams: {
    from_name: string;
    from_email: string;
    message: string;
    source: string;
    to_name: string;
}) => {
    if (!initializeEmailJS()) {
        throw new Error("EmailJS is not available");
    }

    if (
        !config.emailJsServiceId ||
        !config.emailJsTemplateId ||
        !config.emailJsPublicKey
    ) {
        throw new Error("EmailJS configuration is incomplete");
    }

    return await window.emailjs.send(
        config.emailJsServiceId,
        config.emailJsTemplateId,
        templateParams,
        config.emailJsPublicKey
    );
};
