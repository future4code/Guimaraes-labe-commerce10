import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 1px solid black;
    width: 15vw;
`
const InputPesquisa = styled.input`
    margin: 20px;
`
const LabelPesquisa = styled.label`
    margin-left: 15px;
`
const SelectPesquisa = styled.select`
    margin: 15px;
`

export default function Filtro(props) {
    return <ContainerFiltro>
        <h2>Filtros</h2>
        <LabelPesquisa>Preço mínimo:
            <InputPesquisa
                placeholder="Preço mínimo"
                type="number"
                value={props.inputValorMinimo}
                onChange={props.onChangeValorMinimo}
            />
        </LabelPesquisa>
        <LabelPesquisa>Preço máximo:
            <InputPesquisa
                placeholder="Preço máximo"
                type="number"
                value={props.inputValorMaximo}
                onChange={props.onChangeValorMaximo}
            />
        </LabelPesquisa>
        <LabelPesquisa>Nome:
            <InputPesquisa
                placeholder="Produto"
                type="text"
                value={props.inputNome}
                onChange={props.onChangeNome}
            />
        </LabelPesquisa>
        <LabelPesquisa for='ordenar'>Preço:
            <SelectPesquisa name='ordenar'>
                <option value='crescente'>Crescente</option>
                <option value='decrescente'>Decrescente</option>
            </SelectPesquisa>
        </LabelPesquisa>
    </ContainerFiltro>
}

