/**
 * `Dumb_element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Dumb_element extends Polymer.Element {
    static get is() { return 'dumb-element'; }
    static get properties() {
        return {
            name: {
                type: String,
                value: 'dumb-element'
            }
        };
    }
}
window.customElements.define(Dumb_element.is, Dumb_element);