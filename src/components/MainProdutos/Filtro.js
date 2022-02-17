import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 1px solid black;
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

class Filtro extends React.Component {
    state = {
        inputValorMinimo: '10000',
        inputValorMaximo: '30000',
        inputNome: ''
    }

    onChangeValorMinimo = (event) => {
        this.setState({
            inputValorMinimo: event.target.value
        })
    }
    onChangeValorMaximo = (event) => {
        this.setState({
            inputValorMaximo: event.target.value
        })
    }
    onChangeNome = (event) => {
        this.setState({
            inputNome: event.target.value
        })
    }

    render() {
        return (
            <ContainerFiltro>
                <h2>Filtros</h2>
                <LabelPesquisa>Preço mínimo:
                    <InputPesquisa
                        placeholder="Preço mínimo"
                        type="number"
                        value={this.state.inputValorMinimo}
                        onChange={this.onChangeValorMinimo}
                    />
                </LabelPesquisa>
                <LabelPesquisa>Preço máximo:
                    <InputPesquisa
                        placeholder="Preço máximo"
                        type="number"
                        value={this.state.inputValorMaximo}
                        onChange={this.onChangeValorMaximo}
                    />
                </LabelPesquisa>
                <LabelPesquisa>Nome:
                    <InputPesquisa
                        placeholder="Produto"
                        type="text"
                        value={this.state.inputNome}
                        onChange={this.onChangeNome}
                    />
                </LabelPesquisa>
                <LabelPesquisa for='ordenar'>Preço:
                    <SelectPesquisa name='ordenar'>
                        <option value='crescente'>Crescente</option>
                        <option value='decrescente'>Decrescente</option>
                    </SelectPesquisa>
                </LabelPesquisa>
            </ContainerFiltro>
        )
    }
}

export default Filtro;