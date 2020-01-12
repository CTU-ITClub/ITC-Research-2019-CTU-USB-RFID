/** Entry chatbot Interface */
interface IEntry {
    messaging: {
        sender: {
            id: string;
        };
        message: {
            text: string;
        };
    }[];
}
export = IEntry;
