import React, { Component } from 'react'
import { variables } from './Variables';
import Navbar from './components/NavigationBar';
import background from "./images/tp.png";



export class Strategies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strategies: [],
            strategyName: "",
            symbol: "",
            entryType: "",
            orderType: "",
            createButton:true,
            modalAction:false      
        }
    }

    refreshList() {
        fetch(variables.API_URL + 'strategies')
            .then(response => response.json())
            .then(data => {
                this.setState({ strategies: data })
            })
    }

    componentDidMount() {
        this.refreshList();
    }
    addNewStragegy() {
        this.setState({
            modalTitle: "Add New Strategy",
            sName: "",
            symbol: "",
            entryType: "",
            orderType: "",
            createButton:true,
            modalAction:true
        });
    }
    editStragegy(st) {
        console.log('st-->' + st);
        this.setState({
            modalTitle: "Edit Strategy",
            sName: st.sName,
            symbol: st.symbol,
            entryType: st.entryType,
            orderType: st.orderType,
            createButton:false,
            modalAction:true
        });
    }
    changeStrategyName = (e) => {
        console.log('tt->' + e.target.value);
        this.strategyName = e.target.value;
        this.setState({ strategyName: e.target.value });

    }
    onChangeEntryType = (e) => {
        this.setState({ entryType: e.target.value });
    }
    onChangeSymbol = (e) => {
        this.setState({ symbol: e.target.value });
    }
    onChangeOrderType = (e) => {
        this.setState({ orderType: e.target.value });
    }
    createClick() {
        fetch(variables.API_URL + 'strategies', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sName: this.state.strategyName,
                symbol: this.state.symbol,
                entryType: this.state.entryType,
                orderType: this.state.orderType
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.modalAction=false;
                this.refreshList();
            }, (error) => {
                alert('Failed->' + JSON.stringify(error));
            })
    }
    updateStrategy(st) {
        console.log('st-->' + st.sName);
        console.log('ss-->' + this.state.strategyName);
        fetch(variables.API_URL + 'updateStrategyRecord', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: st.id,
                sName: st.sName,
                symbol: st.symbol,
                entryType: st.entryType,
                orderType: st.orderType
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.modalAction=false;
                this.refreshList();
            }, (error) => {
                alert('Failed to update->' + JSON.stringify(error));
            })
    }
    handleDelete = (rowId, id) => {
        console.log(rowId, id);
        //1 YourCellName updateStrategyRecord
        fetch(variables.API_URL + 'deleteStrategyRecord', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sName: rowId,
                id: id
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Failed->' + JSON.stringify(error));
            })
    };

    render() {
        const {
            strategies,
            strategyName,
            entryType,
            orderType,
            symbol
        } = this.state;

        return (
            < div  class = "image"
            style = {{
               height: "750px",
               width: "1150px",
               backgroundImage:`url(${background})`,
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat",
            }}>
                <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addNewStragegy()}>
                    Add New Strategy
                </button>


                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Entry Type</th>
                            <th>Order Type</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {strategies.map(st =>
                            <tr key={st.sName}>
                                <td>{st.id}</td>
                                <td>{st.sName}</td>
                                <td>{st.symbol}</td>
                                <td>{st.entryType}</td>
                                <td>{st.orderType}</td>
                                {/* <td><button
          className="btn btn-success btn-xs"
          onClick={() => this.updateStrategy(st)}>
          Edit
                        </button></td>*/}
                                <td>
                                    <button type="button"
                                        className="btn btn-success btn-xs"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => this.editStragegy(st)}>
                                        Edit
                                    </button>
                                </td>
                                <td><button
                                    className="btn btn-danger btn-xs"
                                    onClick={() => this.handleDelete(st.sName, st.id)}>
                                    Delete
                                </button></td>
                           
                            </tr>
                        )}
                    </tbody>
                </table>
               
                <div  className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">New Strategy</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Strategy Name</span>
                                    <input type="text" className="form-control"
                                        value={strategyName}
                                        onChange={this.changeStrategyName} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Symbol</span>
                                    <input type="text" className="form-control"
                                        value={symbol}
                                        onChange={this.onChangeSymbol} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Entry Type</span>
                                    <select id="etype" onChange={this.onChangeEntryType} value={entryType}>
                                        <option value="entryType">Entry Type</option>
                                        <option value="Buy">Buy</option>
                                        <option value="Sell">Sell</option>
                                    </select>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">Order Type</span>
                                    <select id="otype" onChange={this.onChangeOrderType} value={orderType}>
                                        <option value="entryType">Entry Type</option>
                                        <option value="MIS">MIS</option>
                                        <option value="NRML">NRML</option>
                                    </select>
                                </div>
                            <div>
                            
                                {this.state.createButton ? (   <button type="button"
                                    className="btn btn-primary float-start"
                                    onClick={() => this.createClick()}
                                >Create</button> 
                                ):(
                            <button type="button"
                                    className="btn btn-primary float-start"
                                    onClick={() => this.createClick()}
                                >Edit</button>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}