import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Accordion',
  decorators: [withKnobs]
};

const alignmentOptions = {
  Start: 'start',
  End: 'end'
};

export const Default = () => {
  const expanded = boolean('Expanded', false);
  const alignment = select('Alignment', alignmentOptions, 'start');
  const actionContent = text('Action Bar Content', 'String or HTML');

  return (
    <smtt-accordion>
      <smtt-accordion-item
        accordion-title="My test accordion"
        expanded={expanded}
        alignment={alignment}
        action-bar-content={actionContent}
      >
        Is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </smtt-accordion-item>
      <smtt-accordion-item
        accordion-title="My test accordion"
        expanded={expanded}
        alignment={alignment}
        action-bar-content={actionContent}
      >
        Is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </smtt-accordion-item>
      <smtt-accordion-item
        accordion-title="My test accordion"
        expanded={expanded}
        alignment={alignment}
        action-bar-content={actionContent}
      >
        Is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </smtt-accordion-item>
    </smtt-accordion>
  );
};

export const FirstExpanded = () => (
  <smtt-accordion>
    <smtt-accordion-item accordion-title="My test accordion" expanded>
      Is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book.
    </smtt-accordion-item>
    <smtt-accordion-item accordion-title="My test accordion">
      Is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book.
    </smtt-accordion-item>
    <smtt-accordion-item accordion-title="My test accordion">
      Is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book.
    </smtt-accordion-item>
  </smtt-accordion>
);

export const WithActionBar = () => {
  return (
    <smtt-accordion>
      <smtt-accordion-item
        accordion-title="My test accordion"
        action-bar-content="<smtt-button>Add New</smtt-button>"
      >
        Is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </smtt-accordion-item>
      <smtt-accordion-item
        accordion-title="My test accordion"
        action-bar-content="<smtt-button>Add New</smtt-button>"
      >
        Is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </smtt-accordion-item>
      <smtt-accordion-item
        accordion-title="My test accordion"
        action-bar-content="<smtt-button>Add New</smtt-button>"
      >
        Is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </smtt-accordion-item>
    </smtt-accordion>
  );
};

export const WithTreeContent = () => {
  const rows = [
    {
      group: 'Group A',
      participants: [
        {
          group: 'A.1',
          athlete: 'Michael Phelps',
          year: '2008',
          country: 'United States',
          participants: [
            {
              group: 'A.1',
              athlete: 'Michael Phelps',
              year: '2008',
              country: 'United States'
            },
            {
              group: 'A.2',
              athlete: 'Michael Phelps',
              year: '2008',
              country: 'United States'
            },
            {
              group: 'A.3',
              athlete: 'Michael Phelps',
              year: '2008',
              country: 'United States'
            }
          ]
        },
        {
          group: 'A.2',
          athlete: 'Michael Phelps',
          year: '2008',
          country: 'United States'
        },
        {
          group: 'A.3',
          athlete: 'Michael Phelps',
          year: '2008',
          country: 'United States'
        }
      ]
    },
    {
      group: 'Group B',
      athlete: 'Mix of Names',
      year: '2000..2012',
      country: 'Group Country',
      participants: [
        {
          group: 'B.1',
          athlete: 'Natalie Coughlin',
          year: '2008',
          country: 'United States'
        },
        {
          group: 'B.2',
          athlete: 'Missy Franklin ',
          year: '2012',
          country: 'United States'
        },
        {
          group: 'B.3',
          athlete: 'Ole Einar Qjorndalen',
          year: '2002',
          country: 'Norway'
        },
        {
          group: 'B.4',
          athlete: 'Marit Bjorgen',
          year: '2010',
          country: 'Norway'
        },
        {
          group: 'B.5',
          athlete: 'Ian Thorpe',
          year: '2000',
          country: 'Australia'
        }
      ]
    },
    {
      group: 'Group C',
      participants: [
        {
          group: 'C.1',
          athlete: 'Janica Kostelic',
          year: '2002',
          country: 'Crotia'
        },
        {
          group: 'C.2',
          athlete: 'An Hyeon-Su',
          year: '2006',
          country: 'South Korea'
        }
      ]
    }
  ];

  const columns = [
    {
      headerName: 'Group',
      field: 'group',
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        checkbox: true
      }
    },

    { headerName: 'Year', field: 'year', sortable: true },
    { headerName: 'Country', field: 'country' },
    {
      headerName: 'Athlete',
      field: 'athlete',
      sortable: true,
      filter: 'agTextColumnFilter'
    },
    {
      headerName: 'Actions',
      width: 125,
      cellRenderer: data => {
        return `
        <div class="action-container">
          <smtt-rollover-menu>
            <div>
              <smtt-button btn-type="tertiary">
                <smtt-icon icon="eye"></smtt-icon>
              </smtt-button>
            </div>
            <div">
              <smtt-button btn-type="tertiary">
                <smtt-icon icon="delete"></smtt-icon>
              </smtt-button>
            </div>
          </smtt-rollover-menu>
        </div>`;
      }
    }
  ];

  return (
    <smtt-accordion>
      <smtt-accordion-item
        accordion-title="My test accordion with tree (first expanded)"
        expanded
      >
        <smtt-tree
          tree-height={300}
          group-field="group"
          children-field="participants"
          row-height="50"
          ref={el => {
            el.rows = rows;
            el.columns = columns;
          }}
        ></smtt-tree>
      </smtt-accordion-item>
      <smtt-accordion-item accordion-title="My test accordion with tree">
        <smtt-tree
          tree-height={300}
          group-field="group"
          children-field="participants"
          row-height="50"
          ref={el => {
            el.rows = rows;
            el.columns = columns;
          }}
        ></smtt-tree>
      </smtt-accordion-item>
      <smtt-accordion-item accordion-title="My test accordion with tree">
        <smtt-tree
          tree-height={300}
          group-field="group"
          children-field="participants"
          row-height="50"
          ref={el => {
            el.rows = rows;
            el.columns = columns;
          }}
        ></smtt-tree>
      </smtt-accordion-item>
    </smtt-accordion>
  );
};
