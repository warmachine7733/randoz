import React from 'react';
import './App.css';
import VPCView from './components/VPCview/VPCview';
import AddModal from './components/Modals/AddModal/AddModal.js';
import STRINGS from './res/strings/en.js';
import ArrayUtils from './utils/ArrayUtils.js';


class App extends React.Component {
  state = {
    vpc: {
        productFunctionalityList: [{text: "first pc",
                                     positiveList: [{text: "first strength",
                                                     positive: true}],
                                     negativeList: []},
                                     {text: "second pc",
                                     positiveList: [],
                                     negativeList: []},
                                    ],
        customerTaskList: [],
    },
    selectedCustomerTaskIndex: -1,
    selectedProductFunctionalityIndex: -1,

    showAddModal: false,
    addModalTable: "",
    addModalText: "",
    pfButtonsDisabled: true,
    ctButtonsDisabled: true,
  };

  openAddModal = (tableTitle) => {
    this.setState({
      showAddModal: true,
      addModalTable: tableTitle,
    });
  }

  handleAddModalClose = () => {
		this.setState({ 
      showAddModal: false,
      addModalText: "",
     });
	}

	handleAddModalShow = () => {
		this.setState({ 
      showAddModal: true,
    });
  }
  
  updateAddModalText = (input) => {
    this.setState({addModalText: input});
  }

  addItemToTable = () => {
    let vpc = this.state.vpc;
    if(this.state.addModalTable === STRINGS.pf &&
        !ArrayUtils.checkIfItemInArray(vpc.productFunctionalityList.map(a => a.text), this.state.addModalText)){
      vpc.productFunctionalityList.push({text: this.state.addModalText,
                                          positiveList: [],
                                          negativeList: []})
    } else if(this.state.addModalTable === STRINGS.ct &&
        !ArrayUtils.checkIfItemInArray(vpc.customerTaskList.map(a => a.text), this.state.addModalText)){
      vpc.customerTaskList.push({text: this.state.addModalText,
                                          positiveList: [],
                                          negativeList: []})
    } else if(this.state.addModalTable === STRINGS.strengths){
        if(this.state.vpc.productFunctionalityList !== undefined && 
          this.state.vpc.productFunctionalityList[this.state.selectedProductFunctionalityIndex] !== undefined &&
          this.state.vpc.productFunctionalityList[this.state.selectedProductFunctionalityIndex].positiveList !== undefined &&
          !ArrayUtils.checkIfItemInArray(vpc.productFunctionalityList[this.state.selectedProductFunctionalityIndex]
            .positiveList.map(a => a.text), this.state.addModalText)){
            vpc.productFunctionalityList[this.state.selectedProductFunctionalityIndex].positiveList.push({text: this.state.addModalText,
              positive: true});
        }
    } else if(this.state.addModalTable === STRINGS.weaknesses){
        if(this.state.vpc.productFunctionalityList !== undefined && 
          this.state.vpc.productFunctionalityList[this.state.selectedProductFunctionalityIndex] !== undefined &&
          this.state.vpc.productFunctionalityList[this.state.selectedProductFunctionalityIndex].negativeList !== undefined &&
          !ArrayUtils.checkIfItemInArray(vpc.productFunctionalityList[this.state.selectedProductFunctionalityIndex]
            .negativeList.map(a => a.text), this.state.addModalText)){
            vpc.productFunctionalityList[this.state.selectedProductFunctionalityIndex].negativeList.push({text: this.state.addModalText,
              positive: false});
        }
    } else if(this.state.addModalTable === STRINGS.gains){
      if(this.state.vpc.customerTaskList !== undefined && 
        this.state.vpc.customerTaskList[this.state.selectedCustomerTaskIndex] !== undefined &&
        this.state.vpc.customerTaskList[this.state.selectedCustomerTaskIndex].positiveList !== undefined &&
        !ArrayUtils.checkIfItemInArray(vpc.customerTaskList[this.state.selectedCustomerTaskIndex]
          .positiveList.map(a => a.text), this.state.addModalText)){
          vpc.customerTaskList[this.state.selectedCustomerTaskIndex].positiveList.push({text: this.state.addModalText,
            positive: true});
      }
    } else if(this.state.addModalTable === STRINGS.pains){
      if(this.state.vpc.customerTaskList !== undefined && 
        this.state.vpc.customerTaskList[this.state.selectedCustomerTaskIndex] !== undefined &&
        this.state.vpc.customerTaskList[this.state.selectedCustomerTaskIndex].negativeList !== undefined &&
        !ArrayUtils.checkIfItemInArray(vpc.customerTaskList[this.state.selectedCustomerTaskIndex]
          .negativeList.map(a => a.text), this.state.addModalText)){
          vpc.customerTaskList[this.state.selectedCustomerTaskIndex].negativeList.push({text: this.state.addModalText,
            positive: false});
    }
  }
    this.setState({
      vpc: vpc,
    });
    this.handleAddModalClose();
  }

  updateOrder = (tableTitle, oldIndex, newIndex) => {
    var vpc = this.state.vpc;
    if(tableTitle === STRINGS.pf){
        ArrayUtils.arrayMove(vpc.productFunctionalityList, oldIndex, newIndex);
        this.setState({
          selectedProductFunctionalityIndex: newIndex,
          pfButtonsDisabled: false,
        });
    } else if(tableTitle === STRINGS.strengths){
        ArrayUtils.arrayMove(vpc.productFunctionalityList[this.state.selectedProductFunctionalityIndex].positiveList, oldIndex, newIndex);
    } else if(tableTitle === STRINGS.weaknesses){
        ArrayUtils.arrayMove(vpc.productFunctionalityList[this.state.selectedProductFunctionalityIndex].negativeList, oldIndex, newIndex);
    } else if(tableTitle === STRINGS.ct){
        ArrayUtils.arrayMove(vpc.customerTaskList, oldIndex, newIndex);
        this.setState({
          selectedCustomerTaskIndex: newIndex,
          ctButtonsDisabled: false,
        });
    } else if(tableTitle === STRINGS.gains){
        ArrayUtils.arrayMove(vpc.customerTaskList[this.state.selectedCustomerTaskIndex].positiveList, oldIndex, newIndex);
    } else if(tableTitle === STRINGS.pains){
        ArrayUtils.arrayMove(vpc.customerTaskList[this.state.selectedCustomerTaskIndex].negativeList, oldIndex, newIndex);
    }
    this.setState({
        vpc: vpc,
    })
  };


  render(){
    return (
      <div>
        <AddModal show={this.state.showAddModal}
                  onHide={this.handleAddModalClose}
                  table={this.state.addModalTable}
                  text={this.state.addModalText}
                  onChange={this.updateAddModalText}
                  onSave={this.addItemToTable}/>
        <VPCView  vpc={this.state.vpc}
                  selectedCustomerTaskIndex={this.state.selectedCustomerTaskIndex}
                  selectedProductFunctionalityIndex={this.state.selectedProductFunctionalityIndex}
                  onClickAddButton={this.openAddModal}
                  updateOrder={this.updateOrder}
                  pfButtonsDisabled={this.state.pfButtonsDisabled}
                  ctButtonsDisabled={this.state.ctButtonsDisabled}/>
        
      </div>
    );
  }
}

export default App;
