# Rails Tailwind CSS Stimulus JS Alert Component

Ruby on Rails alerts styled with Tailwind CSS powered with Stimulus JS for close and auto close functions.

[Check out the demo](https://demo-rails-alerts.herokuapp.com)

### Preview
![Preview](https://raw.githubusercontent.com/mdjamal/rails-tailwindcss-stimulus-alert-component/master/app/assets/images/demo.gif)

### Usage

```javascript
// alert_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  
  connect() {
    this.animateClasses = (this.data.get('animationClass') || 'hidden').split(' ')

    if (this.data.has("autoClose")) {
      setTimeout(() => this.close(), this.data.get("autoClose"))
    }
  }

  close() {
    if (this.element) {
      this.element.classList.add(...this.animateClasses) // add the animation class to hide elelment from dom
      setTimeout(() => this.element.remove(), 0.5 * 1000) // remove from dom after 1/2 second
    }
  }
}
```


```html
<div data-controller="alert" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong class="font-bold">Holy smokes!</strong>
    <span class="block sm:inline">Something seriously bad happened</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3"  data-action="click->alert#close">
      <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      	<title>Close</title>
      	<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
      </svg>
    </span>
</div>
```

`data-alert-animation-class` defines the list of classes that will be
added to animate the alert, like fade out or slide out.

`data-alert-auto-close="5000"` can be used to set the duration (micro seconds) to auto close.


## License
This is available as open-source under the terms of the MIT License.