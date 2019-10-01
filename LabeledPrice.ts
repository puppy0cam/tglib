import { Bot } from "./_internals.js";

/** This object represents a portion of the price for goods or services. */
export class LabeledPrice extends Bot implements ILabeledPrice {
    constructor(data: ILabeledPrice, token?: string | Bot) {
        "use strict";
        super(data, token);
    }
    public label!: string;
    public amount!: number;
}

/** This object represents a portion of the price for goods or services. */
export interface ILabeledPrice {
    /** Portion label */
    label: string;
    /** Price of the product in the *smallest* units of the [currency](https://core.telegram.org/bots/payments#supported-currencies) (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    amount: number;
}
