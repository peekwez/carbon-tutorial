const schemas = {
  count: 5,
  schemas: [
    {
      id: 1,
      name: 'strive_loe',
      version: '6mf9Eb8wTx',
      description:
        'This schema extracts employee information from a letter of employment',
      definition: {
        title: 'LetterOfEmploymentSchema_V1',
        type: 'object',
        properties: {
          employee_name: {
            title: 'Employee Name',
            description:
              'What is the name of the employee without any suffixes or prefixes?',
            type: ['string', 'null'],
          },
          employee_start_date: {
            title: 'Employee Start Date',
            description:
              'When was the employee hired? Example April 30,2022 should be returned as 2022-04-30.',
            type: ['string', 'null'],
          },
          employee_title: {
            title: 'Employee Title',
            description: 'What is the title of the employee?',
            type: ['string', 'null'],
          },
          employee_salary: {
            title: 'Employee Salary',
            description:
              'What is the salary of the employee? For example 10k should be 10000, 1 million should be 1000000',
            type: ['number', 'null'],
          },
        },
      },
      status: 'ACTIVE',
      tokens: 199,
    },
    {
      id: 2,
      name: 'strive_loe',
      version: 'Cr33KWTETF',
      description:
        'This schema extracts employee information from a letter of employment',
      definition: {
        title: 'LetterOfEmploymentSchema_V3',
        type: 'object',
        properties: {
          employee: {
            title: 'Employee',
            description: 'Extracts information about an employee on the letter',
            allOf: [
              {
                $ref: '#/definitions/Employee',
              },
            ],
          },
          employer: {
            title: 'Employer',
            description: 'Extracts information about an employer on the letter',
            allOf: [
              {
                $ref: '#/definitions/Employer',
              },
            ],
          },
          letter_date: {
            title: 'Letter Date',
            description:
              'When was the employment letter written? Example 2022-04-30',
            type: 'string',
          },
        },
        required: ['employee', 'employer'],
        definitions: {
          Employee: {
            title: 'Employee',
            type: 'object',
            properties: {
              name: {
                title: 'Name',
                description:
                  'What is the name of the employee without their any suffixes or prefixes?',
                type: 'string',
              },
              start_date: {
                title: 'Start Date',
                description:
                  'When was the employee hired? Example April 30,2022 should be returned as 2022-04-30.',
                type: 'string',
              },
              title: {
                title: 'Title',
                description: 'What is the title of the employee?',
                type: 'string',
              },
              salary: {
                title: 'Salary',
                description:
                  'What is the salary of the employee? For example 10k should be 10000, 1 million should be 1000000',
                type: 'number',
              },
            },
          },
          Employer: {
            title: 'Employer',
            type: 'object',
            properties: {
              name: {
                title: 'Name',
                description: 'Where does the employee work?',
                type: 'string',
              },
              address: {
                title: 'Address',
                description:
                  'What is the address of the employer including the apartment number?',
                type: 'string',
              },
            },
          },
        },
      },
      status: 'ACTIVE',
      tokens: 400,
    },
    {
      id: 3,
      name: 'strive_loe',
      version: 'DAujgRcc55',
      description:
        'This schema extracts employee information from a letter of employment',
      definition: {
        title: 'LetterOfEmploymentSchema_V2',
        type: 'object',
        properties: {
          employee_name: {
            title: 'Employee Name',
            description:
              'What is the name of the employee without their any suffixes or prefixes?',
            type: 'string',
          },
          employee_start_date: {
            title: 'Employee Start Date',
            description:
              'When was the employee hired? Example April 30,2022 should be returned as 2022-04-30.',
            type: 'string',
          },
          employee_title: {
            title: 'Employee Title',
            description: 'What is the title of the employee?',
            type: 'string',
          },
          employee_salary: {
            title: 'Employee Salary',
            description:
              'What is the salary of the employee? For example 10k should be 10000, 1 million should be 1000000',
            type: 'number',
          },
          employer_name: {
            title: 'Employer Name',
            description: 'Where does the employee work?',
            type: 'string',
          },
          employer_address: {
            title: 'Employer Address',
            description:
              'What is the address of the employer including the apartment number?',
            type: 'string',
          },
          letter_date: {
            title: 'Letter Date',
            description:
              'When was the employment letter written? Example 2022-04-30',
            type: 'string',
          },
        },
      },
      status: 'ACTIVE',
      tokens: 284,
    },
    {
      id: 4,
      name: 'strive_loe',
      version: 'K7R3pbjYQw',
      description:
        'This schema extracts employee information from a letter of employment',
      definition: {
        title: 'LetterOfEmploymentSchema_V2',
        type: 'object',
        properties: {
          employee_name: {
            title: 'Employee Name',
            description:
              'What is the name of the employee without their any suffixes or prefixes?',
            type: ['string', 'null'],
          },
          employee_start_date: {
            title: 'Employee Start Date',
            description:
              'When was the employee hired? Example April 30,2022 should be returned as 2022-04-30.',
            type: ['string', 'null'],
          },
          employee_title: {
            title: 'Employee Title',
            description: 'What is the title of the employee?',
            type: ['string', 'null'],
          },
          employee_salary: {
            title: 'Employee Salary',
            description:
              'What is the salary of the employee? For example 10k should be 10000, 1 million should be 1000000',
            type: ['number', 'null'],
          },
          employer_name: {
            title: 'Employer Name',
            description: 'Where does the employee work?',
            type: ['string', 'null'],
          },
          employer_address: {
            title: 'Employer Address',
            description:
              'What is the address of the employer including the apartment number?',
            type: ['string', 'null'],
          },
          letter_date: {
            title: 'Letter Date',
            description:
              'When was the employment letter written? Example 2022-04-30',
            type: ['string', 'null'],
          },
        },
      },
      status: 'DISABLED',
      tokens: 311,
    },
    {
      id: 5,
      name: 'strive_loe',
      version: 'KfdEb9uSGJ',
      description:
        'This schema extracts employee information from a letter of employment',
      definition: {
        title: 'LetterOfEmploymentSchema_V1',
        type: 'object',
        properties: {
          employee_name: {
            title: 'Employee Name',
            description:
              'What is the name of the employee without any suffixes or prefixes?',
            type: 'string',
          },
          employee_start_date: {
            title: 'Employee Start Date',
            description:
              'When was the employee hired? Example April 30,2022 should be returned as 2022-04-30.',
            type: 'string',
          },
          employee_title: {
            title: 'Employee Title',
            description: 'What is the title of the employee?',
            type: 'string',
          },
          employee_salary: {
            title: 'Employee Salary',
            description:
              'What is the salary of the employee? For example 10k should be 10000, 1 million should be 1000000',
            type: 'number',
          },
        },
      },
      status: 'ACTIVE',
      tokens: 184,
    },
  ],
};
export default schemas;
