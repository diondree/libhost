import { EventEmitter } from '../../stencil.core';
import { RowSelectedEvent } from '@ag-grid-enterprise/all-modules';
export declare type ColumnDefinition = {
    headerName: string;
    field: string;
    filterParams: object;
};
export declare class Tree {
    /**
     * Reference to the tree view component
     */
    el: HTMLSmttTreeElement;
    /**
     * Property containing reference of element to contain agGrid
     */
    agGrid: HTMLElement;
    /**
     * The desired height of the element
     */
    treeHeight: number;
    /**
     * Height of rows
     */
    rowHeight: number;
    /**
     * The definition of the columns
     */
    columns: ColumnDefinition[];
    /**
     * The array of data to be displayed within rows
     */
    rows: object[];
    /**
     * Whether tree should be expanded by default
     */
    expanded: boolean;
    /**
     * Type of selection to be used in tree
     */
    rowSelection: 'single' | 'multiple';
    /**
     * Name of field containing children
     */
    childrenField: string;
    /**
     * Name of group field
     */
    groupField: string;
    /**
     * Whether or not to paginate data
     */
    paginate: boolean;
    /**
     * Event triggered when a row is selected or deselected
     */
    rowSelected: EventEmitter;
    /**
     * Function called when an ag-Grid rowSelectedEvent is triggered
     */
    rowSelectedHandler: (event: RowSelectedEvent) => void;
    componentDidLoad(): void;
    render(): any;
}
