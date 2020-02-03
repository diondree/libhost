import React from 'react';

import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Tree',
  decorators: [withKnobs]
};

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
  }
];

export const Default = () => {
  return (
    <smtt-tree
      tree-height={500}
      group-field="group"
      children-field="participants"
      row-height="50"
      ref={el => {
        el.rows = rows;
        el.columns = columns;
      }}
    ></smtt-tree>
  );
};

export const WithoutPagination = () => {
  return (
    <smtt-tree
      tree-height={500}
      group-field="group"
      children-field="participants"
      row-height="50"
      ref={el => {
        el.rows = rows;
        el.columns = columns;
      }}
      paginate={false}
    ></smtt-tree>
  );
};

// export const AllExpanded = () => {
//   return (
//     <smtt-tree
//       tree-height={500}
//       group-field="group"
//       children-field="participants"
//       row-height="50"
//       ref={el => {
//         el.rows = rows;
//         el.columns = columns;
//       }}
//       expanded={true}
//     ></smtt-tree>
//   );
// };
