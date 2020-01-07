import React from "react";
import VPCtable from "./../VPCtable/VPCtable.js";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import STRINGS from "./../../res/strings/en.js";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";

class VPCView extends React.Component {
  updateOrder = (tableTitle, oldIndex, newIndex) => {
    this.props.updateOrder(tableTitle, oldIndex, newIndex);
  };

  openAddModal = tableTitle => {
    this.props.onClickAddButton(tableTitle);
  };

  render() {
    return (
      <>
        <Menu
          right
          pageWrapId="page-wrap"
          customBurgerIcon={<i className="material-icons">live_help</i>}
        >
          <div className="stepsWrapper">
            <div className="steps">
              <div className="title">Step one:</div>
              <div className="instructions">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </div>
            </div>
            <div className="stepOne">
              <div className="title">Step two:</div>
              <div className="instructions">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </div>
            </div>
            <div className="stepOne">
              <div className="title">Step three:</div>
              <div className="instructions">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </div>
            </div>
          </div>
        </Menu>
        <Container id="page-wrap" fluid={true} className={styles.appContainer}>
          <Row>
            <Col>
              <VPCtable
                items={
                  this.props.vpc.productFunctionalityList !== undefined
                    ? this.props.vpc.productFunctionalityList.map(a => a.text)
                    : []
                }
                title={STRINGS.pf}
                half={false}
                updateFunction={this.updateOrder}
                onClickAddButton={this.openAddModal}
              />
            </Col>
            <Col>
              <div>
                <div className={styles.halfListContainer}>
                  <VPCtable
                    items={
                      this.props.vpc.productFunctionalityList[
                        this.props.selectedProductFunctionalityIndex
                      ] !== undefined &&
                      this.props.vpc.productFunctionalityList[
                        this.props.selectedProductFunctionalityIndex
                      ].positiveList !== undefined
                        ? this.props.vpc.productFunctionalityList[
                            this.props.selectedProductFunctionalityIndex
                          ].positiveList.map(a => a.text)
                        : []
                    }
                    title={STRINGS.strengths}
                    half={true}
                    updateFunction={this.updateOrder}
                    onClickAddButton={this.openAddModal}
                    addButtonDisabled={this.props.pfButtonsDisabled}
                  />
                </div>
                <div>
                  <VPCtable
                    items={
                      this.props.vpc.productFunctionalityList[
                        this.props.selectedProductFunctionalityIndex
                      ] !== undefined &&
                      this.props.vpc.productFunctionalityList[
                        this.props.selectedProductFunctionalityIndex
                      ].negativeList !== undefined
                        ? this.props.vpc.productFunctionalityList[
                            this.props.selectedProductFunctionalityIndex
                          ].negativeList.map(a => a.text)
                        : []
                    }
                    title={STRINGS.weaknesses}
                    half={true}
                    updateFunction={this.updateOrder}
                    onClickAddButton={this.openAddModal}
                    addButtonDisabled={this.props.pfButtonsDisabled}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <VPCtable
                  items={
                    this.props.vpc.customerTaskList[
                      this.props.selectedCustomerTaskIndex
                    ] !== undefined &&
                    this.props.vpc.customerTaskList[
                      this.props.selectedCustomerTaskIndex
                    ].positiveList !== undefined
                      ? this.props.vpc.customerTaskList[
                          this.props.selectedCustomerTaskIndex
                        ].positiveList.map(a => a.text)
                      : []
                  }
                  title={STRINGS.gains}
                  half={true}
                  updateFunction={this.updateOrder}
                  onClickAddButton={this.openAddModal}
                  addButtonDisabled={this.props.ctButtonsDisabled}
                />
                <VPCtable
                  items={
                    this.props.vpc.customerTaskList[
                      this.props.selectedCustomerTaskIndex
                    ] !== undefined &&
                    this.props.vpc.customerTaskList[
                      this.props.selectedCustomerTaskIndex
                    ].negativeList !== undefined
                      ? this.props.vpc.customerTaskList[
                          this.props.selectedCustomerTaskIndex
                        ].negativeList.map(a => a.text)
                      : []
                  }
                  title={STRINGS.pains}
                  half={true}
                  updateFunction={this.updateOrder}
                  onClickAddButton={this.openAddModal}
                  addButtonDisabled={this.props.ctButtonsDisabled}
                />
              </div>
            </Col>
            <Col>
              <VPCtable
                items={
                  this.props.vpc.customerTaskList !== undefined
                    ? this.props.vpc.customerTaskList.map(a => a.text)
                    : []
                }
                title={STRINGS.ct}
                half={false}
                updateFunction={this.updateOrder}
                onClickAddButton={this.openAddModal}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default VPCView;
