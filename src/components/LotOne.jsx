import WorkDistribute from './WorkDistribute';

const lotOne = () => {
  const users = [
    {
      id: 1,
      name: 'Ashraful',
      dailyWork: [
        {
          workName: 'client handling',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
      ],
      officeWork: [
        {
          workName: 'test',
        },
        {
          workName: ' ',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
      ],
      status: 'Not Complete',
    },
    {
      id: 2,
      name: 'Aduri',
      dailyWork: [
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
      ],
      officeWork: [
        {
          workName: 'test',
        },
        {
          workName: ' ',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
      ],
      status: 'Not Complete',
    },
    {
      id: 3,
      name: 'Aduri',
      dailyWork: [
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
      ],
      officeWork: [
        {
          workName: 'test',
        },
        {
          workName: ' ',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
      ],
      status: 'Not Complete',
    },
    {
      id: 4,
      name: 'Aduri',
      dailyWork: [
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
      ],
      officeWork: [
        {
          workName: 'test',
        },
        {
          workName: ' ',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
      ],
      status: 'Not Complete',
    },
    {
      id: 5,
      name: 'Aduri',
      dailyWork: [
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
      ],
      officeWork: [
        {
          workName: 'test',
        },
        {
          workName: ' ',
        },
        {
          workName: 'test',
        },
        {
          workName: 'test',
        },
      ],
      status: 'Not Complete',
    },
  ];
  return <WorkDistribute users={users} />;
};

export default lotOne;
