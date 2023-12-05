import { Component } from "react"
import { Modal } from "./Modal/Modal"
import { Clock } from "./Clock/Clock";

export class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
}

toggleModal = () => {
  this.setState(({ showModal }) => ({
    showModal: !showModal,
  }));
};


render() { 

  const {showModal} = this.state


return (
  <div>
    <button type="button" onClick={this.toggleModal} >Open Modal/Clock</button>
{showModal && (

<Modal onClose={this.toggleModal}>
  <h1>Hi, there is a content for The Modal Window </h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis distinctio quas eos ea provident, sunt enim sed hic suscipit quibusdam quasi fuga, quisquam labore? Neque tempora ratione nulla ipsam.</p>
  <button type='button' onClick={this.toggleModal} >Close </button>
  </Modal>)}   
   {/* {showModal && <Clock></Clock>} */}

  <Clock ></Clock>
   
  </div>)

}
}