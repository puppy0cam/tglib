import String from "./String";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/** Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use *input_message_content* to send a message with the specified content instead of the animation. */
export default class InlineQueryResultCachedMpeg4Gif implements IInlineQueryResultCachedMpeg4Gif {
    constructor(data: IInlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedMpeg4Gif, token?: string);
    public type: String;
    public id: String;
    public mpeg4_file_id: String;
    public title?: String;
    public caption?: String;
    public parse_mode?: String;
    public reply_markup?: InlineKeyboardMarkup;
    public input_message_content?: InputMessageContent;
}

export interface IInlineQueryResultCachedMpeg4Gif {
    /** Type of the result, must be *mpeg4_gif* */
    type: String;
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** A valid file identifier for the MP4 file */
    mpeg4_file_id: String;
    /** Title for the result */
    title?: String;
    /** Caption of the MPEG-4 file to be sent, 0-1024 characters */
    caption?: String;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: String;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Content of the message to be sent instead of the video animation */
    input_message_content?: InputMessageContent;
}
