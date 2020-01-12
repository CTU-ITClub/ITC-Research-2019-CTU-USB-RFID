/** Messenger chatbot */
declare const Messenger: {
    /**
     * Send message to client
     * @param {string} id ID client
     * @param {string} text Content of message
     */
    sendText: (id: string, text: string) => void;
};
export = Messenger;
