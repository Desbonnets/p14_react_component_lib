import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setHeaderTable, setBodyTable, setInitialBodyTable } from '../features/tableSlice';
import Search from './Search';
import Tri from './Tri';
import Header from '../modelisations/Header';

interface TableProps {
    enableSearch?: boolean;
    data: Array<any> | null;
    header: Header[];
}

interface Payload {
    [key: string]: any;
}

const Table: React.FC<TableProps> = ({ data, header, enableSearch = false }) => {

    const dispatch = useDispatch();

    const { body } = useSelector((state: RootState) => state.table);

    useEffect(() => {
        dispatch(setInitialBodyTable(data));
        dispatch(setBodyTable(data));
        dispatch(setHeaderTable(header));
    }, [data, header, dispatch]);

    return (
        <div>
            {enableSearch ? (
                <Search />
            ) : null}
            <table className="display">
                <thead>
                    <Tri />
                </thead>
                <tbody>
                    {body !== null ? (
                        body.length > 0 ? body.map((payload: Payload) => {
                            return <tr key={payload[0] + Math.random().toString(16).slice(2)}>
                                {header.length > 0 ? header.map((column: Header) => {
                                    return <td key={payload[column.id] + Math.random().toString(16).slice(2)}>{payload[column.id]}</td>;
                                }) : null}
                            </tr>
                        }) : null
                    ) : null}
                </tbody>
            </table>
        </div>
    )
};

export default Table;