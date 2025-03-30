declare module '@emailjs/browser' {
    const emailjs: {
        init: (userID: string) => void;
        send: (serviceID: string, templateID: string, templateParams: object, userID?: string) => Promise<any>;
        sendForm: (serviceID: string, templateID: string, form: HTMLFormElement, userID?: string) => Promise<any>;
    };
    export default emailjs;
}