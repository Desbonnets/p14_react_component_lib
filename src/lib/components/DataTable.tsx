import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import '../css/index.css';
import Table from './Table';
import Header, { verifierModeleHeaderArray } from '../modelisations/Header';
import { generateStore } from '../store';

interface DataTableProps {
    enableSearch?: boolean;
    enablePagination?: boolean;
    data: Array<any>;
    apiData: string | null;
    // header: Array<{ id: string; label: string; type: string }>;
    header: Header[];
}

const DataTable: React.FC<DataTableProps> = ({ data = null, apiData = null, header, enableSearch = false, enablePagination = false }) => {

    const [valideParam, setValideParam] = useState<boolean>(false);

    useEffect(() => {
        if (verifierModeleHeaderArray(header)) {
            setValideParam(true);
        } else {
            setValideParam(false);
            console.error('Error: header invalide');
        }
    }, [header]);

    const storeInstance = generateStore();

    return (
        <Provider store={storeInstance}>
            {valideParam ? <Table data={data} apiData={apiData} header={header} enableSearch={enableSearch} enablePagination={enablePagination} ></Table> : null}
            {/* <Table data={data} header={header} enableSearch={enableSearch} ></Table> */}
        </Provider>
    )
};

export default DataTable;