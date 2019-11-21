import React, { useEffect, useState } from 'react';
import { DataTable, Text} from 'grommet';
import './DashboardItem.css';

export default function DashboardItem({data}){
    return(
    <>
        <DataTable
        columns={[
        {
            property: 'name',
            header: <Text>Nome das petições</Text>,
            primary: true,
        },  {
                property: 'desc',
                header: <Text>Descrição</Text>,
                primary: true,
            },  {
                property: 'qtAss',
                header: <Text>Quantidade de assinatura</Text>,
                primary: true,
            }]}
            data={data}
            />
        </>
    )
}

