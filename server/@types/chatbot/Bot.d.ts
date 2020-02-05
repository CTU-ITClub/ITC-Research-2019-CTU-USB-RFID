/** Chatbot */
declare const Bot: {
    /**
     * Talk to client
     * @param {string} id ID client
     * @param {string} command Command name
     */
    talk: (id: string, command: string) => void;
};
export = Bot;
