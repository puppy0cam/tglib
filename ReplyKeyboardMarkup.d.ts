import Array_of_Array_of_KeyboardButton from "./Array of Array of KeyboardButton";
import Boolean from "./Boolean";

/** This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples). */
export default class ReplyKeyboardMarkup implements IReplyKeyboardMarkup {
    constructor(data: IReplyKeyboardMarkup | ReplyKeyboardMarkup, token?: string);
    public keyboard: Array_of_Array_of_KeyboardButton;
    public resize_keyboard?: Boolean;
    public one_time_keyboard?: Boolean;
    public selective?: Boolean;
}

export interface IReplyKeyboardMarkup {
    /** Array of button rows, each represented by an Array of [KeyboardButton](https://core.telegram.org/bots/api#keyboardbutton) objects */
    keyboard: Array_of_Array_of_KeyboardButton;
    /** Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to *false*, in which case the custom keyboard is always of the same height as the app's standard keyboard. */
    resize_keyboard?: Boolean;
    /** Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to *false*. */
    one_time_keyboard?: Boolean;
    /**
     * Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are *@*mentioned in the text of the [Message](https://core.telegram.org/bots/api#message) object; 2) if the bot's message is a reply (has *reply_to_message_id*), sender of the original message.
     *
     * *Example:* A user requests to change the bot‘s language, bot replies to the request with a keyboard to select the new language. Other users in the group don’t see the keyboard.
     */
    selective?: Boolean;
}
