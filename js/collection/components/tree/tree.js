import { h } from "@stencil/core";
// import {
//   Grid,
//   AllCommunityModules,
//   GridOptions,
//   RowSelectedEvent
// } from '@ag-grid-community/all-modules';
import { Grid, AllModules } from '@ag-grid-enterprise/all-modules';
export class Tree {
    constructor() {
        /**
         * The desired height of the element
         */
        this.treeHeight = 600;
        /**
         * Height of rows
         */
        this.rowHeight = 25;
        /**
         * The definition of the columns
         */
        this.columns = [];
        /**
         * The array of data to be displayed within rows
         */
        this.rows = [];
        /**
         * Whether tree should be expanded by default
         */
        this.expanded = false;
        /**
         * Type of selection to be used in tree
         */
        this.rowSelection = 'multiple';
        /**
         * Name of field containing children
         */
        this.childrenField = '';
        /**
         * Name of group field
         */
        this.groupField = '';
        /**
         * Whether or not to paginate data
         */
        this.paginate = true;
        /**
         * Function called when an ag-Grid rowSelectedEvent is triggered
         */
        this.rowSelectedHandler = (event) => {
            this.rowSelected.emit(event.data);
        };
    }
    componentDidLoad() {
        const getNodeChildDetails = rowItem => {
            if (rowItem[this.childrenField]) {
                return {
                    group: true,
                    // provide ag-Grid with the children of this group
                    children: rowItem[this.childrenField],
                    // the key is used by the default group cellRenderer
                    key: rowItem[this.groupField]
                };
            }
            else {
                return null;
            }
        };
        const gridOptions = {
            columnDefs: this.columns,
            rowData: this.rows,
            animateRows: true,
            rowSelection: this.rowSelection,
            rowHeight: this.rowHeight,
            groupDefaultExpanded: this.expanded ? 2 : 0,
            groupSelectsChildren: true,
            groupSelectsFiltered: true,
            onRowSelected: this.rowSelectedHandler,
            pagination: this.paginate,
            autoGroupColumnDef: {
                cellRenderer: 'agGroupCellRenderer',
                cellRendererParams: {
                    checkbox: true
                },
                rowGroup: true
            },
            getNodeChildDetails: getNodeChildDetails,
            onGridReady: function (params) {
                params.api.sizeColumnsToFit();
            },
            icons: {
                groupExpanded: `<smtt-icon aria-label="group expanded" theme="primary" width="15" icon="chevron-down">
        </smtt-icon>`,
                groupContracted: `<smtt-icon aria-label="group contracted" theme="primary" width="15" icon="chevron-right">
        </smtt-icon>`,
                menu: `<smtt-icon aria-label="menu" theme="primary" width="15" icon="burger-menu">
        </smtt-icon>`,
                filter: `<smtt-icon aria-label="filter" theme="primary" width="15" icon="filter">
        </smtt-icon>`
                // checkboxChecked: `<smtt-icon theme="primary" width="15" icon="states-complete">
                // </smtt-icon>`,
                // checkboxUnchecked: `<smtt-icon theme="primary" width="15" icon="states-disable">
                // </smtt-icon>`
            }
        };
        this.agGrid = this.el.querySelector('#myGrid');
        new Grid(this.agGrid, gridOptions, { modules: AllModules });
    }
    render() {
        return (h("div", { id: "myGrid", style: { height: `${this.treeHeight}px`, width: '100%' }, class: "ag-theme-balham" }));
    }
    static get is() { return "smtt-tree"; }
    static get originalStyleUrls() { return {
        "$": ["tree.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tree.css"]
    }; }
    static get properties() { return {
        "treeHeight": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The desired height of the element"
            },
            "attribute": "tree-height",
            "reflect": false,
            "defaultValue": "600"
        },
        "rowHeight": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Height of rows"
            },
            "attribute": "row-height",
            "reflect": false,
            "defaultValue": "25"
        },
        "columns": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "ColumnDefinition[]",
                "resolved": "ColumnDefinition[]",
                "references": {
                    "ColumnDefinition": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The definition of the columns"
            },
            "defaultValue": "[]"
        },
        "rows": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "object[]",
                "resolved": "object[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The array of data to be displayed within rows"
            },
            "defaultValue": "[]"
        },
        "expanded": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Whether tree should be expanded by default"
            },
            "attribute": "expanded",
            "reflect": false,
            "defaultValue": "false"
        },
        "rowSelection": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'single' | 'multiple'",
                "resolved": "\"multiple\" | \"single\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Type of selection to be used in tree"
            },
            "attribute": "row-selection",
            "reflect": false,
            "defaultValue": "'multiple'"
        },
        "childrenField": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Name of field containing children"
            },
            "attribute": "children-field",
            "reflect": false,
            "defaultValue": "''"
        },
        "groupField": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Name of group field"
            },
            "attribute": "group-field",
            "reflect": false,
            "defaultValue": "''"
        },
        "paginate": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Whether or not to paginate data"
            },
            "attribute": "paginate",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get events() { return [{
            "method": "rowSelected",
            "name": "rowSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event triggered when a row is selected or deselected"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
