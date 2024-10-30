const app = Vue.createApp({
    data() {
        return {
            display: "",
            buttons: [
                [
                    { label: "(", type: "parenthesis" },
                    { label: ")", type: "parenthesis" },
                    { label: "%", type: "operator" },
                    { label: "AC", type: "clear" }
                ],
                [
                    { label: "7", type: "number" },
                    { label: "8", type: "number" },
                    { label: "9", type: "number" },
                    { label: "+", type: "operator" }
                ],
                [
                    { label: "4", type: "number" },
                    { label: "5", type: "number" },
                    { label: "6", type: "number" },
                    { label: "-", type: "operator" }
                ],
                [
                    { label: "1", type: "number" },
                    { label: "2", type: "number" },
                    { label: "3", type: "number" },
                    { label: "*", type: "operator" }
                ],
                [
                    { label: "0", type: "number" },
                    { label: ".", type: "operator" },
                    { label: "=", type: "equal" },
                    { label: "/", type: "operator" }
                ]
            ]
        }
    },
    methods: {
        valid() {
            this.display = this.display.replace(/[^0-9+\-*/().%]/g, '');
        },
        handleClick(button) {
            this.valid();
            
            if (button.type === "number") {
                this.display += button.label;
                return;
            }

            if (button.type === "operator" && button.label === "%") {
                this.display += "* 0.01";
                return;
            }

            if (button.type === "parenthesis" && this.display.length == 0 && button.label == "(")
            {
                this.display += button.label;
                return;
            }

            if (button.type === "parenthesis" && this.display.slice(-1) != button.label)
                {
                    this.display += button.label;
                    return;
                }
            

            if (button.type === "operator" && this.display.length > 0 && (!isNaN(this.display.slice(-1))|| this.display.slice(-1) == ")")) {
                this.display += button.label;
                return;
            }

            if (button.type === "clear") {
                this.display = "";
                return;
            }

            if (button.type === "equal") {
                try {
                    this.display = eval(this.display).toString();
                } catch (error) {
                    this.display = 'Error';
                }
            }
        }
    }
});

app.mount('#app');