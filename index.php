<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <link rel="stylesheet" href="vue.css">
    <title>Document</title>
</head>
<body>
    <div id = "app">
        <div id = "calculator">
            <input type="text" v-model = "display" @input = "valid">
            <div v-for = "(row, rowIndex) in buttons" :key="rowIndex">
                <button v-for = "button in row" 
                        :key="buttonIndex"
                        :class = "button.type"
                        @click = "handleClick(button)" > {{button.label}}</button>
            </div>
        </div>
    </div>  
    <script src = "vue.js"></script>
    
</body>
</html>