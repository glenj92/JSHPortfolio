import React, { Component, useState } from 'react';
import productJSON from "./assets/Product.json";

// import { RouteComponentProps } from 'react-router';  
// import { Link, NavLink } from 'react-router-dom';
//import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';
import { showAlert, showAlertDel } from '../Alert';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = {  products: [],      // Para almacenar la lista de elementos
                        currentProduct: '',// Para almacenar el nombre del producto actual
                        currentDescription: '',//Para almacenar la descripcion del producto actual
                        currentPrice: '',// Para almacenar el precio del producto actual
                        editProductId: null,// Para almacenar el ID del producto que estamos editando
                        loading: true, 
                        title: '' };
    }

    componentDidMount() {
        this.populateProductData();
    }

    openModal = (op) => {
        if (op == 1) {
            this.setState({ title: 'New Product', editProductId: null });
        } else if (op == 2) {
            this.setState({ title: 'Update Product' });
            this.setName('Editar');
            //document.getElementById('name').value = 'EDIATR';
        } else {
            showAlertDel('Deleted', 'warning');
        }
        window.setTimeout(function () {
            document.getElementById('name').focus();
        }, 500);
    }

    validate = () => {
        var parameters;
        var metod;
        if (document.getElementById('name').value === '') {
            showAlert('Write the name of the product', 'warning');
        }
        if (document.getElementById('description').value === '') {
            showAlert('Write the description of the product', 'warning');
        }
        if (document.getElementById('price').value === '') {
            showAlert('Write the price of the product', 'warning');
        }
    }

    handleDelete = (id, name) => {
        this.setState({ currentProduct: name });
        this.openModal(3);
    };


    render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : <div className='App'>
                <div className='container-fluid'>
                    <div className='row mt-3'>
                        <div className='col-md-4 offset-md-4'>
                            <div className='d-grid mx-auto'>
                                <button onClick={this.handleAdd} className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                    <i className='fa-solid fa-circle-plus'></i> Add
                              </button>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr><th>#</th><th>PRODUCT</th><th>DESCRIPTION</th><th>PRICE</th><th></th></tr>
                                    </thead>
                                    <tbody className='table-group-divider'>
                                        {this.state.products.map(product =>
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.description}</td>
                                                <td>${new Intl.NumberFormat('es-mx').format(product.price)}</td>
                                                <td>
                                    
                                                    <button onClick={() => this.handleEdit(product.id, product.name, product.description, product.price)} className='btn btn-warning'       
                                                        data-bs-toggle='modal'
                                                        data-bs-target='#modalProducts'>
                                                        <i className='fa-solid fa-edit'></i>
                                                    </button>
                                                    &nbsp;
                                                    <button onClick={() => this.handleDelete(product.id)} className='btn btn-danger'>
                                                        <i className='fa-solid fa-trash'></i>
                                                    </button>
                                                
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='modalProducts' className='modal fade' aria-hidden='true'>
                    <div className='modal-dialog modal-dialog-centered'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <label className='h5'>{this.state.title}</label>
                                <button className='btn-close' type='button' data-bs-dismiss='modal' aria-label='close'></button>
                            </div>
                            <div className='modal-body'>
                                <input type='hidden' id='id'></input>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                    <input type='text' id='name' className='form-control' placeholder='Name' value={this.state.currentProduct} onChange={this.handleNameChange}></input>
                                </div>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                                    <input type='text' id='description' className='form-control' placeholder='Description' value={this.state.currentDescription} onChange={this.handleDescriptionChange}></input>
                                </div>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><i className='fa-solid fa-dollar-sign'></i></span>
                                    <input type='text' id='price' className='form-control' placeholder='Price' value={this.state.currentPrice} onChange={this.handlePriceChange}></input>
                                </div>
                                <div className='d-grid col-6 mx-auto'>
                                    {this.state.editProductId === null ? (
                                        <button onClick={this.handleSave}className='btn btn-success'> 
                                            <i className='fa-solid fa-floppy-disk'></i> Add Product
                                        </button>
                                    ) : (
                                        <button onClick={this.handleUpdate} className='btn btn-success'>
                                            <i className='fa-solid fa-floppy-disk'></i> Update Product
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        

        return (
            <div>
                <h1 id='tableLabel'>Product</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );


       
    }

    async populateProductData() {
        //const response = await fetch('product');
         //console.log(response);
        //const data = await response.json();
        const data1 = await [productJSON];
       // let pr = data.length > 0 ? data : data1;
        let pr = data1;

       
       
        this.setState({ products: pr[0],
                        currentProduct: '',
                        currentDescription: '',
                        currentPrice: '',
                        editProductId: null,
                        loading: false ,    
                        title:'registre default'});
        
    }

    handleNameChange = (event) => {
        this.setState({ currentProduct: event.target.value });
    };

    handleDescriptionChange = (event) => {
        this.setState({ currentDescription: event.target.value });
    };

    handlePriceChange = (event) => {
        this.setState({ currentPrice: event.target.value });
    };

    handleEdit = (id, name, description, price) => {
        this.setState({ currentProduct: name, currentDescription: description, currentPrice: price, editProductId: id });
        this.openModal(2)
        //this.validate();
    };

    handleUpdate = () => {
        this.validate();
    };

    handleSave = () => {
        this.validate();
    };

    handleAdd = () => {
        this.openModal(1);
        this.setState({currentProduct: '', currentDescription: '', currentPrice: ''});
    };

}
