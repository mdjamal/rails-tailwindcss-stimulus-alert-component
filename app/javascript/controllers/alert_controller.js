import { Controller } from "stimulus"

export default class extends Controller {
  
  connect() {
    // Get animation class from data-alert-animation-class="your animation classess" attr if available else default to class .hidden
    this.animateClasses = (this.data.get('animationClass') || 'hidden').split(' ')
    console.log(this.animateClasses)

    // Auto Close if data-alert-auto-close="10000" attr is set. Time in ms 10000 = 10 seconds
    if (this.data.has("autoClose")) {
      setTimeout(() => this.close(), this.data.get("autoClose"))
    }
  }

  close() {
    if (this.element) {
      // to learn more about the js ... spread operator - https://dev.to/sagar/three-dots---in-javascript-26ci
		  this.element.classList.add(...this.animateClasses) // add the animation class to hide elelment from dom
      setTimeout(() => this.element.remove(), 0.5 * 1000) // remove from dom after 1/2 second
		}	
  }
}
