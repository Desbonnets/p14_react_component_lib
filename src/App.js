import React from 'react';
import DataTable from './lib/components/DataTable';

function App() {

    let headerExemple = [
        { id: 'firstName', label: 'First Name' },
        { id: 'lastName', label: 'Last Name' },
        { id: 'startDate', label: 'Start Date' },
        { id: 'department', label: 'Department' },
        { id: 'dateOfBirth', label: 'Date of Birth' },
        { id: 'street', label: 'Street' },
        { id: 'city', label: 'City' },
        { id: 'state', label: 'State' },
        { id: 'zipCode', label: 'Zip Code' }
    ];

    let dataExemple = [
        {
            firstName: 'Dupont',
            lastName: 'Alain',
            startDate: '27/02/2024',
            department: 'Department0',
            dateOfBirth: '12/11/2000',
            street: 'Street0',
            city: 'City0',
            state: 'State0',
            zipCode: 'azerty156'
        },
        {
            firstName: 'Dupont',
            lastName: 'Alain',
            startDate: '27/02/2024',
            department: 'Department1',
            dateOfBirth: '12/11/2000',
            street: 'Street1',
            city: 'City1',
            state: 'State1',
            zipCode: 'azerty156'
        },
        {
            firstName: 'Toto',
            lastName: 'Alain',
            startDate: '27/02/2028',
            department: 'Department2',
            dateOfBirth: '12/11/2000',
            street: 'Street2',
            city: 'City2',
            state: 'State2',
            zipCode: 'azerty156'
        }
    ];

    return (
        <div>
            <DataTable data={dataExemple} header={headerExemple} enableSearch={true} />
        </div>
    )
}

export default App