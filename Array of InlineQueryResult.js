import ArrayOf from "./ArrayOf.js";
import createValidatorForInlineQueryResult from "./createValidatorForInlineQueryResult.js";

export default ArrayOf(createValidatorForInlineQueryResult);
