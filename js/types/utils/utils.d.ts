export declare function format(first: string, middle: string, last: string): string;
export declare function htmlDecode(input: string): string;
export declare function closestElement(selector: any, base?: any): any;
export declare function colorSVGNodes(children: NodeListOf<ChildNode>, color?: string): void;
/** always use a globally unique ID wrt the page for the label
 * expecially needed on IE where shadow DOM doesnt work
 */
export declare const getUniqueContextId: (contextString: string) => any;
