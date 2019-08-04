import String from "./String.js";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.js";
import InputMessageContent from "./InputMessageContent.js";
import Bot from "./Bot.js";

export default class InlineQueryResultCachedVoice extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            id,
            voice_file_id,
            title,
            caption,
            parse_mode,
            reply_markup,
            input_message_content,
        } = _value;
        this.type = String(type);
        this.id = String(id);
        this.voice_file_id = String(voice_file_id);
        this.title = String(title);
        if (caption != null) {
            this.caption = String(caption);
        }
        if (parse_mode != null) {
            this.parse_mode = String(parse_mode);
        }
        if (reply_markup != null) {
            this.reply_markup = new InlineKeyboardMarkup(reply_markup, _token);
        }
        if (input_message_content != null) {
            this.input_message_content = InputMessageContent(input_message_content, _token);
        }
    }
}
