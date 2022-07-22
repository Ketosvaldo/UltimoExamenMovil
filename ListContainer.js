import React, {useState, useMemo} from 'react';
import ListFilt from './ListFilt';
import Box from './Box';
import items from './items';

function mapItems(items) {
    return items.map((value, i) => ({key:i.toString(), value}));
}

const array = items.map((item) => <Box>{item}</Box>);

function filterAndSort(text, asc) {
    return array
        .filter((i) => text.length === 0 || i.includes(text))
        .sort(
            asc 
                ? (a, b) => (a > b ? 1 : 0)
                : (a, b) => (b > a ? 1 : 0)
        );
}

export default function ListContainer() {
    const [asc, setAsc] = useState(true);
    const [filter, setFilter] = useState('');

    const data = useMemo(() => {
        return filterAndSort(filter, asc);
    }, [filter, asc]);

    return (
        <ListFilt
            data = {mapItems(data)}
            asc = {asc}
            onFilter = {(text) => {
                setFilter(text);
            }}

            onSort = {() => {
                setAsc(!asc);
            }}
        
        />
    )
}