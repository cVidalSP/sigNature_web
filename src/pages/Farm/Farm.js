import React, {useEffect, useState} from 'react';
import Service from '../../services/BaseAxios';
import { DataTable, Text} from 'grommet';

export default function Farm(){
    const [data, setData] = useState([]);

    function getAgronegocio() {
        Service.get('http://localhost:3333/getAgronegocio').then(function (value) {
            setData(value.data)
        });
    }

    useEffect(() => getAgronegocio(), []);

    return (
        <div className="mainContent">
        <p>
            Agronegocios denunciados
        </p>
        <DataTable
            columns={[
                {
                    property: 'nomeFazendeiro',
                    header: <Text>Nome do fazendeiro</Text>,
                primary: true,
            },  {
                property: 'endereco',
                header: <Text>Endereço</Text>,
                primary: true,
            },  {
                property: 'cpf',
                header: <Text>CPF</Text>,
                primary: true,
            },  {
                property: 'tipoAgronegocio',
                header: <Text>Tipo do agronegocio</Text>,
                primary: true,
            },  {
                property: 'denuncia',
                    header: <Text>Denuncia</Text>,
                primary: true,
            },  {
                property: 'historico',
                header: <Text>Historico</Text>,
                primary: true,
            },  {
                property: 'mutado',
                header: <Text>Mutado</Text>,
                primary: true,
            }]}
        data={data}
        />
        </div>
    );
}